import type { StageDefinition } from "./Stage";

export const fridge = {
  id: "fridge",
  componentKey: "fridge",
  sceneKey: "fridge",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
