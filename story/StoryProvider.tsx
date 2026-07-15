import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { StageManager } from "./StageManager";
import type { ResolvedStage, StoryScript } from "./types";

type StoryContextValue = {
  progress: number;
  currentStage: ResolvedStage | null;
  setProgress: (progress: number) => void;
};

const StoryCotext = createContext<StoryContextValue | null>(null);

export const StoryProvider = ({
  children,
  script,
}: {
  children: ReactNode;
  script: StoryScript;
}) => {
  const [progress, setProgress] = useState(0);
  const stageManager = useMemo(() => new StageManager(script), [script]);
  const currentStage = useMemo(() => stageManager.resolve(progress), [stageManager, progress]);

  const value: StoryContextValue = useMemo(
    () => ({
      progress,
      currentStage,
      setProgress,
    }),
    [progress, currentStage]
  );

  return (
    <StoryCotext.Provider value={value}>{children}</StoryCotext.Provider>
  );
};

export const useStory = () => {
  const context = useContext(StoryCotext);
  if (!context) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
