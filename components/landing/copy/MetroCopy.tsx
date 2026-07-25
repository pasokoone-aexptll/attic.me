import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
import Image from "next/image";
import ProgressPercent from "./ProgressPercent";



export function MetroCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex flex-col items-start justify-center text-left pl-30"
    >
      <Image className="target-image opacity-0" src="/siki.png" alt="x_i^{t+1} =\text{normalize}\left(\alpha x_i^t* (1-\alpha)\sum_{j\in N(i)} P_i x_j^t\right)" width={375} height={45} priority />

      <h1 className="font-shippori scale-x-[0.55] origin-left text-[3.5rem] opacity-0 mb-8">
        自分とそうじゃないの区別は過去の傷の深さと<br />
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

        <ProgressPercent localProgress={localProgress} label="電車に置いてきた忘れ物を探す" />
      </div>
    </StageCopyLayout>
  );
}