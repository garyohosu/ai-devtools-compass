# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-01-19

### Added
- **Codex CLI** (⭐4.3) を CLIカテゴリに追加
  - OpenAI Codexベースの自然言語コマンド生成ツール
  - シェル統合、エラー解決サポート
  - 初心者向けのCLIツール
- **Claude Code CLI** (⭐4.7) を CLIカテゴリに追加
  - 長文コンテキスト対応（200Kトークン）
  - 高度な推論能力とリファクタリング機能
  - 中級者向けのCLIツール

### Changed
- 掲載ツール数: 10種類 → 12種類
- CLIカテゴリのツール数: 2種類 → 4種類
- 平均評価: 4.55⭐ → 4.56⭐
- 無料ツール数: 4種類 → 6種類

### Documentation
- README.mdを更新してツール一覧を反映
- DEPLOYMENT.mdを追加（GitHub Pages設定手順）
- CHANGELOG.mdを追加（このファイル）
- AGENTS.mdを追加（AI Agentsへの指示書）
- CLAUDE.mdを追加（Claude向け指示書）

---

## [1.0.0] - 2025-01-19

### Added
- 🎉 初回リリース
- AI開発ツール比較マトリックスの基本機能実装
- 10種類のAI開発ツールを掲載
  - CLI: Gemini CLI, Aider
  - IDE拡張: Cline MCP, GitHub Copilot, Tabnine, Codeium
  - 統合環境: Cursor, Dify, Claude Code, Replit AI

### Features
- 🔍 高度なフィルタリング機能
  - カテゴリ別フィルター（CLI / IDE拡張 / 統合環境）
  - 料金帯フィルター（無料 / 無料/有料 / 有料のみ）
  - 学習曲線フィルター（初心者 / 中級 / 上級）
  - リアルタイム検索機能
- 📊 ソート機能
  - 評価順（高→低 / 低→高）
  - 名前順（A→Z / Z→A）
  - 更新日順（新→古 / 古→新）
- 📝 ツール詳細表示
  - モーダルウィンドウで詳細情報表示
  - メリット・デメリット比較
  - 対応言語と主要機能一覧
  - 公式サイト・チュートリアルリンク
- 💾 データ管理
  - LocalStorageでメモ永続保存
  - JSONエクスポート（データ+メモ）
  - CSVエクスポート（Excel分析用）
  - JSONインポート（データ復元）
- 🎨 UI/UX
  - 完全レスポンシブデザイン（モバイル対応）
  - ダークモード対応
  - Tailwind CSSによるモダンデザイン
  - Font Awesomeアイコン統合
- 📈 統計表示
  - 表示中ツール数
  - 無料ツール数
  - 平均評価

### Technical
- HTML5 + Tailwind CSS (CDN)
- Vanilla JavaScript（フレームワーク不要）
- LocalStorage API
- JSON データ構造
- GitHub Pages デプロイ対応

### Infrastructure
- GitHubリポジトリ: `garyohosu/ai-devtools-compass`
- GitHub Pages: https://garyohosu.github.io/ai-devtools-compass/
- `.nojekyll` ファイルでJekyll処理無効化

---

## 変更記録のガイドライン

### このファイルを更新するタイミング

1. **ツールの追加・削除時**
   - 新しいAI開発ツールを追加した場合
   - 既存ツールを削除した場合

2. **機能追加・変更時**
   - 新機能を実装した場合
   - 既存機能を大幅に変更した場合

3. **バグ修正時**
   - 重要なバグを修正した場合

4. **ドキュメント更新時**
   - README.md、AGENTS.md、CLAUDE.mdなど主要ドキュメントを更新した場合

5. **デザイン変更時**
   - UIを大幅に変更した場合

### 変更の分類

- **Added**: 新機能追加
- **Changed**: 既存機能の変更
- **Deprecated**: 非推奨になった機能
- **Removed**: 削除された機能
- **Fixed**: バグ修正
- **Security**: セキュリティ関連の変更
- **Documentation**: ドキュメント更新

### バージョニング規則

- **Major (x.0.0)**: 破壊的変更、大規模リニューアル
- **Minor (0.x.0)**: 新機能追加、後方互換性あり
- **Patch (0.0.x)**: バグ修正、小さな改善

---

## 今後の予定

### 計画中の機能 (v2.0.0)

- [ ] 🔗 コミュニティ評価機能（ユーザー投票）
- [ ] 📊 使用統計グラフ表示（Chart.js統合）
- [ ] 🤝 ツール同士の連携情報
- [ ] 📝 記事・チュートリアルリンク統合
- [ ] 🌐 多言語対応（日本語/英語切替）
- [ ] 🎥 スクリーンショット・デモ動画埋め込み
- [ ] 💬 コメント機能
- [ ] 🔔 新ツール追加時の通知機能
- [ ] 🏷️ タグ機能（#ai, #free, #beginnerなど）
- [ ] 🔄 ツール比較機能（2つのツールを並べて比較）

---

## リンク

- [リポジトリ](https://github.com/garyohosu/ai-devtools-compass)
- [GitHub Pages](https://garyohosu.github.io/ai-devtools-compass/)
- [Issues](https://github.com/garyohosu/ai-devtools-compass/issues)
- [Pull Requests](https://github.com/garyohosu/ai-devtools-compass/pulls)
