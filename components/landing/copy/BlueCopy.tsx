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
        <p className="opacity-0">インターネットは拡散のために最適化されている</p>
        <p className="opacity-0">いいね、フォロー、レコメンド・アルゴリズム</p>
        <p className="opacity-0">インターネットは廻る、君を連れて廻る</p>
        <p className="opacity-0">じゃあインターネットの経済に評価されない君の言葉はどこへゆく？</p>
        <p className="opacity-0">すべての文章はこの瞬間に評価されるべきなのか</p>
        <p className="opacity-0">我々の魂は潮時だと評価され続けられるのだろうか？</p>
        <p className="opacity-0">世が耽る頃に、あなたの言葉がふとこだまする</p>
        <p className="opacity-0">今はその時じゃなくて、じゃあそれまであなたの言葉はどこへ？</p>
        <p className="opacity-0">attic.meは現行のインターネット経済から切り離された漂流する逃避用ネット広域です</p>


        <ProgressPercent localProgress={localProgress} label="穴に落ちる..." />

        <Image className="target-image opacity-0 absolute bottom-20 left-110" src="/ohuda.png" alt="お札" width={200} height={45} priority />
      </div>
    </StageCopyLayout>
  );
}
