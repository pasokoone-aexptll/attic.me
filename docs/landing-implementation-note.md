# Landing implementation note

## Purpose

The landing page is an explorable introduction to attic.me, not a conventional
long-form page. The first implementation uses Canvas-drawn placeholder scenes
until Blender image sequences are available.

## Runtime boundary

- `story/` owns only stage order, duration, and registry keys.
- `resolveStage` remains a pure mapping from scroll progress to a stage.
- `engine/` owns one canvas and exchanges controllers only when the stage id
  changes.
- `scene/` owns the controller factories. A future image-sequence controller
  replaces a placeholder factory without changing the engine or story.
- `components/` owns the overlay copy and navigation affordances.

## Asset replacement path

Each stage keeps its `sceneKey` (`stairs`, `blueWorld`, `attic`, `fridge`,
`crt`). When Blender exports are added, replace that key's factory in
`scene/sceneRegistry.ts` with an image-sequence controller. The controller must
continue to implement `draw(ctx, input)` and `dispose()` and should use
`input.localProgress` to select its frame.

## First playable slice

The current slice covers the five planned places: stairs, landing, attic,
fridge, and CRT. Scroll progress changes the resolved stage; stage changes
replace scene controllers; progress within a stage only redraws the existing
controller.
