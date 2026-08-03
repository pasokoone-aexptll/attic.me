"use client";

import { useRef } from "react";
import type { StoryScript } from "@/story/types";
import { componentRegistry } from "./componentRegistry";
import { useEngine } from "@/hooks/useEngine";

export function StoryViewport({ story }: { story: StoryScript }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedStage, componentKey } = useEngine(story, canvasRef);

  const Component = componentRegistry[componentKey as keyof typeof componentRegistry] ?? componentRegistry.stairs;
  const stageNumber = String(resolvedStage.stageIndex + 1).padStart(2, "0");

  return (
    <div
      className="story-viewport"
      style={
        {
          "--story-scroll": 3000,
        } as React.CSSProperties
      }
    >
      <section className="story-frame" aria-label="attic.me を探索する">
        <header className="story-header">
        </header>
        <aside className="story-index" aria-label="現在地">
          <span>{stageNumber}</span>
          <i />
          <span>07</span>
        </aside>
        <div className="story-copy" key={resolvedStage.stage.id}>
          <Component localProgress={resolvedStage.localProgress} />
        </div>
        <p className="story-scroll-hint">SCROLL TO EXPLORE <span>↓</span></p>
        <div className="story-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${resolvedStage.globalProgress})` }} />
        </div>
        <canvas ref={canvasRef} className="story-canvas" aria-hidden="true" />
      </section>
    </div >
  );
}
