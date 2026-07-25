"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useViewportScale } from "@/hooks/useViewportScale";

export type CopyProps = {
  localProgress: number;
};

export type StageCopyLayoutProps = {
  localProgress: number;
  children: ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
  isCentered?: boolean;
  showRightMenu?: boolean;
};

function RightMenu() {
  const { scale, DESIGN_HEIGHT } = useViewportScale();

  return (
    <div className="absolute right-0 top-0 overflow-hidden w-screen h-dvh flex items-center justify-end">
      <aside style={{ width: 300, height: DESIGN_HEIGHT, transform: `scale(${scale})`, transformOrigin: "right center" }} className="relative pr-40 py-18 flex">
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-row gap-3 writing-vertical bg-neutral-900 rounded-full px-2 py-2">
            <button className="cursor-pointer tracking-widest rounded-full px-4 py-2 text-neutral-800 bg-white">
              ログイン
            </button>
            <button className="cursor-pointer tracking-widest rounded-full px-4 py-2 text-white bg-blue-500">
              新規登録
            </button>
          </div>

          <Image className="mt-10 w-[100px] h-auto" src="/PC.png" alt="" width={100} height={100} />

          <Image className="mt-auto w-[160px] h-auto" src="/ramen.png" alt="" width={160} height={160} />
        </div>
        <div className="relative">
          <h2 className="absolute top-1/2 -translate-y-1/2 font-medium writing-vertical font-shippori text-4xl -tracking-[.25em] text-white tracking-widest scale-y-[0.5] skew-y-[-40deg] origin-center whitespace-nowrap">
            僕はなぜ生まれてきたのか なぜ死ぬのかもわからずに その恐怖で孤独を紛らわす
          </h2>
        </div>
      </aside>
    </div>
  );
}

export function StageCopyLayout({
  localProgress,
  children,
  wrapperClassName = "",
  contentClassName = "",
  isCentered = false,
  showRightMenu = true,
}: StageCopyLayoutProps) {
  const { scale, DESIGN_WIDTH, DESIGN_HEIGHT } = useViewportScale();
  const contentRef = useRef<HTMLDivElement>(null);

  const fadeInTl = useRef<gsap.core.Timeline | null>(null);
  const fadeOutTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const targets = contentRef.current?.querySelectorAll(".target-image, h1, .copy-text p");

    if (!targets || targets.length === 0) return;

    fadeInTl.current = gsap.timeline({ paused: true }).fromTo(
      targets,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power3.out" }
    );

    fadeOutTl.current = gsap.timeline({ paused: true }).to(
      targets,
      { y: -40, opacity: 0, duration: 0.5, stagger: 0.03, ease: "power2.in" }
    );
  }, { scope: contentRef });

  useGSAP(() => {
    if (!fadeInTl.current || !fadeOutTl.current) return;

    if (localProgress < 0.1) {
      fadeInTl.current.reverse();
      fadeOutTl.current.pause(0);
    } else if (localProgress < 0.9) {
      fadeInTl.current.play();
      fadeOutTl.current.reverse();
    } else {
      fadeOutTl.current.play();
    }
  }, [localProgress]);

  return (
    <div className={`relative w-screen h-dvh overflow-hidden flex items-center ${wrapperClassName}`.trim()}>
      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: isCentered ? "center center" : "left center",
        }}
        className={contentClassName}
      >
        {children}
      </div>

      {showRightMenu ? <RightMenu /> : null}
    </div>
  );
}