import type { StageDefinition } from "./Stage";

export const fridge = {
  id: "fridge",
  componentKey: "fridge",
  sceneKey: "fridgeSurface",
  sceneLayers: [{ key: "fridgeCharacter", zIndex: 10 }, { key: "crt", zIndex: 20 }],
} satisfies Omit<StageDefinition, "length">;
