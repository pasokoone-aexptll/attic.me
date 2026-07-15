## ルールの運用

- 原理文書
docs/story-engine-principles.md
docs/story-engine-architecture.md
- 最小参照実装
docs/skeletal-engine-reference.md
- 禁止事項
docs/story-engine-guardrails.md
docs/story-engine-principles.md
docs/story-engine-architecture.md
- 復帰手順
docs/story-engine-guardrails.md
docs/skeletal-engine-reference.md

この 4 つの「ゆりかご」に従う。

この LP は普通の React LP ではなく、**小さな実行系**を作っている。
なので、次の3つをやらないと破綻しやすい。

- controller の寿命管理を雑にしない
- registry の型を雑にしない
- reference implementation を雑にしない