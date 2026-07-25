import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
import Image from "next/image";
import ProgressPercent from "./ProgressPercent";

export function KotatsuCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex flex-col items-start justify-center text-left pl-30"
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

        <ProgressPercent localProgress={localProgress} label="こたつに潜る" />

        <Image className="target-image opacity-0 absolute bottom-20 left-110" src="/ohuda.png" alt="お札" width={200} height={45} priority />
      </div>
    </StageCopyLayout>
  );
}