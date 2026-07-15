# attic.me Architecture

attic.me は一般的なランディングページではなく、スクロールや入力に応じて屋根裏部屋を探索する体験を作る。

> このファイルは概念図です。実装の基準は docs/skeletal-engine-reference.md を参照する。

## Core Ideas

- story は脚本である。
- stage は1つの場面を表すレシピである。
- resolver は input と story から currentStage を返す純粋関数である。
- engine は 1 個だけ存在する shared runtime で、固定の canvas を持ち、stage 切り替え時に controller だけを差し替える。
- scene は Canvas 2D の描画系であり、scene factory / controller factory として扱う。
- components は React UI 部品の置き場である。
- hooks は progress, click, route などの input を収集する。
- lib は純粋関数だけを置く。

## Data Flow

Input
- scroll progress
- click
- route change
- future events

Story
- stage の並び
- 遷移規則
- 表示順序

Resolver
- input と story を受け取る
- currentStage を返す

Engine
- 固定の canvas を持つ
  - React view layer と連携する
- stage ごとに controller を差し替える

Scene
  - sceneRegistry から描画 controller を生成する
- canvas を作り直さない

Components
  - componentRegistry から current component を描画する
- React UI だけを担当する

## Flow

- hooks が progress, click, route を収集する
- resolver が story と input から currentStage を返す
- engine が currentStage を受け取る
- stage の componentKey を使って React UI を描画する
- stage の sceneKey を使って canvas controller を取得する
- engine が同じ canvas に draw させる
- stage が変わった時だけ controller を差し替える

## Stage Structure

- id
- componentKey
- sceneKey
- sceneLayers
- length


## Constraints

- canvas は stage ごとに作り直さない。
- components tree も stage ごとに作り直さない。
- 切り替えるのは controller と state だけにする。
- story に描画ロジックを入れない。
- resolver に UI 描画を入れない。
- engine に stage の定義データを持ちすぎない。

## Controller Contract

- draw(ctx, input)
- dispose()

## Why This Shape

この構造にすると、LP だけでなく web app のチュートリアル、ログイン画面、世界観ページなどにも同じ考え方を再利用できる。  
また、stage を関数の入力と出力として扱えるため、React と Canvas を同じ脚本から同期させやすい。

## Risks

- engine が肥大化しやすいので、resolve と render の境界を保つ必要がある。
- stage に実体の component を持たせると、レシピより実装に寄りやすい。
- input 種類が増えると resolver の型が複雑になるので、input は union として整理する。
- canvas を複数生成すると切り替え時にカクつくので、1 枚固定を守る。

## Stability Rules

- canvas は 1 枚固定
- React root は 1 枚固定
- controller は stage 単位で交換
- progress は描画更新のトリガー
- same frameIndex なら再描画しない

## Sequence
### 全体図
```mermaid
flowchart TD
  subgraph Hooks [1. User Inputs & Hooks]
    H1[useProgress]
    H2[useClick]
    H3[useRoute]
    H4[Input Data]
  end

  subgraph Story [2. Static Config / Story]
    S1[story]
    S2[stage list]
    S3[lengths]
    S4[sceneLayers]
  end

  subgraph Resolver [3. State Resolver]
    R1[resolveStage]
    R2[currentStage / Active Keys]
  end

  subgraph Engine [4. Core Engine & Lifecycle]
    E1[engine]
    E4[stage switch]
    E5[controller lifecycle]
    E3[fixed React root]
    E2[fixed canvas]
  end

  subgraph Components [5. React View Layer]
    C1[Hero]
    C2[About]
    C3[CTA]
    C4[...]
  end

  subgraph Scene [6. Canvas Render Layer]
    SC1[scene factory]
    SC2[effect factory]
    SC3[scene controller]
    SC4[draw ctx, input]
    SC5[dispose]
  end

  subgraph Lib [Utility Lib]
    L1[clamp]
    L2[lerp]
    L3[mapRange]
  end

  %% --- Data Flow ---
  H1 --> H4
  H2 --> H4
  H3 --> H4

  %% Inputs and Configs feed into the Resolver via Engine
  H4 --> E1
  S1 --> R1
  S2 --> R1
  S3 --> R1
  S4 --> R1
  
  E1 --> R1
  R1 --> R2

  %% Resolver core flags trigger the Stage Switcher
  R2 --> E4
  
  %% Engine controls what to render
  E4 --> E3
  E4 --> SC1
  E4 --> SC2

  %% React Component mounting
  E3 --> C1
  E3 --> C2
  E3 --> C3
  E3 --> C4

  %% Canvas Controller Lifecycle
  SC1 --> SC3
  SC2 --> SC3
  E2 --> SC4
  E5 --> SC5
  SC3 --> SC4
  SC3 --> SC5

  %% Math Utils Lib
  L1 --> R1
  L2 --> R1
  L3 --> R1
  L2 --> SC4
  L3 --> SC4

```
### 実行ループ図
```mermaid
flowchart LR
  %% 1. イベント発生と入力変換
  A[1. User Action<br>scroll / click / route] --> B[Hooks]
  B --> C[Input Data]

  %% 2. 状態解決
  C --> D[Resolver]
  S[Static Story Config<br>sceneLayers / lengths] --> D
  D --> E[Current State<br>stage / progress / keys]

  %% 3. React側（DOMビュー）への配信
  E --> F[componentKey]
  F --> I[Components]
  I --> L[Fixed React Root]

  %% 4. Canvas側（描画ビュー）への配信
  E --> G[sceneKey]
  E --> H[Stage-local Progress]
  G --> J[Scene Registry]
  
  J --> M[Scene Controller]
  H --> M

  %% 5. 描画ループ (毎フレーム実行)
  M --> N["draw(ctx, progress)"]
  N --> O[Fixed Canvas]
  
  %% requestAnimationFrameによる自律ループ（慣性スクロールやアニメーション用）
  O -- requestAnimationFrame --> D

```
### ライフサイクル図
```mermaid
flowchart TD
  P[progress changes] --> Q[resolveStage]
  Q --> R{stage changed?}

  R -- no --> S[reuse controllers]
  S --> T[draw with new progress]

  R -- yes --> U[dispose old controllers]
  U --> V[create new controllers]
  V --> W[register layer order]
  W --> T

  T --> X[canvas redraw]
```


```mermaid
flowchart TD
  subgraph Hooks [1. Hooks / Events]
    H1[useProgress]
    H2[useClick]
    H3[useRoute]
    H4[Input]
  end

  subgraph Story [2. Static Story Config]
    S1[StoryScript]
    S2[StageDefinition]
    S3[length]
    S4[componentKey]
    S5[sceneLayers]
  end

  subgraph Engine [3. Core Engine & State]
    E1[Engine]
    E5[updateInput]
    E4[setResolvedStage]
    E6[renderFrame]
    E2[fixed canvas]
    E3[fixed React root]
    E7[dispose]
  end

  subgraph Resolver [4. Stage Resolver]
    R1[resolveStage]
    R2[ResolvedStage]
    R3[changed flag]
    R4[localProgress]
    R5[frameIndex]
  end

  subgraph Components [5. React View Layer]
    C1[componentRegistry]
    C2[Hero]
    C3[About]
    C4[CTA]
  end

  subgraph Scene [6. Canvas Render Layer]
    SC1[sceneRegistry]
    SC2[createSceneController]
    SC3[SceneController]
    SC4["draw(ctx, localProgress, frameIndex)"]
    SC5[dispose]
  end

  %% --- 1. Inputs feed into Engine ---
  H1 --> H4
  H2 --> H4
  H3 --> H4
  H4 --> E5

  %% --- 2. Engine executes Resolver ---
  E5 --> R1
  S1 --> R1
  S2 --> R1
  S3 --> R1
  S4 --> R1
  S5 --> R1

  %% --- 3. Resolver outputs to Engine State ---
  R1 --> R2
  R2 --> R3
  R2 --> R4
  R2 --> R5
  R2 --> E4

  %% --- 4. State updates trigger View Layers ---
  %% React Side
  E4 -->|componentKey| C1
  E3 --> C1
  C1 --> C2
  C1 --> C3
  C1 --> C4

  %% Canvas Side (Lifecycle & Controller creation)
  E4 -->|changed / sceneKey| SC2
  SC1 --> SC2
  SC2 --> SC3
  SC3 --> SC5
  E7 --> SC5

  %% --- 5. Render Loop Pipeline ---
  E5 --> E6
  E2 --> E6
  
  %% Pass resolved state into the draw call
  R4 --> E6
  R5 --> E6
  
  E6 --> SC4
  SC3 --> SC4

```