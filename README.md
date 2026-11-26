# THE UNSEEN

*You can only see what you are willing to forget.*

A first-person psychological horror game. You wake in an apartment you don't recognise, and some things in it
only move while you aren't looking at them.

This repository has **two versions of the same game**:

| | Browser version (`web/`) | Unity version (`Assets/`) |
|---|---|---|
| How to play | Open a web page. Nothing to install | Needs the Unity 6 Editor to build |
| Status | **Complete and tested**: an automated playthrough in Chromium covers all 5 chapters, 10 puzzles and 3 endings | Source complete, compile-checked, **never run in Unity** |
| Tech | JavaScript + three.js, one static folder | C#, Unity 6 + URP |

## Play in your browser

**Locally, no install:** open `web/dist/standalone.html` in Chrome, Edge or Firefox on a computer. Double-click
the file. It is the whole game in one file.

**Deploy to Vercel** (the repo includes a `vercel.json`):

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository. Leave every setting at its default; `vercel.json` already
   says how to build (`web/` → `web/dist`).
3. Click **Deploy**. You get a link like `https://the-unseen.vercel.app` that anyone can play.

From the command line instead:

```bash
npm i -g vercel
```
```bash
vercel deploy --prod
```

**Any other static host:** upload the contents of `web/dist/` (it needs no server code).

**Controls:** click the game to capture the mouse. W A S D move, mouse looks, E interacts, Shift walks faster,
C crouches, **hold Q to close your eyes**, F is the flashlight, G the instant camera, Tab the inventory,
Esc or P pauses. All keys can be changed in Settings. Saves are kept in your browser.

**Build and test the browser version** (Node 18+):

```bash
cd web && npm install && node build.mjs
```
```bash
cd web && npm test
```
```bash
cd web && node tests/e2e.mjs
```

The last command plays the whole game in headless Chromium: every chapter, every puzzle, save and continue,
and all three endings. It needs Playwright and takes 15 to 25 minutes in software rendering.

---

## Unity version

> **Status:** The Unity version of the game exists as source code: five chapters, ten puzzles and three endings. It compiles, and
> its logic tests pass. It was written in an environment **without the Unity Editor**, so it has **not yet been
> played inside Unity**. Before release it needs an in-editor playthrough and a Windows build (steps below).
> See [Docs/STATUS.md](Docs/STATUS.md) for exactly what has been verified.

## Requirements

- Unity **6000.0 LTS** (Unity 6) with **Windows Build Support (Mono)** installed through Unity Hub.
- No other assets are needed. Every model, texture, voice and sound is generated procedurally at runtime, and
  the game never needs a network connection.

## Open the project

1. In Unity Hub choose **Add project from disk** and select this folder. If Hub asks about the editor version,
   pick the installed 6000.0.x.
2. On first open, `ProjectSetup` runs automatically. It:
   - creates `Assets/_Project/Scenes/{MainMenu,Apartment,Basement}.unity` and the build scene list,
   - creates and assigns a URP pipeline asset if the project has none,
   - sets **Active Input Handling = Both** (the game uses the classic Input Manager),
   - keeps the shader variants that runtime materials need (`Assets/_Project/Resources/ShaderVariants`),
   - sets the player settings (1920×1080, fullscreen window, linear colour).

   If it says the input setting changed, **restart the editor**. You can re-run it at any time from
   **The Unseen → Run Project Setup**.
3. Open `Assets/_Project/Scenes/MainMenu.unity` and press Play. Any scene can be played directly, because the game
   boots itself and builds the world in code.

## Build the Windows executable

From the editor: **The Unseen → Build Windows (x64)**. Or headless:

```bash
Unity -batchmode -quit -projectPath . -executeMethod Unseen.EditorTools.BuildScript.BuildWindows -logFile build.log
```

The output is `Builds/Windows/TheUnseen.exe`, which runs without the editor.

## Controls (all rebindable in Settings)

| Key | Action | Key | Action |
|---|---|---|---|
| W A S D | Move | Mouse | Look |
| E | Interact | Shift | Walk faster |
| C | Crouch | **Q (hold)** | **Close your eyes** |
| F | Flashlight | G | Instant camera |
| Tab | Inventory, documents, photographs, journal | Esc | Pause / back |

## Tests

- **In Unity:** Window → General → Test Runner. The EditMode suite (logic, save system) and the PlayMode suite
  (movement, collision, interaction, observation, perception, inventory, story, scene transitions,
  save/continue, endings) are in `Assets/_Project/Tests`.
- **Without Unity:** `tools/compilecheck/check.sh test` (needs the .NET 8 SDK). It compile-checks the runtime, editor
  and PlayMode test code against Unity 2021.3 reference assemblies from NuGet. It then runs the 29 pure-logic tests
  under .NET.

## Documentation

- [Docs/ARCHITECTURE.md](Docs/ARCHITECTURE.md): systems, data flow, how to extend or replace assets
- [Docs/STATUS.md](Docs/STATUS.md): feature completion report, verification, known limitations, walkthrough

Content note: grief, the death of a child, and self-harm.
