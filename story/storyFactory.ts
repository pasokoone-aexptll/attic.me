import type { StageDefinition, StoryScript } from "./types";

export function stage(
  stageDefinition: Omit<StageDefinition, "length">,
  options: { length: number },
): StageDefinition {
  return {
    ...stageDefinition,
    length: options.length,
  };
}

export function storyFactory(...stages: StageDefinition[]): StoryScript {
  return {
    stages,
  };
}
