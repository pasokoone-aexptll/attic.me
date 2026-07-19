"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type CopyProps = {
  localProgress: number;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="stage-copy__eyebrow">{children}</p>;
}

export function StairsCopy({ localProgress }: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeInTl = useRef<gsap.core.Timeline | null>(null);
  const fadeOutTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const targets = containerRef.current?.querySelectorAll(
      ".stage-copy__eyebrow, .target-logo, h1, .copy-text p"
    );

    if (targets && targets.length > 0) {
      // 1. フェードイン用タイムライン（下から上へ出現）
      fadeInTl.current = gsap.timeline({ paused: true }).fromTo(
        targets,
        { y: 30, opacity: 0 },
        { duration: 1.2, y: 0, opacity: 1, stagger: 0.15, ease: "power3.out" }
      );

      // 2. フェードアウト用タイムライン（さらに上へ消えていく演出）
      // ※お好みで y: -30 を削除すれば、その場でのフェードアウトになります
      fadeOutTl.current = gsap.timeline({ paused: true }).to(targets, {
        duration: 0.5,
        y: -30,
        opacity: 0,
        stagger: 0.025, // 消えるときは少し早めに
        ease: "power2.in",
      });
    }
  }, { scope: containerRef });

  useGSAP(() => {
    if (!fadeInTl.current || !fadeOutTl.current) return;

    if (localProgress < 0.1) {
      // 0.1未満：初期状態に戻す（インを逆再生、アウトはリセット）
      fadeInTl.current.reverse();
      fadeOutTl.current.pause(0);
    } else if (localProgress >= 0.1 && localProgress < 0.9) {
      // 0.1 〜 0.9：文字を表示する（インを再生、アウトは戻す）
      fadeInTl.current.play();
      fadeOutTl.current.reverse();
    } else if (localProgress >= 0.9) {
      // 0.9以上：フェードアウトさせる
      fadeOutTl.current.play();
    }
  }, [localProgress]);

  return (
    <div ref={containerRef}>
      <div className="stage-copy__eyebrow opacity-0">
        <Eyebrow>00 / THE STAIRS</Eyebrow>
      </div>
      
      <Image 
        src="/logo.svg" 
        alt="attic.me" 
        width={270} 
        height={270} 
        className="m-auto target-logo opacity-0" 
        style={{ height: "auto" }}
        priority 
        loading="eager" 
      />
      
      <h1 className="font-shippori scale-x-[0.55] origin-center text-[3.5rem] font-bold pb-16 opacity-0">
        まだ来ていない誰かのための日記
      </h1>
      
      <div className="leading-9 text-[#ffffffbc] font-[0.8rem] copy-text">
        <p className="opacity-0">自分の書いた文章を見られたくない相手がいる。</p>
        <p className="opacity-0">それは珍しいことじゃない。</p>
        <p className="opacity-0">ここは、誰にも見せなくてもいい小さな屋根裏部屋です。</p>
        <p className="opacity-0">まだ整理されていない考え事を書いたり</p>
        <p className="opacity-0">文章を書き散らして置けます。</p>
        <p className="opacity-0">まだ見たくない過去を、</p>
        <p className="opacity-0">とりあえず置いておける場所です。</p>
        <p className="opacity-0">急いで整理しなくていい文章を、未来の自分のためにそっと置いておく場所。</p>
        
        <div className="stage-copy__status pt-8 text-white">
          階段を上がる {Math.round(localProgress * 100)}%
        </div>
      </div>
    </div> 
  );
}


export function LandingCopy({ localProgress }: CopyProps) {
  return (
    <>
      <Eyebrow>01 / LANDING</Eyebrow>
      <h2>誰にも届かなくても、残しておきたい。</h2>
      <p>SNSに投稿するほどでもない。ブログにするにはまとまっていない。そんな文の居場所です。</p>
      <p className="stage-copy__status">踊り場の光 {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function AtticCopy({ localProgress }: CopyProps) {
  return (
    <>
      <Eyebrow>02 / ATTIC ROOM</Eyebrow>
      <h2>人に見せるためではない、あなたのコンピューター。</h2>
      <p>評価されなくても、役に立たなくてもいい。それでも消したくない言葉を保存します。</p>
      <p className="stage-copy__status">屋根裏部屋を探索中 {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function FridgeCopy({ localProgress }: CopyProps) {
  return (
    <>
      <Eyebrow>03 / FRIDGE</Eyebrow>
      <h2>書きかけの気持ちにも、冷たく静かな場所を。</h2>
      <p>日付も感情も、今すぐ答えに変える必要はありません。</p>
      <p className="stage-copy__status">扉の向こう {Math.round(localProgress * 100)}%</p>
    </>
  );
}

export function CrtCopy({ localProgress }: CopyProps) {
  return (
    <>
      <Eyebrow>04 / ARCHIVE</Eyebrow>
      <h2>また見たくなったとき、ここにある。</h2>
      <p>attic.me は、未来の自分へ向けて書く非公開の日記アプリです。</p>
      <a className="stage-copy__link" href="#top">最初の階段へ戻る</a>
      <p className="stage-copy__status">記録を同期中 {Math.round(localProgress * 100)}%</p>
    </>
  );
}
