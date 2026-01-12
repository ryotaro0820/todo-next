# TODOアプリ - Next.js版

Next.js、TypeScript、Tailwind CSSで構築された、モダンなTODOリスト管理アプリケーションです。

## デモ

🚀 **ライブデモ**: https://todo-next-achdkox98-ryotaro0820s-projects.vercel.app/

## 特徴

- ✅ **タスク管理** - タスクの追加、完了、削除が簡単に行えます
- 👤 **担当者機能** - 各タスクに担当者を設定できます
- 🔍 **フィルター機能** - すべて/未完了/完了済みでタスクを絞り込み表示
- 💾 **データ永続化** - ブラウザのlocalStorageを使用してデータを保存
- 📱 **レスポンシブデザイン** - スマートフォンやタブレットでも快適に使用可能
- 🎨 **モダンなUI** - Tailwind CSSによる洗練されたデザイン
- ⚡ **高速パフォーマンス** - Next.js 16 + Turbopackによる超高速開発体験
- 🔒 **型安全** - TypeScriptによる型チェック

## 技術スタック

- **フレームワーク**: [Next.js 16](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **ビルドツール**: Turbopack
- **デプロイ**: [Vercel](https://vercel.com/)

## プロジェクト構成

```
todo-next/
├── app/
│   ├── components/
│   │   ├── TodoInput.tsx    # タスク入力コンポーネント
│   │   ├── TodoList.tsx     # TODOリスト表示コンポーネント
│   │   └── TodoItem.tsx     # 個別TODOアイテムコンポーネント
│   ├── page.tsx             # メインページ（ホーム）
│   ├── layout.tsx           # ルートレイアウト
│   └── globals.css          # グローバルスタイル
├── public/                  # 静的ファイル
├── package.json
├── tsconfig.json            # TypeScript設定
├── tailwind.config.ts       # Tailwind CSS設定
└── next.config.ts           # Next.js設定
```

## セットアップ

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone https://github.com/ryotaro0820/todo-next.git
cd todo-next
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで開く

http://localhost:3000 にアクセスしてください。

## スクリプト

- `npm run dev` - 開発サーバーを起動（Turbopack使用）
- `npm run build` - 本番環境用にビルド
- `npm run start` - 本番サーバーを起動
- `npm run lint` - ESLintでコードチェック

## 使い方

### タスクの追加
1. 「新しいタスクを入力...」フィールドにタスク名を入力
2. 「だれが（担当者）」フィールドに担当者名を入力（オプション）
3. 「追加」ボタンをクリック、またはEnterキーを押して追加

### タスクの管理
- **完了/未完了の切り替え**: チェックボックスをクリック
- **タスクの削除**: 各タスクの「削除」ボタンをクリック

### フィルター
- **すべて**: 全タスクを表示
- **未完了**: 未完了のタスクのみ表示
- **完了済み**: 完了したタスクのみ表示

### データの保存
タスクはブラウザのlocalStorageに自動保存されます。ページをリロードしてもデータは保持されます。

## デプロイ

このプロジェクトはVercelにデプロイされています。

### Vercelへのデプロイ方法

1. Vercelアカウントを作成（https://vercel.com/）
2. GitHubリポジトリをインポート
3. 自動的にビルドとデプロイが実行されます

**mainブランチへのプッシュで自動デプロイされます。**

### その他のデプロイ方法

```bash
npm run build
npm run start
```

ビルドされたファイルは `.next` ディレクトリに出力されます。

## ライセンス

このプロジェクトはオープンソースです。自由に使用・改変していただけます。

## 作者

**ryotaro0820**

- GitHub: [@ryotaro0820](https://github.com/ryotaro0820)

## 関連プロジェクト

- [todo (Vanilla版)](https://github.com/ryotaro0820/todo) - HTML/CSS/JavaScriptで作成されたシンプル版

## 今後の機能追加予定

- [ ] タスクの編集機能
- [ ] 優先度設定
- [ ] 期限設定とリマインダー
- [ ] ダークモード
- [ ] タスクの検索機能
- [ ] カテゴリー/タグ機能
- [ ] ドラッグ&ドロップ並び替え
- [ ] データのエクスポート/インポート
