import type { StageDefinition } from "./Stage";

export const footer = {
  id: "footer",
  componentKey: "footer",
  sceneKey: "footer",
  sceneLayers: [],
} satisfies Omit<StageDefinition, "length">;
