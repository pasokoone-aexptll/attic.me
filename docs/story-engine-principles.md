# Story Engine Principles

attic.me は、スクロールや入力に応じて屋根裏部屋を探索する体験を作る。

## Fixed Contracts

- story は脚本である。
- stage は 1 単位の表示レシピである。
- resolver は story と input から ResolvedStage を返す純粋関数である。
- engine は 1 個だけ存在する shared runtime である。
- engine は固定の canvas を持つ。
- engine は current stage に応じて scene controller を差し替える。
- scene controller は draw と dispose を持つ。
- components は React UI 部品だけを持つ。
- hooks は input 収集だけを持つ。
- lib は clamp / lerp / mapRange などの純粋関数だけを持つ。

## Shared Runtime Rules

- canvas は stage ごとに作り直さない。
- React root は stage ごとに作り直さない。
- progress ごとに scene controller を再生成しない。
- stage が変わった時だけ controller を交換する。
- same frameIndex なら再描画しない。

## What Not To Do

- story に描画命令を入れない。
- resolver に React や canvas の副作用を入れない。
- engine に stage 定義の実体を詰め込みすぎない。
- scene controller を文字列実行で生成しない。
- eval を使わない。
- stage 切り替えのたびに canvas を再生成しない。
- controller の dispose を省略しない。