import type { StageDefinition } from "./Stage";

export const metro = {
  id: "metro",
  componentKey: "metro",
  sceneKey: "metro",
  sceneLayers: [{ key: "crt", zIndex: 10 }],
} satisfies Omit<StageDefinition, "length">;
