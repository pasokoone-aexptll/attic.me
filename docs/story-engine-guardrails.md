これは事故防止です。やってはいけないことを明文化します。

# Story Engine Guardrails

## Forbidden

- eval
- new Function
- string-concat execution
- stage ごとの canvas 再生成
- progress ごとの controller 再生成
- story に描画ロジックを入れること
- resolver に DOM や canvas の副作用を入れること
- engine に stage の定義実体を溜め込みすぎること
- shared runtime を複数作ること

## Required

- controller は dispose を持つ
- stage 切り替え時は old controller を破棄する
- canvas は 1 枚固定
- React root も 1 枚固定
- scene は factory として実装する
- progress が変わっても frameIndex が同じなら描き直さない
- registry の key は固定文字列で管理する

## Recovery Rule

- 迷ったら reference implementation に戻る
- 迷ったら controller を増やす前に責務を見直す
- 迷ったら story を薄くする
- 迷ったら shared runtime を壊していないか確認する