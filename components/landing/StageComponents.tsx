"use client";

import Image from "next/image";
import { useRef } from "react";
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

        <Image className="target-image opacity-0" src="/headerSticker.png" alt="attic.me" width={420} height={340} />

        <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8">
          終日・まだ来ていない誰に宛てた記録
        </h1>

        <div className="leading-8 text-[#ffffffbc] text-[1.2rem] copy-text">
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

export function BlueCopy({ localProgress }: CopyProps) {
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
        <Image className="target-image opacity-0" src="/3s.png" alt="3s" width={85} height={85} priority />

        <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-10">
          まだ評価されたくない考えのための場所です
        </h1>

        <div className="leading-10 text-[#ffffffbc] text-[1.25rem] copy-text">
          <p className="opacity-0">書けなかった言葉を書くために</p>
          <p className="opacity-0">今のインターネットは拡散に最適化されています</p>
          <p className="opacity-0">いいね、フォロー、レコメンド、アルゴリズム</p>
          <p className="opacity-0">それらは素晴らしい仕組みです</p>
          <p className="opacity-0">けれど、全ての文章が今この瞬間に評価される必要はありません</p>
          <p className="opacity-0">理解される言葉がまだ存在しない考えもあります</p>
          <p className="opacity-0">十年後に意味を持つかもしれない文章があります</p>
          <p className="opacity-0">誰か一人の人生だけを支える文章があります</p>

          <p className="opacity-0">attic.meはソーシャルファイアーウォールです</p>


          <div className="pt-8 text-white">
            穴に落ちる... {Math.round(localProgress * 100)}%
          </div>

          <Image className="target-image opacity-0 absolute bottom-20 left-110" src="/ohuda.png" alt="お札" width={200} height={45} priority />

        </div>
      </div>
      <RightMenu />
    </div>
  );
}

export function FridgeCopy({ localProgress }: CopyProps) {
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
    <div ref={wrapperRef} className="relative w-screen h-dvh overflow-hidden flex items-center justify-center">

      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="flex items-center justify-center gap-20"
      >
        <Image className="target-image opacity-0" src="/selectorsUI.png" alt="selectorUI" width={500} height={1200} priority />
        <div className="inline-flex flex-col items-start justify-center text-left w-[600px]">
          <Image className="target-image opacity-0" src="/header.png" alt="attic.me" width={200} height={45} priority />


          <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-10 whitespace-nowrap">
            attic はソーシャルサービスではありません
          </h1>

          <div className="leading-8 text-[#ffffffbc] text-[1.15rem] copy-text">
            <p className="opacity-0">保存形式であり、公開範囲を選べるあなたの領域です</p>
            <p className="opacity-0">あなたは、あなたの言葉を受け取る準備ができていない相手とすれ違わずに済みます</p>
            <p className="opacity-0">未来の読者へ あなたが書いた文章は、</p>
            <p className="opacity-0">いま誰にも必要とされていないかもしれません</p>
            <p className="opacity-0">けれど、未来には必要になるかもしれません</p>
            <p className="opacity-0">attic は、市場価値を記録するための場所ではありません</p>
            <p className="opacity-0">人生にとって重要だったものを残すための場所です</p>
            <p className="opacity-0">いいねも人気順もありません</p>
            <p className="opacity-0">評価されることより、残されることを大切にします</p>
            <p className="opacity-0">attic は、見られたくない相手を「今の人類」に設定できます</p>
            <p className="opacity-0">理解される言葉がまだない考えをその時まで</p>
            <p className="opacity-0">保存するための保存器になってくれます</p>

            <div className="pt-8 text-white">
              冷蔵庫を探す {Math.round(localProgress * 100)}%
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export function MetroCopy({ localProgress }: CopyProps) {
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

        <Image className="target-image opacity-0" src="/siki.png" alt="x_i^{t+1} =\text{normalize}\left(\alpha x_i^t* (1-\alpha)\sum_{j\in N(i)} P_i x_j^t\right)" width={375} height={45} priority />

        <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8">
          自分とそうじゃないの区別は過去の傷の深さと<br/>
          比例してる
        </h1>

        <div className="leading-9 text-[#ffffffbc] text-[1.15rem] copy-text">
          <p className="opacity-0">最初の記事は自己紹介ではありません。</p>
          <p className="opacity-0">あなたが何を大切にしている人なのか。</p>
          <p className="opacity-0">どんな問いを抱えて生きているのか。</p>
          <p className="opacity-0">自分のための哲学を書きます。</p>

          <p className="opacity-0">Adjacentを閲覧する際は、著者と自分のmanifestoがポップアップされ、</p>
          <p className="opacity-0">著者と自分の差分を考えます。</p>
          <p className="opacity-0">著者にとって自分は見られたい相手かどうか考え</p>
          <p className="opacity-0">覚悟がある場合にのみエンターします。</p>
          <p className="opacity-0">attic は、Private, Trusted, Adjacent, Open Archive, Future Release, </p>
          <p className="opacity-0">などの公開範囲を提供しています。</p>

          <div className="pt-8 text-white">
            電車に置いてきた忘れ物を探す {Math.round(localProgress * 100)}%
          </div>
        </div>

      </div>

      <RightMenu />

    </div>
  );
}

export function StationCopy({ localProgress }: CopyProps) {
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
    <div ref={wrapperRef} className="relative w-screen h-dvh overflow-hidden flex items-center justify-center">

      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="flex items-center justify-center gap-20"
      >
        <div className="inline-flex flex-col items-start justify-center text-left w-[675px]">

          <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-10 whitespace-nowrap">
            人生の出来事を条件式として記述する詩(DSL)
          </h1>

          <div className="leading-8 text-[#ffffffbc] text-[1.125rem] copy-text">
            <p className="opacity-0">人が文章を公開したくなる条件は、もっと複雑です。</p>
            <p className="opacity-0">そしてある文章は、自分が死んだ後でだけ、読まれてほしい。</p>
            <p className="opacity-0">ある文章は、俺の枕から父親の匂いがしたら公開したい。</p>
            <p className="opacity-0">ある文章は、二度と思い出さなくなった頃に公開したい。</p>
            <p className="opacity-0">そのためにattic は将来的に、公開条件を自分で記述できる仕組みDynamic Custom Release (DCR) を実装します。</p>
            <p className="opacity-0">DCRは「人生の出来事を条件式として記述する詩」であり、「人生をイベントストリームとして捉えるDSL」です。</p>
            <p className="opacity-0">DCRはアルゴリズムの知識は重要ではありませんが、「人生をどうやって検知するか」が重要です。</p>
            <p className="opacity-0">左の例ではツイートされない期間が180日続いた場合に死んだと判定し、リリースイベントが発火します。</p>
            <p className="opacity-0">また、次の例ではspotifyで千の風になってを10回以上聴いた日が湿度が85%以上で、秋の場合に枕から父親の匂いがしたと判定し、リリースイベントが発火します。</p>
            <p className="opacity-0">次の例では、attic.meに過去に書いた自分の文章に365日以上アクセスしなかった場合、その出来事を忘れたと判定し、リリースイベントが発火します。</p>

            <div className="pt-8 text-white">
              知らない駅を探索 {Math.round(localProgress * 100)}%
            </div>

            <Image className="target-image opacity-0 absolute bottom-20 left-5" src="/charactor.png" alt="キャラクター" width={200} height={45} priority />
          </div>
        </div>
        <Image className="target-image opacity-0" src="/DCRs.png" alt="DCR" width={340} height={1200} priority />

      </div>
    </div>
  );
}

export function KotatsuCopy({ localProgress }: CopyProps) {
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

        <Image className="target-image opacity-0" src="/logo.png" alt="attic.me" width={200} height={45} priority />
        <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8">
          冷凍餃子と電子レンジはすでにコンピュータの中に
        </h1>

        <Image className="target-image opacity-0 absolute top-50 left-205" src="/antena.png" alt="アンテナ" width={100} height={100} priority />

        <div className="leading-8 text-[#ffffffbc] text-[1.15rem] copy-text">
          <p className="opacity-0">インターネットのサービスは、消えます。</p>
          <p className="opacity-0">会社はなくなります。</p>
          <p className="opacity-0">サーバーは停止し、ドメインは失効します。</p>
          <p className="opacity-0">そして、その時代に評価されなかった文章は、誰にも見つからないまま失われます。</p>
          <p className="opacity-0">attic が保存したいのは、市場価値ではありません。</p>
          <p className="opacity-0">誰かの人生にとって重要だったものです。</p>
          <p className="opacity-0">将来的には、サーバーではなく、あなた自身のコンピュータを保存場所として利用できるようになる予定です。</p>
          <p className="opacity-0">文章はまず、あなたのコンピュータに保存されます。</p>
          <p className="opacity-0">そして必要に応じて、ネットワークへ複製されます。</p>
          <p className="opacity-0">サービスが終了しても、文章は残ります。</p>
          <p className="opacity-0">attic は、プラットフォームではなく、</p>
          <p className="opacity-0">保存形式になることを目指しています。</p>
          <p className="opacity-0">そろそろ、夕暮れ時で5時になる。</p>

          <div className="pt-8 text-white">
            こたつに潜る {Math.round(localProgress * 100)}%
          </div>

          <Image className="target-image opacity-0 absolute bottom-20 left-110" src="/ohuda.png" alt="お札" width={200} height={45} priority />
        </div>

      </div>

      <RightMenu />

    </div>
  );
}