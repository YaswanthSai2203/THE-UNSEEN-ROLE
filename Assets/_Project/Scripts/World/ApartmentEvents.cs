using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Unseen
{
    /// <summary>Story beats, puzzles and authored anomalies for the apartment.</summary>
    public partial class ApartmentBuilder
    {
        bool _ringing, _inCall, _tvBusy;
        Line[] _pendingCall;
        Action _afterCall;
        float _ringStart;
        int _tvChannel = 1;
        readonly ChannelSequence _channels = new ChannelSequence(11, 4, 7);
        readonly CombinationLock _lock = new CombinationLock("0219");
        readonly Dictionary<string, float> _groundUsed = new Dictionary<string, float>();
        FootstepsGuide _guide;
        GameObject _musicBox;
        AudioSource _musicHidden, _musicAudible;
        float _musicTimer, _mirrorDarkTimer, _anomalyAway;
        int _anomalyPhase;
        Texture2D _testCard, _triangleCard;
        readonly List<GameObject> _shadows = new List<GameObject>();

        Vector3 PlayerPos => G.Player != null ? G.Player.transform.position : Vector3.zero;
        static bool InRect(Vector3 p, float x0, float x1, float z0, float z1) => p.x >= x0 && p.x <= x1 && p.z >= z0 && p.z <= z1;
        bool InLiving => InRect(PlayerPos, -6f, -0.75f, 0f, 5.5f);
        bool InKitchen => InRect(PlayerPos, -6f, -0.75f, 5.5f, 10f);
        bool InBathroom => InRect(PlayerPos, 0.75f, 4f, 2f, 5f);
        bool InBedroom => InRect(PlayerPos, 0.75f, 6f, 5f, 10f);
        bool InHall => InRect(PlayerPos, -0.75f, 0.75f, 0f, 14f);

        // ------------------------------------------------------------------ entering / leaving
        public override void OnEntered()
        {
            if (!Has("intro_done"))
            {
                Story.Set("intro_done");
                G.Dialogue.Play(StoryContent.Opening, VoiceKind.Thought);
                var s = G.Settings;
                GameEvents.Notify($"Move: {UIManager.KeyName(s.KeyFor(InputAction.Forward))} {UIManager.KeyName(s.KeyFor(InputAction.Left))} {UIManager.KeyName(s.KeyFor(InputAction.Back))} {UIManager.KeyName(s.KeyFor(InputAction.Right))}   Look: mouse");
                GameEvents.Notify($"Interact: {UIManager.KeyName(s.KeyFor(InputAction.Interact))}    Crouch: {UIManager.KeyName(s.KeyFor(InputAction.Crouch))}");
            }
            if (Changed && !Has("seen_changed"))
            {
                Story.Set("seen_changed");
                Thought("This isn't the same apartment. Everything is where it was, and none of it is right.");
            }
        }

        public override void OnBlackout()
        {
            foreach (var s in _shadows) if (s != null) Destroy(s);
            _shadows.Clear();
        }

        // ------------------------------------------------------------------ telephone
        void Ring(Line[] call, Action after)
        {
            _ringing = true;
            _pendingCall = call;
            _afterCall = after;
            _ringStart = Time.time;
            _ringLoop.time = 0f;
            _ringLoop.Play();
        }

        void StopRinging()
        {
            _ringing = false;
            _ringLoop.Stop();
        }

        /// <summary>Completion for a ringing event: answered, or gives up after 40 s (it will ring again later).</summary>
        bool RingDone()
        {
            if (_inCall) return false;
            if (!_ringing) return true;
            if (Time.time - _ringStart > 40f) { StopRinging(); return true; }
            return false;
        }

        void AnswerPhone()
        {
            if (!_ringing)
            {
                Thought(Has(F.Phone1) ? "No dial tone. The cord isn't plugged into anything." : "No dial tone.");
                return;
            }
            StopRinging();
            _inCall = true;
            G.Audio.PlayAt(Snd.PhonePickup, _phone.position, 0.6f);
            var after = _afterCall;
            G.Dialogue.Play(_pendingCall, VoiceKind.Caller, _phone, () => { _inCall = false; G.Audio.PlayAt(Snd.Switch, _phone.position, 0.5f); after?.Invoke(); });
        }

        HorrorEvent CallEvent(string id, string required, string done, Line[] lines, Action after, Func<bool> where = null) => new HorrorEvent
        {
            Id = id,
            Story = true,
            OneShot = false,
            Cooldown = 45f,
            RequiredFlag = required,
            BlockedByFlag = done,
            Condition = () => !_ringing && !_inCall && !G.Dialogue.Busy && (where == null || where()),
            Start = () => Ring(lines, after),
            Completion = RingDone,
            Timeout = 120f,
        };

        // ------------------------------------------------------------------ registration
        void SetupEvents()
        {
            var d = G.Director;

            // Chapter 1: the first call
            d.Register(CallEvent("call1", F.FrontDoorTried, F.Phone1, StoryContent.Call1, () =>
            {
                G.Perception.Hit(4f);
                G.Dialogue.Play(StoryContent.AfterCall1, VoiceKind.Thought);
                Story.Set(F.Phone1);
            }));

            // Chapter 2: the television sees what you can't (Event 4)
            d.Register(new HorrorEvent
            {
                Id = "tv_live", Story = true, RequiredFlag = F.GotCamera, BlockedByFlag = F.TvLiveSeen,
                Condition = () => InLiving && !_tvBusy && Vector3.Distance(PlayerPos, _tv.transform.position) < 4.5f && !G.Dialogue.Busy,
                Start = () => StartCoroutine(TvLiveSequence()),
                Completion = () => Has(F.TvLiveSeen), Timeout = 60f,
            });

            // Chapter 2: the radio
            d.Register(new HorrorEvent
            {
                Id = "radio", Story = true, RequiredFlag = F.DiaryRead, BlockedByFlag = F.RadioOn,
                Condition = () => !G.Dialogue.Busy,
                Start = () =>
                {
                    _radioLoop.Play();
                    Story.Set(F.RadioOn);
                    G.Dialogue.Play(StoryContent.RadioLines, VoiceKind.Radio, _radio);
                },
            });

            // Chapter 3+: calls (Event 2 and later)
            d.Register(CallEvent("call2", F.KitchenMsg, F.Call2, StoryContent.Call2, () =>
            {
                var p = G.Player;
                G.Audio.PlayAt(Snd.Breath, p.transform.position - p.transform.forward * 0.9f + Vector3.up * 1.55f, 0.7f);
                p.Shake(0.015f, 1.2f);
                G.Perception.Hit(10f);
                G.Dialogue.Play(StoryContent.AfterCall2, VoiceKind.Thought);
                Story.Set(F.Call2);
            }, () => InLiving || InHall));
            d.Register(CallEvent("call3", F.TvSolved, F.Call3, StoryContent.Call3, () => { G.Perception.Hit(8f); Story.Set(F.Call3); }));
            d.Register(CallEvent("call4", F.PowerOn, F.Call4, StoryContent.Call4, () => { G.Perception.Hit(6f); Story.Set(F.Call4); }));

            // Chapter 3: the mirror (Event 3)
            d.Register(new HorrorEvent
            {
                Id = "mirror_anomaly", Story = true, OneShot = false, Cooldown = 30f, RequiredFlag = F.KitchenMsg, BlockedByFlag = F.MirrorAnomaly,
                Condition = () => InBathroom && G.Observation.IsPointObserved(_bathMirror.transform.position),
                Start = () => { _bathMirror.Anomaly = true; _anomalyPhase = 0; _anomalyAway = 0f; },
                Completion = () => Has(F.MirrorAnomaly) || !InBathroom, Timeout = 90f,
            });

            RegisterAmbient(d);
            BuildPhantoms();
        }

        void RegisterAmbient(HorrorDirector d)
        {
            var anchors = new[] { new Vector3(-3f, 0, 2f), new Vector3(-3f, 0, 8.5f), new Vector3(3.5f, 0, 7.5f), new Vector3(0f, 0, 9f), new Vector3(2.4f, 0, 3.5f) };
            for (int i = 0; i < anchors.Length; i++)
            {
                var a = anchors[i];
                d.Register(new HorrorEvent
                {
                    Id = "steps_" + i, OneShot = false, RequiredFlag = F.Phone1, Cooldown = 80f, Probability = 0.08f,
                    Anchor = a + Vector3.up, MinPlayerDistance = 4f, AnchorVisibility = HorrorEvent.Visibility.MustBeUnobserved,
                    Start = () => StartCoroutine(StepsTrail(a, a + new Vector3(UnityEngine.Random.Range(-1.5f, 1.5f), 0, UnityEngine.Random.Range(-1.5f, 1.5f)), 4, Snd.StepHeavy, 0.35f)),
                });
            }
            d.Register(new HorrorEvent { Id = "knock", OneShot = false, MinChapter = 2, Cooldown = 160f, Probability = 0.05f, Anchor = new Vector3(0, 1.2f, 0.05f), MinPlayerDistance = 3f, AudioCue = Snd.Knock });
            d.Register(new HorrorEvent
            {
                Id = "bed_door_ajar", OneShot = false, MinChapter = 2, Cooldown = 90f, Probability = 0.1f,
                Anchor = new Vector3(0.75f, 1f, 6.0f), MinPlayerDistance = 4f, AnchorVisibility = HorrorEvent.Visibility.MustBeUnobserved,
                Condition = () => !_bedDoor.IsOpen && _bedDoor.Angle < 1f,
                Start = () => { _bedDoor.SetAngleInstant(22f); G.Audio.PlayAt(Snd.Creak, _bedDoor.transform.position, 0.35f); },
            });
            d.Register(new HorrorEvent { Id = "flicker", OneShot = false, MinChapter = 2, Cooldown = 70f, Probability = 0.06f, Start = () => FlickerNearest(1.6f) });
            d.Register(new HorrorEvent
            {
                Id = "whisper_closed", OneShot = false, MinChapter = 2, Cooldown = 25f, Probability = 0.35f,
                Condition = () => G.Player.Eyes.ClosedTime > 2f,
                Start = () => G.Audio.PlayAt(Snd.Whisper, G.Player.transform.position - G.Player.transform.forward * 1.2f + Vector3.up * 1.6f, 0.5f),
            });
            d.Register(new HorrorEvent
            {
                Id = "breath_behind", OneShot = false, MinChapter = 3, Cooldown = 120f, Probability = 0.05f,
                Condition = () => G.Player.Velocity.magnitude < 0.2f && !G.Player.Eyes.IsClosed,
                Start = () => G.Audio.PlayAt(Snd.Breath, G.Player.transform.position - G.Player.transform.forward * 1.0f + Vector3.up * 1.5f, 0.4f),
            });
            d.Register(new HorrorEvent { Id = "shadow_edge", OneShot = false, MinChapter = 2, Cooldown = 90f, Probability = 0.07f, Start = SpawnEdgeShadow });
            d.Register(new HorrorEvent
            {
                Id = "fridge_silence", OneShot = false, MinChapter = 2, Cooldown = 200f, Probability = 0.04f,
                Condition = () => _fridgeLoop.isPlaying,
                Start = () => { _fridgeLoop.Stop(); StartCoroutine(After(20f, () => { _fridgeLoop.Play(); G.Audio.PlayAt(Snd.Thud, _fridgeLoop.transform.position, 0.3f); })); },
            });
            d.Register(new HorrorEvent
            {
                Id = "clock_stop", OneShot = false, MinChapter = 3, Cooldown = 200f, Probability = 0.04f,
                Condition = () => _clockLoop != null && _clockLoop.isPlaying,
                Start = () => { _clockLoop.Pause(); StartCoroutine(After(15f, () => { if (_clockLoop != null) _clockLoop.UnPause(); })); },
            });
            d.Register(new HorrorEvent
            {
                Id = "water_running", OneShot = false, MinChapter = 2, Cooldown = 240f, Probability = 0.04f,
                Anchor = new Vector3(2.2f, 1f, 4.7f), MinPlayerDistance = 4f, Condition = () => !InBathroom && !_waterLoop.isPlaying,
                Start = () => _waterLoop.Play(),
            });
            d.Register(new HorrorEvent
            {
                Id = "bed_steps", OneShot = false, MinChapter = 2, Cooldown = 120f, Probability = 0.07f,
                Condition = () => InBedroom && !G.Observation.IsPointObserved(new Vector3(4.95f, 0.5f, 8f)),
                Start = () => StartCoroutine(StepsAround()),
            });
            d.Register(new HorrorEvent
            {
                Id = "tv_remote", OneShot = false, MinChapter = 2, RequiredFlag = F.TvLiveSeen, Cooldown = 150f, Probability = 0.07f,
                Condition = () => InLiving && !_tvBusy && _tv.Current == Television.Mode.Off,
                Start = () => StartCoroutine(TvRemoteFlash()),
            });
            d.Register(new HorrorEvent
            {
                Id = "bed_mirror", OneShot = false, MinChapter = 2, MaxChapter = 3, Cooldown = 200f, Probability = 0.08f,
                Condition = () => InBedroom && !_bedMirror.Anomaly,
                Start = () => { _bedMirror.Anomaly = true; StartCoroutine(After(25f, () => _bedMirror.Anomaly = false)); },
            });
            d.Register(new HorrorEvent
            {
                Id = "hall_figure", OneShot = false, MinChapter = 3, Cooldown = 120f, Probability = 0.1f,
                Condition = () => InHall && PlayerPos.z < 5f,
                Anchor = new Vector3(0, 1f, 9.4f), AnchorVisibility = HorrorEvent.Visibility.MustBeUnobserved,
                Start = () => SpawnVanishingFigure(new Vector3(0, 0, _falseWall.transform.position.z - 0.6f), 180f, () => { _hall1.Flicker(0.4f); _hall2.Flicker(0.4f); }),
            });
        }

        /// <summary>At low perception, things appear that are not there (and vanish once looked at).</summary>
        void BuildPhantoms()
        {
            var chair = Chair("PhantomChair", new Vector3(-2.6f, 0f, 4.7f), 200f);
            var c = chair.AddComponent<ObservableObject>();
            c.CanMoveWhenUnobserved = false;
            c.CanAppearWhenUnobserved = true;
            c.CanDisappearWhenObserved = true;
            c.DisappearAfterObserved = 1.4f;
            c.MovementDelay = 3f;
            c.EventCooldown = 30f;
            c.Condition = () => G.Perception.Value < 35f;
            c.SetVisible(false);
            var fig = Figure("PhantomFigure", new Vector3(-1.4f, 0f, 7.6f), 90f, Layers.Default);
            var f = fig.AddComponent<ObservableObject>();
            f.CanMoveWhenUnobserved = false;
            f.CanAppearWhenUnobserved = true;
            f.CanDisappearWhenObserved = true;
            f.DisappearAfterObserved = 0.5f;
            f.RequiredStoryProgress = 3;
            f.EventCooldown = 60f;
            f.MinPlayerDistance = 3.5f;
            f.Condition = () => G.Perception.Value < 30f;
            f.OnDisappeared = o => FlickerNearest(0.3f);
            f.SetVisible(false);
        }

        // ------------------------------------------------------------------ continuous checks
        void Update()
        {
            var p = G.Player;
            if (p == null || G.State != GameState.Playing) return;

            // P3: writing on the mirror, only in the dark, only with closed eyes
            if (Has(F.KitchenMsg) && !Has(F.MirrorMsg) && InBathroom && !_bathLight.Lit &&
                Vector3.Distance(p.transform.position, _bathMirror.transform.position) < 2.0f && p.Eyes.IsClosed)
            {
                _mirrorDarkTimer += Time.deltaTime;
                if (_mirrorDarkTimer > 3f)
                {
                    _mirrorMsg.SetActive(true);
                    G.Audio.PlayAt(Snd.Creak, _bathMirror.transform.position, 0.2f, 1.8f);
                    Story.Set(F.MirrorMsg);
                    Story.AddJournal("Bathroom mirror, in the dark: CH 11 4 7");
                    StartCoroutine(WhenEyesOpen(() => Thought("Letters in the steam on the glass. CH... 11, 4, 7. A drawing of a television.")));
                }
            }
            else _mirrorDarkTimer = 0f;

            UpdateMirrorAnomaly(p);
            UpdateMusicBox(p);

            // P5: the footsteps begin once the broadcast has been seen
            if (Has(F.TvSolved) && !Has(F.ClosetFound) && _guide == null)
            {
                var go = new GameObject("Footsteps");
                go.transform.SetParent(transform, false);
                go.transform.localPosition = new Vector3(0f, 0f, 9.2f);
                _guide = go.AddComponent<FootstepsGuide>();
                _guide.Path = new[] { new Vector3(0f, 0f, 6.5f), new Vector3(0f, 0f, 4.0f), new Vector3(0.1f, 0f, 1.8f), new Vector3(0.45f, 0f, 1.0f) };
                _guide.OnArrived = () => StartCoroutine(ClosetReveal());
            }
        }

        void UpdateMirrorAnomaly(PlayerController p)
        {
            if (!_bathMirror.Anomaly) return;
            if (!InBathroom)
            {
                if (Has(F.MirrorAnomaly) || _anomalyPhase == 0) _bathMirror.EndAnomaly();
                return;
            }
            bool seen = G.Observation.IsPointObserved(_bathMirror.transform.position);
            if (_anomalyPhase == 0) { if (!seen) { _anomalyAway += Time.deltaTime; if (_anomalyAway > 1.2f) _anomalyPhase = 1; } }
            else if (_anomalyPhase == 1 && seen && !Has(F.MirrorAnomaly))
            {
                _anomalyPhase = 2;
                StartCoroutine(After(1.2f, () =>
                {
                    G.Perception.Hit(8f);
                    G.Audio.PlayAt(Snd.Stinger, _bathMirror.transform.position, 0.25f);
                    Thought("I moved. It didn't. It's still standing there, facing the glass.");
                    Story.Set(F.MirrorAnomaly);
                }));
            }
        }

        // ------------------------------------------------------------------ P6: the music box
        void BuildMusicBox(Vector3 pos)
        {
            if (Has(F.MusicBoxFound)) return;
            _musicBox = new GameObject("MusicBox");
            _musicBox.transform.SetParent(transform, false);
            _musicBox.transform.localPosition = pos;
            Box("Body", new Vector3(0, 0.05f, 0), new Vector3(0.16f, 0.1f, 0.11f), "wood_light", _musicBox.transform);
            Box("Lid", new Vector3(0, 0.105f, 0), new Vector3(0.17f, 0.012f, 0.12f), "plastic_red", _musicBox.transform);
            _musicHidden = G.Audio.CreateLoop(Snd.MusicBox, _musicBox.transform, Vector3.up * 0.1f, 0.9f, AudioCat.UnseenOnly, 9f, false);
            _musicAudible = G.Audio.CreateLoop(Snd.MusicBox, _musicBox.transform, Vector3.up * 0.1f, 0.35f, AudioCat.Sfx, 5f, false);
            bool revealed = Has("musicbox_revealed");
            SetMusicBoxVisible(revealed);
            Pickup(_musicBox, "Take the music box", () =>
            {
                G.Inventory.Add(Items.MusicBox);
                G.Inventory.Add(F.FragB);
                Story.Set(F.FragB);
                Story.Set(F.MusicBoxFound);
                G.Perception.Restore(15f, "A memory steadies you.");
                Thought("Folded inside, under the broken dancer: part of a photograph. A woman's face.");
            });
        }

        void SetMusicBoxVisible(bool v)
        {
            foreach (var r in _musicBox.GetComponentsInChildren<Renderer>()) r.enabled = v;
            foreach (var c in _musicBox.GetComponentsInChildren<Collider>()) c.enabled = v;
        }

        void UpdateMusicBox(PlayerController p)
        {
            if (_musicBox == null || !Has(F.KitchenMsg)) return;
            bool revealed = Has("musicbox_revealed");
            if (!revealed && !_musicHidden.isPlaying) _musicHidden.Play();
            if (revealed && !_musicAudible.isPlaying) { _musicHidden.Stop(); _musicAudible.Play(); }
            if (revealed) return;
            if (p.Eyes.IsClosed && Vector3.Distance(p.transform.position, _musicBox.transform.position) < 1.9f)
            {
                _musicTimer += Time.deltaTime;
                if (_musicTimer > 1.5f)
                {
                    Story.Set("musicbox_revealed");
                    SetMusicBoxVisible(true);
                    StartCoroutine(WhenEyesOpen(() => Thought("There. By the bed. It was there the whole time.")));
                }
            }
            else _musicTimer = 0f;
        }

        // ------------------------------------------------------------------ P5: closet
        IEnumerator ClosetReveal()
        {
            yield return new WaitForSeconds(0.6f);
            bool on1 = _hall1.On, on2 = _hall2.On;
            _hall1.On = _hall2.On = false;
            G.Audio.PlayAt(Snd.Knock, new Vector3(0.75f, 1.2f, 1.0f), 0.5f);
            yield return new WaitForSeconds(1.8f);
            _closetFiller.SetActive(false);
            _closetRoot.SetActive(true);
            _closetDoor.SetAngleInstant(25f);
            G.Audio.PlayAt(Snd.Creak, new Vector3(0.75f, 1.2f, 1.0f), 0.4f);
            yield return new WaitForSeconds(0.8f);
            _hall1.On = on1; _hall2.On = on2;
            G.Perception.Hit(8f);
            Story.Set(F.ClosetFound);
            Thought("A door. There was never a door there.");
        }

        // ------------------------------------------------------------------ TV
        IEnumerator TvLiveSequence()
        {
            _tvBusy = true;
            _tv.SetStatic();
            yield return new WaitForSeconds(1.5f);
            Vector3 tv = _tv.transform.position;
            Vector3 away = PlayerPos - tv; away.y = 0;
            Vector3 fp = PlayerPos + away.normalized * 0.9f;
            fp.x = Mathf.Clamp(fp.x, -5.6f, -1.0f);
            fp.z = Mathf.Clamp(fp.z, 0.8f, 5.1f);
            fp.y = 0f;
            var fig = Figure("TVFigure", fp, Quaternion.LookRotation(tv - fp).eulerAngles.y, Layers.Unseen);
            _tv.SetFeed(_tvLiveCam);
            G.Audio.Play2D(Snd.Drone, 0.25f, AudioCat.Music);
            yield return new WaitForSeconds(5.5f);
            G.Perception.Hit(8f);
            _tv.SetStatic();
            yield return new WaitForSeconds(0.6f);
            Destroy(fig);
            _tv.SetFeed(_tvBathCam);
            yield return new WaitForSeconds(4.5f);
            _tv.SetStatic();
            yield return new WaitForSeconds(0.4f);
            _tv.SetOff();
            G.Dialogue.Play(StoryContent.TvLive, VoiceKind.Thought, null, () => { Story.Set(F.TvLiveSeen); _tvBusy = false; });
        }

        IEnumerator TvRemoteFlash()
        {
            _tvBusy = true;
            _tv.SetStatic();
            yield return new WaitForSeconds(1f);
            _tv.SetFeed(_remoteCam);
            yield return new WaitForSeconds(6f);
            _tv.SetStatic();
            yield return new WaitForSeconds(0.5f);
            _tv.SetOff();
            _tvBusy = false;
            if (!Has("remote_seen")) { Story.Set("remote_seen"); Thought("A child's bedroom. There is no child's bedroom in this apartment."); }
        }

        void UseTelevision()
        {
            if (_tvBusy) return;
            G.UI.OpenChannels(_tvChannel, TuneChannel);
        }

        void TuneChannel(int ch)
        {
            _tvChannel = ch;
            if (_channels.Push(ch) && Has(F.KitchenMsg) && !Has(F.TvSolved)) { G.UI.CloseAllModals(); StartCoroutine(Broadcast()); return; }
            if (ch == 3) _tv.SetCard(_testCard != null ? _testCard : (_testCard = TestCard()));
            else if (ch == 9 && Chapter >= 2) _tv.SetFeed(_remoteCam);
            else _tv.SetStatic();
        }

        IEnumerator Broadcast()
        {
            _tvBusy = true;
            _tv.SetStatic();
            yield return new WaitForSeconds(1f);
            if (_triangleCard == null)
            {
                var c = new PixelCanvas(320, 240, new Color(0.1f, 0.14f, 0.3f));
                c.TextCentered(18, "HAPPY BIRTHDAY", 3, new Color(0.95f, 0.85f, 0.5f));
                c.DrawSymbol(Symbol.Triangle, 110, 140, 60, 8, Color.white);
                c.Text(190, 120, "= 2", 6, Color.white);
                c.Noise(0.08f);
                _triangleCard = c.ToTexture();
            }
            _tv.SetCard(_triangleCard);
            bool done = false;
            G.Dialogue.Play(StoryContent.TvBroadcast, VoiceKind.Tape, _tv.transform, () => done = true);
            while (!done) yield return null;
            Story.AddJournal("Television, channels 11-4-7: TRIANGLE = 2");
            G.Perception.Restore(10f, "A memory steadies you.");
            Story.Set(F.TvSolved);
            yield return new WaitForSeconds(2f);
            _tv.SetOff();
            _tvBusy = false;
        }

        static Texture2D TestCard()
        {
            var c = new PixelCanvas(320, 240, Color.black);
            Color[] bars = { new Color(0.75f, 0.75f, 0.75f), new Color(0.75f, 0.75f, 0f), new Color(0f, 0.75f, 0.75f), new Color(0f, 0.75f, 0f), new Color(0.75f, 0f, 0.75f), new Color(0.75f, 0f, 0f), new Color(0f, 0f, 0.75f) };
            for (int i = 0; i < bars.Length; i++) c.Rect(i * 46, 0, 46, 170, bars[i] * 0.8f);
            c.TextCentered(195, "PLEASE STAND BY", 2, Color.white);
            c.Noise(0.06f);
            return c.ToTexture();
        }

        // ------------------------------------------------------------------ interactions
        void TakeFilm()
        {
            if (!Has(F.GotCamera)) { Thought("Old batteries, a remote, and a box of instant film. Film for a camera I don't have."); return; }
            int have = G.Inventory.Count(Items.Film);
            if (have >= 3) { Thought("You have enough film for now."); return; }
            G.Inventory.Add(Items.Film, 3 - have);
        }

        void UseRadio()
        {
            if (_radioLoop.isPlaying)
            {
                _radioLoop.Stop();
                G.Dialogue.StopAll();
                if (Has(F.RadioOn) && !Has(F.RadioOff))
                {
                    Story.Set(F.RadioOff);
                    StartCoroutine(After(1.2f, () =>
                    {
                        _cabinetDoor.SetAngleInstant(12f);
                        G.Audio.PlayAt(Snd.Creak, _cabinetDoor.transform.position, 0.45f, 1.3f);
                        Thought("Behind me, a cabinet door creaks open. Just a little.");
                    }));
                }
                return;
            }
            _radioLoop.Play();
            StartCoroutine(StopAfter(_radioLoop, 3f));
            Thought("Only static.");
        }

        void Ground(string id, float amount, string text)
        {
            if (_groundUsed.TryGetValue(id, out var t) && Time.time - t < 90f) { Thought("Not yet. It doesn't work if you do it too often."); return; }
            _groundUsed[id] = Time.time;
            G.Perception.Restore(amount, "You feel steadier.");
            Thought(text);
        }

        void GroundAtSink()
        {
            G.Audio.PlayAt(Snd.Water, new Vector3(-3.5f, 1f, 9.7f), 0.5f);
            Ground("sink", 25f, "Cold water over your hands and wrists. This is real. This is real.");
        }

        void UseFuseBox()
        {
            if (Power) { Thought("All the fuses are in. It hums quietly."); return; }
            if (G.Inventory.Has(Items.Fuse))
            {
                G.Inventory.Remove(Items.Fuse);
                G.Audio.PlayAt(Snd.Breaker, new Vector3(-0.7f, 1.55f, 0.95f), 0.8f);
                Story.Set(F.FuseInstalled);
                _hall1.Flicker(0.8f);
                _hall2.Flicker(1.1f);
                Thought("The hallway lights stutter on.");
                return;
            }
            Thought("The fuse box. One slot is empty. Someone wrote HALL above it in pencil.");
        }

        void UseFrontDoor()
        {
            if (!Has(F.FrontDoorTried))
            {
                Story.Set(F.FrontDoorTried);
                Thought("Locked. And there's no key. The handle is warm, as if someone was holding it from the other side.");
                return;
            }
            if (G.Inventory.Has(Items.FrontKey))
            {
                G.UI.Confirm("Unlock the front door and leave? You will not come back, and you will not remember.", () => G.TriggerEnding(Ending.Forget));
                return;
            }
            Thought("Still locked.");
        }

        void UseBasementDoor()
        {
            if (Has(F.BasementUnlocked)) { G.TransitionTo(SceneNames.Basement, "default"); return; }
            if (!Has(F.PadlockSeen))
            {
                Story.Set(F.PadlockSeen);
                Story.AddJournal("Basement padlock dials, in order: CIRCLE, TRIANGLE, SQUARE, CROSS");
            }
            G.UI.OpenPadlock(_lock, () =>
            {
                if (_padlock != null) Destroy(_padlock);
                G.Audio.PlayAt(Snd.Unlock, _falseWall.transform.position + Vector3.up, 0.8f);
                Story.Set(F.BasementUnlocked);
                Thought("February nineteenth. It opens. Cold air comes up from below.");
            });
        }

        void UseFamilyFrame()
        {
            if (Has(F.PhotoRestored)) { Thought("Adrian, Hanna and Mira. Lindell Street, one summer."); return; }
            int n = StoryRules.FragmentCount(Has);
            if (n < 4)
            {
                G.Inventory.Read("photo_back");
                if (n > 0) GameEvents.Notify($"Pieces of the photograph: {n} / 4");
                return;
            }
            G.UI.OpenFragments(new FragmentPuzzle(), () =>
            {
                foreach (var f in F.Fragments) G.Inventory.Remove(f);
                Story.Set(F.PhotoRestored);
                UpdateFramePicture();
                G.Inventory.Add(Items.RoomKey);
                Story.Set(F.GotRoomKey);
                G.Perception.Restore(30f, "You remember her face.");
                Thought("Behind the photograph, taped to the board: a small key on a faded pink ribbon.");
            });
        }

        void UpdateFramePicture()
        {
            Texture2D tex;
            if (Has(F.PhotoRestored)) tex = Materials.FamilyPhoto(true).ToTexture();
            else
            {
                var c = new PixelCanvas(256, 192, new Color(0.25f, 0.2f, 0.15f));
                var rng = new System.Random(2);
                for (int x = 0; x < 256; x++)
                {
                    int t = 4 + rng.Next(8), b = 4 + rng.Next(8);
                    c.Rect(x, 0, 1, t, new Color(0.9f, 0.88f, 0.82f));
                    c.Rect(x, 192 - b, 1, b, new Color(0.9f, 0.88f, 0.82f));
                }
                tex = c.ToTexture();
            }
            _framePicture.sharedMaterial = Materials.NewLit(Color.white, tex, 0.3f);
        }

        // ------------------------------------------------------------------ helpers
        IEnumerator After(float seconds, Action a)
        {
            yield return new WaitForSeconds(seconds);
            a();
        }

        IEnumerator WhenEyesOpen(Action a)
        {
            while (G.Player != null && G.Player.Eyes.IsClosed) yield return null;
            yield return new WaitForSeconds(0.4f);
            a();
        }

        IEnumerator StepsTrail(Vector3 from, Vector3 to, int count, Snd snd, float volume)
        {
            for (int i = 0; i < count; i++)
            {
                G.Audio.PlayAt(snd, Vector3.Lerp(from, to, count > 1 ? i / (count - 1f) : 0f), volume, UnityEngine.Random.Range(0.85f, 1.05f), AudioCat.Sfx, 14f);
                yield return new WaitForSeconds(0.6f);
            }
        }

        IEnumerator StepsAround()
        {
            var pts = new[] { new Vector3(3.8f, 0, 7.1f), new Vector3(4.6f, 0, 7.0f), new Vector3(5.4f, 0, 7.05f), new Vector3(6.0f, 0, 7.3f) };
            foreach (var p in pts)
            {
                G.Audio.PlayAt(Snd.Step, p, 0.3f, 1.45f);
                yield return new WaitForSeconds(0.5f);
            }
        }

        void FlickerNearest(float seconds)
        {
            RoomLight best = null;
            float bd = 7f;
            foreach (var l in new[] { _livingLight, _lamp, _kitchenLight, _bedLight, _bathLight, _hall1, _hall2 })
            {
                if (l == null || !l.Lit) continue;
                float dd = Vector3.Distance(l.transform.position, PlayerPos);
                if (dd < bd) { bd = dd; best = l; }
            }
            if (best != null) { best.Flicker(seconds); G.Audio.PlayAt(Snd.Buzz, best.transform.position, 0.25f); }
        }

        /// <summary>A figure placed just outside the player's view, so a small turn of the head reveals it.</summary>
        void SpawnEdgeShadow()
        {
            var cam = G.Player.Cam.transform;
            var spots = new[]
            {
                new Vector3(-5.5f, 0, 0.5f), new Vector3(-1.3f, 0, 5.0f), new Vector3(-5.5f, 0, 9.4f), new Vector3(-1.3f, 0, 6.0f),
                new Vector3(0f, 0, 9.3f), new Vector3(0f, 0, 0.6f), new Vector3(1.3f, 0, 9.5f), new Vector3(5.5f, 0, 5.5f), new Vector3(3.6f, 0, 4.5f)
            };
            foreach (var s in spots)
            {
                Vector3 head = s + Vector3.up * 1.6f;
                float dist = Vector3.Distance(cam.position, head);
                float angle = ObservationMath.AngleTo(cam.position, cam.forward, head);
                if (dist < 2.5f || dist > 7f || angle < 50f || angle > 85f) continue;
                if (G.Observation.IsPointObserved(head) || !ObservationManager.HasLineOfSight(cam.position, head, null)) continue;
                SpawnVanishingFigure(s, Quaternion.LookRotation(cam.position - head).eulerAngles.y, () => FlickerNearest(0.35f));
                return;
            }
        }

        void SpawnVanishingFigure(Vector3 pos, float yaw, Action onVanish)
        {
            var fig = Figure("Shadow", pos, yaw, Layers.Default);
            _shadows.Add(fig);
            var ob = fig.AddComponent<ObservableObject>();
            ob.CanMoveWhenUnobserved = false;
            ob.CanDisappearWhenObserved = true;
            ob.DisappearAfterObserved = 0.4f;
            ob.EventCooldown = 0f;
            ob.OnDisappeared = o => { onVanish?.Invoke(); G.Perception.Hit(4f); Destroy(fig, 0.1f); };
            // if never seen, it leaves quietly — only while unobserved
            StartCoroutine(After(12f, () => { if (fig != null && !ob.IsObserved) Destroy(fig); }));
        }
    }
}
