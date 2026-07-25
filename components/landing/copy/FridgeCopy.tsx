import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
  import Image from "next/image";
  import ProgressPercent from "./ProgressPercent";



export function FridgeCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex items-center justify-center gap-20"
      wrapperClassName="justify-center"
      isCentered
      showRightMenu={false}
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

          <ProgressPercent localProgress={localProgress} label="冷蔵庫を探す" />
        </div>
      </div>
    </StageCopyLayout>
  );
}