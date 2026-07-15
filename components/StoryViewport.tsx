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
    <main id="top" className="story-viewport">
      <section className="story-frame" aria-label="attic.me を探索する">
        <canvas ref={canvasRef} className="story-canvas" aria-hidden="true" />
        <header className="story-header">
          <span>attic.me</span>
          <span>PRIVATE DIARY / 2026</span>
        </header>
        <aside className="story-index" aria-label="現在地">
          <span>{stageNumber}</span>
          <i />
          <span>05</span>
        </aside>
        <div className="story-copy" key={resolvedStage.stage.id}>
          <Component localProgress={resolvedStage.localProgress} />
        </div>
        <p className="story-scroll-hint">SCROLL TO EXPLORE <span>↓</span></p>
        <div className="story-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${resolvedStage.globalProgress})` }} />
        </div>
      </section>
    </main>
  );
}
