import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
import Image from "next/image";
import ProgressPercent from "./ProgressPercent";



export function BlueCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex flex-col items-start justify-center text-left pl-30"
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

        <ProgressPercent localProgress={localProgress} label="穴に落ちる..." />

        <Image className="target-image opacity-0 absolute bottom-20 left-110" src="/ohuda.png" alt="お札" width={200} height={45} priority />
      </div>
    </StageCopyLayout>
  );
}
