import type { StageDefinition } from "./Stage";

export const kotatsu = {
  id: "kotatsu",
  componentKey: "kotatsu",
  sceneKey: "kotatsu",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
