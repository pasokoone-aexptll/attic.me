# attic.me

> まだ見たくない過去のための日記。

attic.me は、未来の自分へ向けて書くための、非公開の日記アプリです。

SNSに投稿するほどでもない。
ブログにするにはまとまっていない。
でも消したくはない。

そんな文章を置いておく、小さな屋根裏部屋です。

---

## Philosophy

詳しくは `/屋根裏部屋/ちゃんめも.txt` を参照してください。

attic は「人に見せるためのインターネット」ではなく、
「自分のためのコンピューター」を目指しています。

評価されなくてもいい。

役に立たなくてもいい。

誰にも届かなくてもいい。

それでも残しておきたい文章があります。

---

## Repository

```
src/
├── app/
├── components/
├── story/
├── scene/
├── hooks/
├── assets/
└── styles/
```

### app

Next.js App Router

### components

React UI

### story

LP全体を管理する唯一のマネージャー

```
GSAP
    ↓
progress
    ↓
StoryManager
    ↓
Stage
```

Stageは

- 開始位置
- 終了位置
- 背景
- キャラクター
- 表示するComponent

を保持します。

```
GSAP → progress → StoryManager → Stage
                                   ├─→ Component → DOM
                                   └─→ Scene → Canvas
```

### scene

Canvas描画。

- Background
- Character
- Rain
- CRT
- Noise

---

## Landing Page

LPは「読む」のではなく、

**屋根裏部屋を探索する体験**

を目指しています。

一般的なUXとしてはかなり不親切ですが、
その探索性自体を作品の一部として扱います。

スクロールによって

```
階段
↓

踊り場

↓

屋根裏部屋

↓

冷蔵庫

↓

CRT
```

を移動していきます。

各場所(Stage)に応じて

- Canvas
- UI
- Typography

が同期して変化します。

将来的に、`story`と`scene`はLP以外にも回チュートリアルやログイン画面、atticの世界観ページに再利用する可能性あり、feature/landingにlandingを切り離す予定

---

## Tech Stack

### Framework

- Next.js
- React
- TypeScript

### Animation

- GSAP
- ScrollTrigger
- Lenis

### Rendering

Canvas 2D

BlenderからWebP連番を書き出し、
CanvasでImage Sequenceとして描画します。

### Assets

- Blender
- WebP Image Sequence
- Git LFS

---

## Roadmap

- [ ] StoryManager
- [ ] Stage System
- [ ] Canvas Renderer
- [ ] FramePlayer
- [ ] Blender Scene
- [ ] Landing Page
- [ ] attic App