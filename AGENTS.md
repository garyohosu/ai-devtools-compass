# AI Agents Instructions

このファイルは、AI開発エージェント（GitHub Copilot、Cursor、Cline MCP、Gemini CLI等）がこのプロジェクトを編集する際の指示書です。

---

## 📋 プロジェクト概要

**プロジェクト名**: AI開発ツール比較マトリックス  
**リポジトリ**: https://github.com/garyohosu/ai-devtools-compass  
**公開URL**: https://garyohosu.github.io/ai-devtools-compass/  
**技術スタック**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript, LocalStorage API

### 目的
AI開発ツール（Gemini CLI、Cline MCP、Cursor、Dify等）を比較できるインタラクティブなWebアプリケーション。

---

## 🎯 AI Agentsが実行すべき重要なルール

### 1. 変更追跡の必須事項

#### ✅ ツール追加・削除時
```json
// data/tools.json にツールを追加したら：
1. CHANGELOG.md の [Unreleased] または新バージョンセクションに追記
2. README.md のツール一覧表を更新
3. 統計情報を更新（掲載ツール数、平均評価等）
```

#### ✅ 機能追加・変更時
```markdown
1. CHANGELOG.md に詳細を記録
2. README.md の「主な機能」セクションを更新（必要に応じて）
3. 今後の拡張機能リストから該当項目を削除
```

#### ✅ バグ修正時
```markdown
1. CHANGELOG.md の [Unreleased] - Fixed セクションに記録
2. 修正内容を簡潔に説明
```

#### ✅ ドキュメント更新時
```markdown
1. CHANGELOG.md の Documentation セクションに記録
2. 変更理由を記載
```

### 2. コミットメッセージ規則

**Conventional Commits** 形式を使用：

```bash
# 新機能追加
feat: CLIカテゴリに新ツール追加

# バグ修正
fix: フィルター機能のバグ修正

# ドキュメント更新
docs: README更新 - インストール手順追加

# スタイル変更
style: ダークモードの配色調整

# リファクタリング
refactor: フィルター関数を最適化

# テスト追加
test: ソート機能のテスト追加

# ビルド・設定変更
chore: GitHub Actions設定追加
```

### 3. ファイル構成の維持

```
webapp/
├── index.html              # メインHTML（編集時は慎重に）
├── css/
│   └── style.css          # カスタムCSS
├── js/
│   └── app.js             # メインロジック
├── data/
│   └── tools.json         # ツールデータ（頻繁に更新）
├── assets/
│   └── images/            # スクリーンショット
├── README.md              # プロジェクト説明（更新頻度: 高）
├── CHANGELOG.md           # 変更履歴（必ず更新）
├── DEPLOYMENT.md          # デプロイ手順
├── AGENTS.md              # このファイル
└── CLAUDE.md              # Claude専用指示書
```

---

## 🔧 作業フロー

### A. ツール追加フロー

```bash
# 1. data/tools.json を編集
# 新しいツール情報を追加

# 2. CHANGELOG.md を更新
## [Unreleased]
### Added
- **ツール名** (⭐評価) を カテゴリ に追加
  - 説明文
  - 主要機能

# 3. README.md を更新
# - ツール一覧表に追加
# - 統計情報を更新

# 4. コミット
git add data/tools.json CHANGELOG.md README.md
git commit -m "feat: カテゴリに新ツール追加

- ツール名 (評価) 追加
- 詳細説明"
git push origin main

# 5. 確認
# GitHub Pagesで表示確認（1-2分待機）
```

### B. 機能追加フロー

```bash
# 1. コードを実装（index.html, css/style.css, js/app.js）

# 2. CHANGELOG.md を更新
## [Unreleased]
### Added
- 機能名の実装
  - 詳細説明

# 3. README.md を更新（必要に応じて）

# 4. コミット
git add .
git commit -m "feat: 新機能実装

- 機能説明
- 使用技術"
git push origin main
```

### C. バグ修正フロー

```bash
# 1. バグを修正

# 2. CHANGELOG.md を更新
## [Unreleased]
### Fixed
- バグの説明と修正内容

# 3. コミット
git add .
git commit -m "fix: バグ修正

- 修正内容の詳細"
git push origin main
```

---

## 📊 データ構造

### tools.json のスキーマ

```json
{
  "id": "string (ユニークID、kebab-case)",
  "name": "string (表示名)",
  "category": "CLI | IDE拡張 | 統合環境",
  "features": ["string", "string", ...],
  "pricing": "string (料金表示文字列)",
  "pricingTier": "free | freemium | paid",
  "languages": ["string", "string", ...],
  "difficulty": "初心者 | 中級 | 上級",
  "rating": number (1.0 - 5.0),
  "officialUrl": "string (URL)",
  "tutorialUrl": "string (URL、オプショナル)",
  "screenshot": "string (画像パス、オプショナル)",
  "notes": "string (内部メモ、オプショナル)",
  "description": "string (短い説明文)",
  "pros": ["string", ...],
  "cons": ["string", ...],
  "updatedAt": "YYYY-MM-DD"
}
```

### 必須フィールドのバリデーション

- ✅ `id`: 小文字、ハイフン区切り（例: `gemini-cli`）
- ✅ `category`: 3つのうち1つ（CLI / IDE拡張 / 統合環境）
- ✅ `pricingTier`: 3つのうち1つ（free / freemium / paid）
- ✅ `difficulty`: 3つのうち1つ（初心者 / 中級 / 上級）
- ✅ `rating`: 1.0 〜 5.0 の範囲
- ✅ `updatedAt`: ISO 8601形式（YYYY-MM-DD）

---

## 🎨 コーディング規約

### HTML
- セマンティックHTMLを使用
- アクセシビリティを重視（aria-label等）
- Tailwind CSSクラスを優先使用

### CSS
- カスタムCSSは `css/style.css` に追加
- クラス名は kebab-case（例: `.tool-card`）
- ダークモード対応を忘れずに

### JavaScript
- ES6+を使用
- 関数名は camelCase（例: `applyFilters()`）
- コメントは日本語で記述
- LocalStorage操作は慎重に

### JSON
- インデント: スペース2つ
- 末尾カンマなし
- UTF-8エンコーディング

---

## 🚫 禁止事項

### ❌ 絶対にやってはいけないこと

1. **LocalStorageのキー名変更**
   - 既存ユーザーのデータが消える
   - `toolNotes` キーは変更禁止

2. **tools.json の破壊的変更**
   - 既存の `id` フィールドの変更禁止
   - スキーマの大幅変更は Version 2.0 まで待つ

3. **CDNリンクの削除**
   - Tailwind CSS, Font Awesome のCDNリンクは削除しない

4. **Git履歴の改変**
   - `git rebase -i` や `git push --force` は使用禁止

5. **CHANGELOG.md の未更新**
   - 変更時は必ず CHANGELOG.md を更新

---

## 📝 テンプレート

### 新ツール追加テンプレート

```json
{
  "id": "tool-id",
  "name": "ツール名",
  "category": "CLI | IDE拡張 | 統合環境",
  "features": ["機能1", "機能2", "機能3", "機能4"],
  "pricing": "料金表示文字列",
  "pricingTier": "free | freemium | paid",
  "languages": ["Python", "JavaScript", "多言語"],
  "difficulty": "初心者 | 中級 | 上級",
  "rating": 4.5,
  "officialUrl": "https://example.com",
  "tutorialUrl": "",
  "screenshot": "",
  "notes": "",
  "description": "ツールの簡潔な説明（1-2文）",
  "pros": ["メリット1", "メリット2", "メリット3"],
  "cons": ["デメリット1", "デメリット2"],
  "updatedAt": "2025-01-19"
}
```

### CHANGELOG.md エントリテンプレート

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- 追加された機能や内容

### Changed
- 変更された機能や内容

### Fixed
- 修正されたバグ

### Removed
- 削除された機能
```

---

## 🔍 チェックリスト

### プルリクエスト前の確認事項

- [ ] CHANGELOG.md を更新した
- [ ] README.md を更新した（必要に応じて）
- [ ] tools.json のJSONが有効か確認（JSON Validator使用）
- [ ] ローカルで動作確認した
- [ ] コミットメッセージが Conventional Commits 形式
- [ ] 新しい依存関係を追加していない（CDNのみ許可）
- [ ] ダークモードで表示確認した
- [ ] モバイルで表示確認した

---

## 📚 参考リンク

- [Keep a Changelog](https://keepachangelog.com/)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)

---

## 🤝 質問・サポート

このプロジェクトに関する質問は：
- [GitHub Issues](https://github.com/garyohosu/ai-devtools-compass/issues)
- または CLAUDE.md を参照

---

**最終更新**: 2025-01-19  
**バージョン**: 1.1.0
