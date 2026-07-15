"use client";

import { useEffect, useState } from "react";

export function useProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      const root = document.documentElement;
      const maxScrollTop = root.scrollHeight - root.clientHeight;

      if (maxScrollTop <= 0) {
        setProgress(0);
        return;
      }

      const nextProgress = root.scrollTop / maxScrollTop;
      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}
