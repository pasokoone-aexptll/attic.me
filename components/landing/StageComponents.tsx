"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useViewportScale } from "@/hooks/useViewportScale";

type CopyProps = {
  localProgress: number;
};

function RightMenu() {
  const { scale, DESIGN_WIDTH, DESIGN_HEIGHT } = useViewportScale();

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

export function StairsCopy({ localProgress }: CopyProps) {
  const { scale, DESIGN_WIDTH, DESIGN_HEIGHT } = useViewportScale();

  const wrapperRef = useRef<HTMLDivElement>(null);
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
    <div ref={wrapperRef} className="relative w-screen h-dvh overflow-hidden flex items-center">

      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "left center",
        }}
        className="flex flex-col items-start justify-center text-left pl-30"
      >

        <Image className="target-image opacity-0" src="/header.png" alt="attic.me" width={200} height={45} priority />

        <p className="flex items-center gap-2 opacity-0">
          <Image src="/mail.png" alt="Email" width={20} height={20} />
          gochisoukengai@gmail.com
        </p>

        <p className="flex items-center gap-2 opacity-0">
          <Image src="/telegram.png" alt="Telegram" width={20} height={20} />
          @lambda1919
        </p>

        <Image className="target-image opacity-0" src="/headerSticker.png" alt="attic.me" width={420} height={340} />

        <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0">
          終日・まだ来ていない誰に宛てた記録
        </h1>

        <div className="leading-8 text-[#ffffffbc] text-[1rem] copy-text">
          <p className="opacity-0">自分の書いた文章を見られたくない相手がいる。</p>
          <p className="opacity-0">それは珍しいことじゃない。</p>
          <p className="opacity-0">ここは、誰にも見せなくてもいい小さな屋根裏部屋です。</p>
          <p className="opacity-0">まだ整理されていない考え事を書いたり</p>
          <p className="opacity-0">文章を書き散らして置けます。</p>

          <div className="pt-8 text-white">
            階段を上がる {Math.round(localProgress * 100)}%
          </div>
        </div>

      </div>

      <RightMenu />

    </div>
  );
}

export function LandingCopy({ localProgress }: CopyProps) {
  return (
    <>
      <h2>誰にも届かなくても、残しておきたい。</h2>
      <p>SNSに投稿するほどでもない。ブログにするにはまとまっていない。そんな文の居場所です。</p>
      <p className="stage-copy__status">踊り場の光 {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function AtticCopy({ localProgress }: CopyProps) {
  return (
    <>
      <h2>人に見せるためではない、あなたのコンピューター。</h2>
      <p>評価されなくても、役に立たなくてもいい。それでも消したくない言葉を保存します。</p>
      <p className="stage-copy__status">屋根裏部屋を探索中 {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function FridgeCopy({ localProgress }: CopyProps) {
  return (
    <>
      <h2>書きかけの気持ちにも、冷たく静かな場所を。</h2>
      <p>日付も感情も、今すぐ答えに変える必要はありません。</p>
      <p className="stage-copy__status">扉の向こう {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function CrtCopy({ localProgress }: CopyProps) {
  return (
    <>
      <h2>また見たくなったとき、ここにある。</h2>
      <p>attic.me は、未来の自分へ向けて書く非公開の日記アプリです。</p>
      <a className="stage-copy__link" href="#top">最初の階段へ戻る</a>
      <p className="stage-copy__status">記録を同期中 {Math.round(localProgress * 100)}%</p>
    </>
  );
}
