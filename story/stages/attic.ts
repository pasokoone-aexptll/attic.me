import type { StageDefinition } from "./Stage";

export const attic = {
  id: "attic",
  componentKey: "attic",
  sceneKey: "attic",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
