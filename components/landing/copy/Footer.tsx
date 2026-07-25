import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
import Image from "next/image";

export function Footer({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex flex-col items-start justify-center text-left pl-30"
      disableFadeOut
      showRightMenu={false}
    >
      <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8 whitespace-nowrap">
        異空間モデム(DSL)を使って、逃避用ネット広域を復元する
      </h1>

      <div className="leading-8 text-[#ffffffbc] text-[1.15rem] copy-text">
        <p className="opacity-0">異空間モデムを起動ボタンは現在修理中です。</p>
        <p className="opacity-0">クライアント、DCRのウェイトリストに参加しましょう。</p>
        <p className="opacity-0">またDiscordで議論に参加し、イベント/開発に参加し共に異空間モデムを復元しましょう。</p>
        <p className="opacity-0">そして、その時代に評価されなかった文章は、誰にも見つからないまま失われます。</p>
        <div className="*:mt-10 flex flex-row gap-3">
          <button className="cursor-pointer rounded-full px-6 py-3 text-neutral-800 bg-white" onClick={() => console.log('異空間モデムを起動し、始める')}>異空間モデムのウェイトリストに登録</button>
          <button className="cursor-pointer rounded-full px-5 py-3 text-white bg-neutral-800" onClick={() => console.log('ディスコードに参加する')}>ティスコードに参加する</button>
        </div>
      </div>
    </StageCopyLayout>
  );
}