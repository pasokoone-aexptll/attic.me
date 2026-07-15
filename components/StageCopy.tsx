type CopyProps = {
  localProgress: number;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="stage-copy__eyebrow">{children}</p>;
}

export function StairsCopy({ localProgress }: CopyProps) {
  return (
    <>
      <Eyebrow>00 / THE STAIRS</Eyebrow>
      <h1>attic.me</h1>
      <p className="stage-copy__lead">まだ見たくない過去のための日記。</p>
      <p>急いで整理しなくていい文章を、未来の自分のためにそっと置いておく場所。</p>
      <p className="stage-copy__status">階段を上がる {Math.round(localProgress * 100)}%</p>
    </>
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
