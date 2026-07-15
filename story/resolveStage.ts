import type { Input, ResolvedStage, StoryScript } from "./types";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function resolveStage(story: StoryScript, input: Input): ResolvedStage {
  const globalProgress = clamp(input.progress, 0, 1);
  const totalLength = story.stages.reduce((sum, stage) => sum + stage.length, 0);

  if (story.stages.length === 0 || totalLength <= 0) {
    throw new Error("Story is empty");
  }

  const target = globalProgress * totalLength;
  let cursor = 0;

  for (let stageIndex = 0; stageIndex < story.stages.length; stageIndex += 1) {
    const stage = story.stages[stageIndex];
    const nextCursor = cursor + stage.length;
    const isLastStage = stageIndex === story.stages.length - 1;

    if (target <= nextCursor || isLastStage) {
      const localProgress = stage.length === 0 ? 0 : (target - cursor) / stage.length;

      return {
        stage,
        stageIndex,
        localProgress: clamp(localProgress, 0, 1),
        globalProgress,
      };
    }

    cursor = nextCursor;
  }

  const fallbackStage = story.stages[story.stages.length - 1];

  return {
    stage: fallbackStage,
    stageIndex: story.stages.length - 1,
    localProgress: 1,
    globalProgress,
  };
}
