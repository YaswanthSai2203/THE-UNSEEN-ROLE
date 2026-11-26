# Project status and feature completion report

## How it was built and what is verified

The development environment had **no Unity Editor**. Unity cannot be installed without a licensed download, and
that host was blocked. To compensate:

| Check | Result |
|---|---|
| All runtime code (`Unseen` assembly) compiles against Unity 2021.3 reference assemblies (NuGet `UnityEngine.Modules`) | ✅ 0 errors, 0 warnings |
| Editor code (`ProjectSetup`, `BuildScript`) compiles against `UnityEditor.dll` (2021.1) | ✅ (its URP-asset creation block is excluded from this check, see below) |
| PlayMode test code compiles | ✅ |
| Pure-logic tests run under .NET (perception, observation geometry, story progression, horror scheduling, puzzles, inventory, save validation, content completeness) | ✅ 29/29 pass. A deliberately broken story rule makes them fail, so they are effective |
| `Scripts/URP/UrpPostFX.cs` and the URP block in `ProjectSetup` | ⚠️ **Not compiled.** URP packages were unavailable. Only long-stable URP APIs are used |
| Running in Unity: visuals, lighting, audio mix, frame rate, actual playthrough | ❌ **Not done.** This is the first thing to do (see "Next steps") |
| Windows `.exe` | ❌ Not produced here. Run `BuildScript.BuildWindows` (one command, see README) |

Unity 6 APIs are a superset of the 2021.3 APIs used, apart from deprecations. The code avoids deprecated calls
(`FindObjectOfType`, `Rigidbody.velocity`).

## Feature report

✅ implemented · ⚠️ implemented with a documented substitute or limit · ❌ not implemented

### Core mechanics
- ✅ **Perception (observation) system:** frustum, line of sight, safety margin, delay, cooldown, story gating,
  per-object configuration (IsObservable, CanMoveWhenUnobserved, MovementDelay, MaximumMovementDistance,
  CanAppearWhenUnobserved, CanDisappearWhenObserved, RequiredStoryProgress, MovementAudio, EventCooldown). Objects
  only move along authored steps, never into occupied space (including the player), and never while either end
  of the move is visible.
- ✅ Perception meter: drains, recovery, effects (light instability, audio distortion, post effects, phantom objects
  below 35%). Reaching 0 causes a blackout: you lose time and are moved to a safe spot, never losing progress.
- ✅ Eye closure (hold Q): fade to black, sharper hearing, sounds only audible with closed eyes, the world may change,
  and after 6 s perception erodes and whispers start.
- ✅ Instant camera: film, flash, a real render that also sees the Unseen layer, reveals, PNG photos, and a photo
  inspection UI. The living-room drawer refills film to 3 so you can never run out.
- ✅ Interaction system with prompts: doors, pickups, documents, phone, lights, TV, mirrors, keys, puzzles, photographs.
- ✅ HorrorDirector with authored story beats and 17 ambient event types (steps elsewhere, knocking, a door left ajar,
  flicker, whispers, breathing, a shadow at the edge of vision, the fridge going silent, the clock stopping, water
  running, steps around the bed, the TV showing an unvisited room, a mirror that doesn't follow, a figure at the
  end of the hallway, and more).

### Spec events
- ✅ Event 1, the chair: moves toward the TV, then turns to face the hallway.
- ✅ Event 2, the telephone: "You're looking in the wrong direction", then breathing behind you.
- ✅ Event 3, the mirror: the reflection stays facing the glass after you move.
- ✅ Event 4, the television: a live view of the living room shows a figure behind you that isn't there.
- ✅ Event 5, the hallway: footsteps stop, the light goes out, and a door that wasn't there appears.
- ✅ The hallway changes length when you aren't looking.

### Content
- ✅ Apartment: living room, kitchen, hallway (with its impossible extension), bedroom, bathroom, closet. Every
  requested prop is present.
- ✅ Basement: storage, sheet-covered furniture, broken TV, electrical panel, records, photographs, and a locked room
  (Mira's).
- ✅ 5 chapters with title cards, 25 objectives with two hint levels each, and all dialogue and documents written
  (no placeholders).
- ✅ **10 puzzles:** fuse; the key that only a photograph reveals; writing on a mirror in the dark with eyes closed;
  TV channel sequence; following footsteps without looking; finding a music box by sound with eyes closed; symbol
  padlock with clues from four rooms; breakers while the presence hunts; rebuilding the family photograph; the
  final memory and observation puzzle.
- ✅ **3 endings:** FORGET (leave by the front door), REMEMBER (look at the empty chair and keep looking), STAY (keep
  your eyes closed in her room). The pre-choice checkpoint stays saved so every ending can be reached, and endings
  found are shown in the main menu.
- ✅ The apartment changes noticeably from chapter 4: stained walls, the sofa turned around, chairs facing away,
  blacked-out photographs, children's drawings, colder light, the TV on static.

### Presentation
- ✅ Main menu (Continue, New Game, Settings, Credits, Quit) over a live hallway scene where a figure comes and goes
  during light flickers.
- ✅ Minimal HUD: prompt, perception, film, notifications, objective, subtitles, saving indicator, photo preview.
- ✅ Pause menu: Resume, Settings, Restart checkpoint, Main menu, Quit.
- ✅ Settings: master, music and SFX volume; sensitivity; invert Y; brightness; resolution; fullscreen; quality;
  VSync; FOV; motion blur; subtitles; camera shake; head bob; reduced motion; key rebinding.
- ⚠️ **Art:** procedural textures (wallpapers, wood, tiles, stains, fabrics) on primitive and box-mesh geometry, with
  realtime lights and shadows, fog, dust and URP post-processing. It is grounded and coherent, but it is a stylised
  blockout, not photoreal. Every asset can be replaced (see ARCHITECTURE).
- ⚠️ **Lighting is realtime only.** Baking needs the editor and authored scenes. It can be added after an
  in-editor pass.
- ⚠️ **Audio:** everything is synthesized, with no copyrighted or unlicensed material. Spoken lines are
  voice-like formant murmurs, and the words are in the subtitles and journal. Real voice recordings would be a
  major upgrade.
- ✅ Music only at selected moments: chapter cards, the TV reveal, the photograph, and the endings. Silence is
  used deliberately.

### Saving
- ✅ Versioned JSON, atomic writes with a backup, corruption fallback, automatic checkpoints at story beats and
  scene changes, New Game, Continue and Restart checkpoint. Saves hold the chapter, objective, position,
  inventory, documents, photographs, puzzle state, perception, story and journal. Transient entity positions are
  deliberately not saved.

### Tests
- ✅ EditMode: 29 logic tests plus Unity-only tests (save round trip, corrupt save, junk JSON, text rendering).
- ✅ PlayMode: walls block movement; interaction detection; observation front, behind and occluded; movement only
  when unobserved; no movement into occupied space; perception drain and recovery; inventory pickup; story to
  chapter 4; new game and scene transition keeping inventory; continue restoring a checkpoint; ending state.
  These are compile-checked only and have not been run.

## Known limitations and risks

1. **Never run in Unity.** Expect some tuning after the first playthrough: light intensities, the audio mix,
   possibly object placement. Runtime errors the compiler can't catch may remain.
2. **Playtime is probably about 60–90 minutes,** below the 2–3 hour target. The game prioritises a complete
   arc over padding. More content would fit into the existing systems (new ObservableObjects, HorrorEvents,
   documents).
3. The URP post-processing file and the URP-asset creation step have not been compiled. If URP setup fails,
   create the project from Unity Hub's **Universal 3D** template and copy in `Assets/_Project` and `Packages`.
   The game also runs without post-processing.
4. `ProjectVersion.txt` names 6000.0.32f1. Any 6000.0 LTS should work, and Hub will offer to open with the
   installed version.
5. `.meta` files and ProjectSettings are generated by Unity on first open. Commit them afterwards.

## Next steps (in order)

1. Open the project in Unity 6, let `ProjectSetup` run, and restart if asked.
2. Run both Test Runner suites.
3. Play from MainMenu to each ending using the walkthrough below. Tune lights in the builders and loop volumes
   in `AudioManager.CreateLoop` calls.
4. **The Unseen → Build Windows (x64)**, then launch `Builds/Windows/TheUnseen.exe` and play again.

## Walkthrough (QA reference; contains spoilers)

**Chapter I.** Take the flashlight (bedside table). Try the front door (south end of the hallway); the living-room
phone then rings, so answer it. Read the fridge note, take the fuse from the drawer left of the kitchen sink, and
insert it in the hallway fuse box. Leave the living room, come back and look at the chair by the window table.

**Chapter II.** Take the camera (bedroom desk drawer). Stand near the living-room TV: it shows a figure behind you,
then the bathroom. Photograph the bathroom sink: the key and "circle = 0" appear in the photo. Take the key, open
the wardrobe and read the diary. The kitchen radio comes on; switch it off. The wall cabinet creaks open: read it
("cross = 9").

**Chapter III.** Bathroom: switch the light off, stand at the mirror and hold Q for 3 s, which shows "CH 11 4 7". Use
the TV and tune 11, 4, 7 ("triangle = 2"). Footsteps start at the north end of the hallway: follow them with eyes
closed or facing away, and a closet appears (note "square = 1", fragment 1). Close your eyes near the bed to find
the music box (fragment 2). Padlock on the basement door: **0 2 1 9**.

**Chapter IV.** The presence moves only when unobserved, so keep it in view. Breakers: north-west corner, west wall,
east wall. With power on, the tape plays and fragment 3 is in the TV cabinet; fragment 4 is in the "DO NOT OPEN"
box. Go upstairs and use the frame next to the bookshelf to rebuild the photo, which gives the ribbon key.

**Chapter V.** Open her room. Face one wall for a few seconds and turn around, and repeat until all four memories
appear (rabbit, shoe, crayons, drawing). Answer the toy phone. Then choose: take the key from the desk and leave by
the front door (FORGET); look at the chair for 12 s (REMEMBER); or hold Q in the room for 12 s (STAY).
