import { StageCopyLayout } from "../StageCopyLayout";
import { CopyProps } from "../StageCopyLayout";
  import Image from "next/image";
  import ProgressPercent from "./ProgressPercent";

export function StationCopy({ localProgress }: CopyProps) {
  return (
    <StageCopyLayout
      localProgress={localProgress}
      contentClassName="flex items-center justify-center gap-20"
      wrapperClassName="justify-center"
      isCentered
      showRightMenu={false}
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

          <ProgressPercent localProgress={localProgress} label="知らない駅を探索" />

          <Image className="target-image opacity-0 absolute bottom-20 left-5" src="/charactor.png" alt="キャラクター" width={200} height={45} priority />
        </div>
      </div>

      <Image className="target-image opacity-0" src="/DCRs.png" alt="DCR" width={340} height={1200} priority />
    </StageCopyLayout>
  );
}