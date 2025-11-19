# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Fixed
- **Codex CLI**: 正確な情報に修正
  - OpenAI公式ツールとして復元
  - 公式URL: https://developers.openai.com/codex/cli/
  - ChatGPT Plus以上（$20/月~）が必要と明記
  - インタラクティブTUI、画像入力、MCP対応などの機能を追加

### Added
- **Codex CLI**と**ShellGPT**を両方掲載
  - Codex CLI: OpenAI公式のターミナルエージェント
  - ShellGPT: サードパーティのマルチLLMツール
  - 両者は異なるツールとして併存

---

## [1.2.0] - 2025-01-19

### Fixed
- **Tabnine**: 価格情報を更新（$12/月 → $59/月、無料プラン廃止を反映）
  - 2025年4月に無料プラン（Basic）が廃止
  - 現在は年払いのみで$59/ユーザー/月
- **Replit AI**: 価格情報を修正（$15/月 → $20/月）
  - 正しい価格は$20/月（年払い）
  - Coreプランには月額$25のAI使用クレジット含む
- **Codex CLI**: 不正確な情報を削除し、ShellGPTに置き換え
  - 旧記載のURL（https://github.com/microsoft/shell-gpt）は存在せず
  - 正しいツール名はShellGPT（https://github.com/TheR1D/shell_gpt）
- **Claude Code**: 公式URLを修正
  - https://www.anthropic.com/claude → https://code.claude.com/
  - チュートリアルURLも追加
- **Cline MCP**: 難易度を修正（初心者 → 中級）
  - MCP設定やAPIキー管理にはある程度の技術知識が必要

### Added
- すべてのツールに `pricingVerifiedDate` フィールドを追加
  - 価格情報の最終確認日を記録（2025-01-19）
- 「無料」ツールに対して、API料金が別途発生する旨の注釈を追加
  - Gemini CLI、Cline MCP、Aider、Claude Code、ShellGPT

### Changed
- 価格情報の表記を統一し、より正確な情報に更新
- 公式URLとチュートリアルURLを分離して記載
- ツールの説明文（description）を明確化
- Codeiumの注釈にWindsurf名称変更の情報を追加

### Documentation
- ファクトチェック実施日: 2025-01-19
- 検証方法: 各ツールの公式サイト、公式ドキュメント、GitHubリポジトリを直接確認
- 全12ツールの情報を最新状態に更新

---

## [1.1.0] - 2025-01-19

### Changed
- **Claude Code CLI** を **Claude Code** に名称変更（CLIカテゴリ）
  - よりシンプルで分かりやすい名称に統一
- **Claude Code (Artifacts)** を **Claude (Artifacts)** に名称変更（統合環境カテゴリ）
  - IDを `claude-code` から `claude-artifacts` に変更してCLIツールと区別

---

## [1.1.0] - 2025-01-19

### Added
- **Codex CLI** (⭐4.3) を CLIカテゴリに追加
  - OpenAI Codexベースの自然言語コマンド生成ツール
  - シェル統合、エラー解決サポート
  - 初心者向けのCLIツール
- **Claude Code** (⭐4.7) を CLIカテゴリに追加
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
