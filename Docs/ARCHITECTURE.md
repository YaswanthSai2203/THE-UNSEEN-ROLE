# Architecture

## Guiding decisions

| Decision | Why |
|---|---|
| **The world is built in code** (`World/*Builder.cs`) from primitives and procedural meshes. | The project could not be authored in the Unity Editor. Code-built levels have no broken prefab or scene references, and every object is replaceable. The three scenes are intentionally empty. |
| **All progress is a set of story flags** (`StoryState`). Chapter and objective come from a pure function (`StoryRules`), and the builders configure every object from the flags. | Saving and loading only means storing flags and then rebuilding the world. This makes softlocks and inconsistent restores far less likely, and the full progression can be unit tested. |
| **Procedural textures and audio** (`Materials`, `PixelCanvas`, `ProceduralAudio`). | There are no third-party or licensed assets, and no missing-asset risk. |
| **IMGUI for all UI** (`UIManager*.cs`). | It needs no Canvas prefabs or font assets, and it scales from a 1080p virtual canvas to any resolution. |
| **One composition root** (`GameManager`, created automatically before the first scene). | Every scene can be played directly. Systems get each other through `GameManager.I` instead of many singletons. |
| **Post-processing behind an interface** (`IPostFX`, with the URP implementation in its own assembly). | The runtime does not depend on render-pipeline APIs. |

## Assemblies

- `Unseen` (`Assets/_Project/Scripts`): all runtime code.
- `Unseen.URP` (`Scripts/URP`): URP Volume post-processing (grain, vignette, desaturation, aberration, motion blur, exposure).
- `Unseen.Editor` (`Scripts/Editor`): `ProjectSetup` and `BuildScript`.
- `Unseen.Tests` (`Tests/EditMode`) and `Unseen.PlayModeTests` (`Tests/PlayMode`).

## Systems (required classes in bold)

| Folder | Classes | Responsibility |
|---|---|---|
| Core | **GameManager**, GameSettings, GameEvents, Layers, PostFX | Game flow (new game, continue, checkpoint restart, transitions, blackout, endings), settings and remappable keys, event hub |
| Player | **PlayerController**, **EyeClosureController**, **CameraController** (the instant camera) | Movement (walk, faster walk, crouch with headroom check, gravity, head bob, footsteps, shake), eye closure, photography |
| Interaction | **PlayerInteraction**, Interactable, Door, RoomLight, RevealOnPhoto | Raycast interaction with prompts; doors and locks; lights (power, switch, flicker, perception instability); things only photos reveal |
| Observation | **ObservationManager**, **ObservableObject**, ObservationMath | Frustum test with a 15% safety margin, plus line-of-sight raycasts. Objects change only while both their current and target placement are unobserved, after a delay and cooldown, never into occupied space, and only along authored steps |
| Perception | **PerceptionManager**, PerceptionModel, PerceptionZone | Meter with drains (watching anomalies, distorted areas, calls, closed eyes after 6 s), recovery (safe areas, grounding objects, puzzles, memories), and a capped passive recovery |
| Horror | **HorrorDirector**, **HorrorEvent**, HorrorScheduler | Authored events with ID, flags, chapter range, cooldown, probability, distance and visibility rules, audio cue, start action and completion. Story beats run when eligible; ambient events are spaced out, never overlap and never repeat back to back |
| AI | UnseenEntity, FootstepsGuide | The presence moves only while unobserved, on a line-of-sight waypoint graph; the footsteps lead you only while you don't look at them |
| Audio | **AudioManager**, ProceduralAudio, Snd | Pooled 3D one-shots and loops, category volumes. Sounds in the `UnseenOnly` category are audible only with eyes closed; low perception distorts the listener |
| Story | **StoryManager**, **DialogueManager**, StoryRules, StoryState, StoryContent, StoryFlags, Line | Flags, chapters, objectives, all text and dialogue, synthesized voices, subtitles and journal |
| Puzzles | **PuzzleManager**, PuzzleLogic (CombinationLock, ChannelSequence, FragmentPuzzle, PuzzleRegistry) | Puzzle logic and inactivity hints (150 s and 330 s) |
| Inventory | **InventoryManager**, InventoryState | Items, documents, photographs |
| SaveSystem | **SaveManager**, **CheckpointManager**, SaveData | Versioned JSON with atomic writes and a backup. A corrupt save falls back to the backup and never crashes |
| UI | **UIManager** (partial: HUD, menus, modals) | Main menu, HUD, pause, settings, inventory, documents, photographs, puzzle panels, chapter cards, endings, credits |
| World | WorldBuilder, ApartmentBuilder (+ApartmentEvents), BasementBuilder, MenuBuilder, Mirror, Television, Materials, PixelCanvas, MeshKit | Level construction, real planar mirrors (off-axis projection, no custom shader), TV feeds that can see the Unseen layer, procedural materials |

## Camera layers

| Layer | Seen by |
|---|---|
| 0 Default | Everyone |
| 2 IgnoreRaycast (mirror surfaces, mirror writing) | Player, photos |
| 29 Player | Nobody (it is the capsule) |
| 30 Unseen | **Only** the instant camera and TV feeds (the hidden key, the circle symbol, the figure on the TV) |
| 31 ReflectionOnly | Mirrors and TV feeds (the player's body) |

## Flow of a save

`Story.Set(flag)` → StoryRules recomputes chapter and objective → a checkpoint is taken if the flag is in
`StoryContent.CheckpointFlags` or a chapter started → `SaveManager.Write` (temp file, then replace, keeping
`save.bak`). Loading rebuilds the scene's world from the flags and puts the player at the saved position.
Photographs are stored as PNG files in `persistentDataPath/photos`.

## Replacing procedural assets

Every visual is a material from `Materials.Get(name)` applied to code-built geometry. To use real art, replace a
material case in `Materials.Create`, or swap the furniture calls in a builder for `Instantiate(prefab)`. Sounds come
from `ProceduralAudio.Get(Snd)`; return an imported `AudioClip` there to replace one. Voices are formant-synthesized
murmurs and the words are carried by subtitles and the journal. Recorded voice acting can replace
`ProceduralAudio.Voice` without changing anything else.

## Extending

- **New anomaly:** add an `ObservableObject` with authored `ObservableStep`s, or register a `HorrorEvent` in a builder.
- **New puzzle:** add its logic to `PuzzleLogic`, a solved flag in `StoryFlags`, an objective and hints in
  `StoryRules`/`StoryContent`, and an entry in `PuzzleRegistry`. Then extend `StoryRulesTests.Playthrough`.
