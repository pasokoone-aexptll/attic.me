"use client";

import { useEffect, useMemo, useRef } from "react";
import type { RefObject } from "react";
import { Engine } from "@/engine/Engine";
import { sceneRegistry } from "@/scene/sceneRegistry";
import { resolveStage } from "@/story/resolveStage";
import type { StoryScript } from "@/story/types";
import { useProgress } from "./useProgress";

export function useEngine(story: StoryScript, canvasRef: RefObject<HTMLCanvasElement | null>) {
  const progress = useProgress();
  const resolvedStage = useMemo(() => resolveStage(story, { progress }), [story, progress]);
  const engineRef = useRef<Engine | null>(null);

  useEffect(() => {
    if (!canvasRef.current || engineRef.current) {
      return;
    }

    engineRef.current = new Engine(canvasRef.current, sceneRegistry);
    const canvas = canvasRef.current;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const engine = engineRef.current;
      if (!engine) {
        return;
      }

      engine.resize(entry.contentRect.width, entry.contentRect.height, window.devicePixelRatio || 1);
      engine.renderFrame();
    });

    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      engineRef.current?.dispose();
      engineRef.current = null;
    };
  }, [canvasRef]);

  useEffect(() => {
    engineRef.current?.setResolvedStage(resolvedStage);
    engineRef.current?.renderFrame();
  }, [resolvedStage]);

  useEffect(() => {
    engineRef.current?.updateInput({ progress });
    engineRef.current?.renderFrame();
  }, [progress]);

  return {
    progress,
    resolvedStage,
    componentKey: resolvedStage.stage.componentKey,
  };
}
