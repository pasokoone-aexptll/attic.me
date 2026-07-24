"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

export function useViewportScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = window.innerHeight / DESIGN_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return {
    scale,
    DESIGN_WIDTH,
    DESIGN_HEIGHT,
  };
}