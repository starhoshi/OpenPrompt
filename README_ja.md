# Open Prompt

Google 検索のクエリをワンクリックで ChatGPT、Claude、Perplexity に送信できる Chrome 拡張機能です。

**[Chrome Web Storeからインストール](https://chromewebstore.google.com/detail/open-prompt/gkbeibjbkgchailochempflgljkeofkh)**

[English README](./README.md)

## 機能

- Google 検索からワンクリックで AI サービスにアクセス
- ChatGPT、Claude、Perplexity に対応
- Google の検索インターフェースにシームレスに統合
- 表示する AI ボタンを選択可能
- ライト/ダークモード対応
- 多言語対応（英語、日本語）

## インストール方法

### ローカル開発

1. Chrome で `chrome://extensions/` を開く
2. 「デベロッパーモード」を ON にする（右上）
3. 「パッケージ化されていない拡張機能を読み込む」をクリック
4. `extension/` フォルダを選択

## ディレクトリ構成

```
open_prompt/
├── extension/              # 拡張機能ファイル
│   ├── manifest.json
│   ├── content.js
│   ├── background.js
│   ├── styles.css
│   ├── options.html
│   ├── options.js
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── _locales/           # 国際化
│       ├── en/
│       │   └── messages.json
│       └── ja/
│           └── messages.json
├── design/                 # デザインアセット
│   └── icon.png
└── README.md
```

## 開発

### アイコンの更新

```bash
# design/icon.png から生成
cd /path/to/open_prompt
sips -z 16 16 design/icon.png --out extension/icon16.png
sips -z 48 48 design/icon.png --out extension/icon48.png
sips -z 128 128 design/icon.png --out extension/icon128.png
```

### 言語の追加

1. `extension/_locales/` に新しいフォルダを作成（例：`fr/`）
2. `en/` または `ja/` から `messages.json` をコピー
3. すべてのメッセージを翻訳

### リリースプロセス

1. `extension/` ディレクトリの内容を確認
2. ZIP ファイルを作成:
   ```bash
   cd extension
   zip -r ../open-prompt.zip .
   ```
3. Chrome Web Store Developer Dashboard にアップロード

## 技術的な実装

### 使用している Chrome API

- **Chrome Storage API** (`chrome.storage.sync`)

  - 表示する AI ボタンのユーザー設定を保存
  - デバイス間で設定を同期

- **Chrome i18n API** (`chrome.i18n`)
  - 完全な国際化対応
  - ブラウザ設定に基づく自動言語選択

### DOM 検出戦略

この拡張機能は Google の UI 要素を検出するために堅牢なアプローチを使用しています：

- **SVG パスマッチング**: アイコンの SVG パスでボタンを識別（例：閉じるボタン、音声検索）
- **ViewBox 検出**: SVG の viewBox 属性で Material Symbols アイコンを識別
- **DOM トラバーサル**: 検索テキストエリアから正しい挿入位置を探索
- **クラス名非依存**: Google の難読化された CSS クラス名に依存しない

### セキュリティ機能

- **コンテンツスクリプト分離**: 分離されたコンテキストで実行
- **Manifest V3**: 最新の Chrome 拡張機能セキュリティ標準を使用
- **最小限の権限**: `storage` 権限のみを要求

## 対応言語

- English（デフォルト）
- 日本語

## ライセンス

MIT
