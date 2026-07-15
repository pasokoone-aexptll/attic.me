<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

- このプロジェクトは story / stage / resolver / engine / scene / components / hooks / lib の分離で考える。
- story は脚本、stage は1単位のレシピ、resolver は input から currentStage を返す純粋な解決器。
- engine は固定の canvas と固定の components tree を持ち、stage 切り替えでは controller だけ差し替える。
- scene は canvas controller factory として扱い、canvas を stage ごとに作り直さない。
- components は React UI 部品の置き場に限定し、合成の責務を曖昧にしない。
- hooks は progress, click, route などの input を集める。
- lib は clamp, lerp などの純粋関数だけを置く。
- 大きな実装変更の前に、設計意図を docs に残す。
- 完成コードを先回りして大量生成せず、まず最小の動作単位を作る。
- 変更は小さく切り、story から engine、engine から scene と ui へ順に通す。

- このプロジェクトは story / stage / resolver / engine / scene / components / hooks / lib の分離で考える。
- story は脚本であり、stage の順序と長さだけを持つ。
- stage は 1 単位の表示レシピであり、componentKey、sceneKey、layer 順序だけを持つ。
- resolver は input と story から currentStage を返す純粋関数である。
- engine は固定の canvas と固定の React root を持つ。
- engine は stage が変わった時だけ scene controller を作り直す。
- engine は progress が変わった時、既存 controller に draw を依頼するだけにする。
- scene は canvas controller factory として扱う。
- scene controller は draw と dispose を必ず持つ。
- canvas は stage ごとに作り直さない。
- components は React UI 部品の置き場である。
- hooks は progress, click, route などの input を収集する。
- lib は clamp, lerp などの純粋関数だけを置く。
- 文字列を連結して関数を生成したり、eval したりしない。
- progress ごとに controller を再生成しない。
- 大きな実装変更の前に、設計意図を docs に残す。
- まず最小の動作単位を作り、その参照実装に寄せて拡張する。
- 迷ったら、controller を増やす前に責務分離を確認する。