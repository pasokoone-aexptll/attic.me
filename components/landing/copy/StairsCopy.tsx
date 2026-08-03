import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
import Image from "next/image";
import ProgressPercent from "./ProgressPercent";


export function StairsCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex flex-col items-start justify-center text-left pl-30"
    >
      <Image className="target-image opacity-0" src="/header.png" alt="attic.me" width={200} height={45} priority />
      <Image className="target-image opacity-0" src="/headerSticker.png" alt="attic.me" width={420} height={340} />

      <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8">
        終日・まだ来ていない誰に宛てた記録
      </h1>

      <div className="leading-8 text-[#ffffffbc] text-[1.2rem] copy-text">
        <p className="opacity-0">当てつけのように書いた文があり、</p>
        <p className="opacity-0">君にはその文をみられたくないと思う奴がいる</p>
        <p className="opacity-0">それは戦争を起こす人類ほど珍しいものじゃない</p>
        <p className="opacity-0">遠い未来にあててまだ整理されていない言葉を書き散らしておくのはどうだろうか？</p>
        <p className="opacity-0">そしてどうやらこの屋根裏部屋は書き散らしておくのに良い場所だ</p>

        <ProgressPercent localProgress={localProgress} label="階段を上がる" />
      </div>
    </StageCopyLayout>
  );
}