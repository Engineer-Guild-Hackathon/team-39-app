# Team 39 Patch Notes v1.0

このリポジトリはハッカソン提出用の雛形です。以下の項目をすべて埋めてください。

---

## チーム情報
- チーム番号: 39
- チーム名: Patch Notes v1.0
- プロダクト名: IssuesDB
- メンバー
   - uekann
   - Aona0530
   - q1ovo1b
   - yohankim0318

---

## デモ　/ プレゼン資料
- デモURL: https://frontend.uekann.workers.dev/
- プレゼンURL：https://www.canva.com/design/DAGys-7gBSk/fOu-zgE41ufSgaAovz-YFA/view?utm_content=DAGys-7gBSk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4e1092228d

---

## 概要

IssuesDBは以下の特徴を持つ、問題解決事例を投稿・検索できるサービスです。

### 構造化された投稿

問題解決事例を投稿するためには以下の情報を含めないといけません。

- 起こった問題
- 動作環境
- 原因
- 解決策

これによって、必要な情報が不足しづらくなります。

### 動作環境によってフィルタリングできる検索

検索時に、起こった問題の他に動作環境も指定して検索することで、自分の環境では再現しない解決法が提示されることが少なくなります。


## 技術スタック

**フロントエンド**
- Next.js 15.5.2 (App Router)
- React 19.1.0
- TypeScript 5
- CSS Modules
- OpenNext (Cloudflare 対応)

**バックエンド**
- Go 1.24.0 + Gin Web Framework (未実装)
- 現在はモックデータで動作

**開発環境**
- Docker & Docker Compose
- Dev Container 対応
- ESLint

### 🚀 セットアップと実行

```bash
# リポジトリをクローン
git clone <repository-url>
cd team-39-app

# 環境セットアップ
mise install

# フロントエンド開発サーバー起動 (http://localhost:3000)
cd frontend && npm run dev
```

### 📦 デプロイ

**Cloudflare対応**
```bash
cd frontend
npm run cf:build   # Cloudflare向けビルド
npm run cf:deploy  # Cloudflareにデプロイ
```

### 🎨 画面構成

1. **ホームページ** (`/`) - 検索フォームとアプリケーション紹介
2. **検索結果ページ** (`/search`) - 問題の一覧表示と絞り込み機能
3. **問題詳細ページ** (`/questions/[id]`) - 問題の詳細と解決策の表示


