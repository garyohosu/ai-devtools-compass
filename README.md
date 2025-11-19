# 🤖 AI開発ツール比較マトリックス

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://garyohosu.github.io/ai-devtools-compass/)

AI開発ツール（Gemini CLI、Cline MCP、Cursor、Dify等）を徹底比較できるインタラクティブなWebアプリケーションです。

## 🌐 Live Demo

**👉 [https://garyohosu.github.io/ai-devtools-compass/](https://garyohosu.github.io/ai-devtools-compass/)**

![AI Dev Tools Comparison](https://via.placeholder.com/800x400?text=AI+Dev+Tools+Comparison)

## ✨ 主な機能

### 1️⃣ ツール比較マトリックス
- **10種類以上のAI開発ツール**を掲載
- カテゴリ（CLI、IDE拡張、統合環境）別に整理
- 主要機能、料金、対応言語、学習曲線を一覧表示
- ⭐評価システム（1-5段階）
- 最終更新日の追跡

### 2️⃣ 高度なフィルタリング・ソート
- **カテゴリ別フィルター**：CLI / IDE拡張 / 統合環境
- **料金帯フィルター**：無料 / 無料/有料 / 有料のみ
- **学習曲線フィルター**：初心者 / 中級 / 上級
- **検索機能**：ツール名、説明、機能で検索
- **ソート機能**：
  - 評価順（高→低 / 低→高）
  - 名前順（A→Z / Z→A）
  - 更新日順（新→古 / 古→新）

### 3️⃣ 詳細パネル
- ツールクリックで詳細情報を表示
- メリット・デメリットの比較
- 対応言語と主要機能の一覧
- 公式サイト・チュートリアルへのリンク
- **使用感メモ機能**（Markdown対応予定）

### 4️⃣ データ管理
- **LocalStorage**でメモを永続保存
- **JSONエクスポート**：データとメモをバックアップ
- **CSVエクスポート**：Excelで分析可能
- **JSONインポート**：データの復元

### 5️⃣ UX/UI
- 📱 **完全レスポンシブデザイン**（モバイル対応）
- 🌓 **ダークモード対応**
- 🎨 **モダンなグラデーション**とアニメーション
- ♿ **アクセシビリティ**重視

## 🚀 クイックスタート

### 前提条件
- モダンなWebブラウザ（Chrome、Firefox、Safari、Edge）
- インターネット接続（CDN経由でTailwind CSS、Font Awesomeを読み込み）

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/garyohosu/ai-devtools-compass.git

# ディレクトリに移動
cd ai-devtools-compass

# ローカルサーバーを起動（方法1: Python）
python3 -m http.server 8000

# または（方法2: Node.js）
npx http-server -p 8000

# ブラウザで開く
open http://localhost:8000
```

### ファイル構成

```
ai-dev-tools-comparison/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # カスタムCSS
├── js/
│   └── app.js             # メインJavaScript
├── data/
│   └── tools.json         # ツールデータ（JSON）
├── assets/
│   └── images/            # スクリーンショット等
└── README.md              # このファイル
```

## 📊 掲載ツール一覧

| ツール名 | カテゴリ | 料金 | 評価 |
|---------|---------|------|------|
| Gemini CLI | CLI | 無料 | ⭐4.5 |
| Cline MCP | IDE拡張 | 無料 | ⭐4.8 |
| Cursor | 統合環境 | 無料/Pro $20/月 | ⭐4.7 |
| Dify | 統合環境 | 無料/クラウド $59/月~ | ⭐4.3 |
| GitHub Copilot | IDE拡張 | $10/月 | ⭐4.6 |
| Claude Code | 統合環境 | 無料/Pro $20/月 | ⭐4.9 |
| Tabnine | IDE拡張 | 無料/Pro $12/月 | ⭐4.4 |
| Replit AI | 統合環境 | 無料/Core $15/月 | ⭐4.2 |
| Codeium | IDE拡張 | 無料 | ⭐4.5 |
| Aider | CLI | 無料（APIキー必要） | ⭐4.6 |

## 🎯 使い方

### 基本操作

1. **検索**: ヘッダーの検索バーにキーワードを入力
2. **フィルター**: サイドバーでカテゴリ、料金、難易度を選択
3. **ソート**: ドロップダウンで並び替え
4. **詳細表示**: ツールカードをクリック
5. **メモ追加**: 詳細パネルでメモを入力して保存

### データエクスポート

```javascript
// JSONエクスポート
1. ヘッダーの「エクスポート」ボタンをクリック
2. または、サイドバーの「JSON出力」ボタン
3. ファイルがダウンロードされます

// CSVエクスポート
1. サイドバーの「CSV出力」ボタンをクリック
2. Excelで開いて分析可能
```

### データインポート

```javascript
1. サイドバーの「インポート」ボタンをクリック
2. 以前エクスポートしたJSONファイルを選択
3. データとメモが復元されます
```

## 🛠️ 技術スタック

- **HTML5**: セマンティックマークアップ
- **Tailwind CSS**: ユーティリティファーストCSS（CDN）
- **Vanilla JavaScript**: フレームワーク不要
- **Font Awesome**: アイコンライブラリ
- **LocalStorage API**: クライアントサイドストレージ

## 📱 レスポンシブデザイン

- **デスクトップ**: テーブル表示 + サイドバー
- **タブレット**: カード表示 + 折りたたみサイドバー
- **モバイル**: 縦スクロール + ハンバーガーメニュー

## 🌐 ブラウザサポート

| ブラウザ | バージョン |
|---------|-----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 🔮 今後の拡張機能

- [ ] 🔗 コミュニティ評価機能（投票システム）
- [ ] 📊 使用統計グラフ表示（Chart.js）
- [ ] 🤝 ツール同士の連携情報
- [ ] 📝 記事との自動リンク
- [ ] 🌐 多言語対応（日本語/英語）
- [ ] 🎥 スクリーンショット・デモ動画
- [ ] 💬 コメント機能
- [ ] 🔔 新ツール追加時の通知

## 🤝 コントリビューション

プルリクエスト大歓迎です！

### 新しいツールを追加する方法

1. `data/tools.json`を編集
2. 以下の形式で追加：

```json
{
  "id": "tool-id",
  "name": "ツール名",
  "category": "CLI | IDE拡張 | 統合環境",
  "features": ["機能1", "機能2"],
  "pricing": "料金表示文字列",
  "pricingTier": "free | freemium | paid",
  "languages": ["Python", "JavaScript"],
  "difficulty": "初心者 | 中級 | 上級",
  "rating": 4.5,
  "officialUrl": "https://...",
  "tutorialUrl": "",
  "screenshot": "",
  "notes": "",
  "description": "説明文",
  "pros": ["メリット1", "メリット2"],
  "cons": ["デメリット1", "デメリット2"],
  "updatedAt": "2025-01-15"
}
```

3. プルリクエストを送信

## 📄 ライセンス

MIT License - 自由に使用・改変・配布できます。

## 👨‍💻 作者

**AI Dev Assistant**

- 🌐 Website: [Your Website](https://yourwebsite.com)
- 📧 Email: your.email@example.com
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)
- 💼 LinkedIn: [Your Name](https://linkedin.com/in/yourname)

## 🙏 謝辞

- [Tailwind CSS](https://tailwindcss.com/) - 素晴らしいCSSフレームワーク
- [Font Awesome](https://fontawesome.com/) - 豊富なアイコンライブラリ
- すべてのAI開発ツール開発者の皆様

## 📝 更新履歴

### v1.0.0 (2025-01-19)
- 🎉 初回リリース
- ✅ 10種類のAI開発ツールを掲載
- ✅ フィルタリング・ソート機能実装
- ✅ ダークモード対応
- ✅ データエクスポート/インポート機能
- ✅ LocalStorageでのメモ保存

---

⭐ このプロジェクトが役立ったら、GitHubでスターをお願いします！

💡 質問やフィードバックは[Issues](https://github.com/garyohosu/ai-devtools-compass/issues)へ
