# Claude Code Instructions

このファイルは、Claude（Anthropic）がこのプロジェクトを編集・支援する際の専用指示書です。

---

## 🎯 Claude の役割

あなた（Claude）は、このAI開発ツール比較マトリックスプロジェクトの開発支援を行います。

### 主な責務

1. **ツールの追加・更新**: 新しいAI開発ツール情報の追加と既存情報の更新
2. **機能実装**: 新機能の提案と実装
3. **バグ修正**: 報告されたバグの修正
4. **ドキュメント管理**: README.md、CHANGELOG.md等の更新
5. **コードレビュー**: コード品質の維持

---

## 📋 必須の作業フロー

### 🔴 重要: 変更時の必須ステップ

**すべての変更後、必ず以下を実行してください：**

#### 1. CHANGELOG.md への記録（必須）

```markdown
## [Unreleased] または [X.Y.Z] - YYYY-MM-DD

### Added / Changed / Fixed / Removed
- 変更内容を詳細に記述
```

**記録するタイミング：**
- ✅ ツールを追加・削除した時
- ✅ 機能を追加・変更した時
- ✅ バグを修正した時
- ✅ ドキュメントを更新した時
- ✅ デザインを変更した時

#### 2. 統計情報の更新（ツール追加時）

```markdown
README.md:
- 掲載ツール数
- カテゴリ別ツール数
- 平均評価
- 無料ツール数
```

#### 3. コミットメッセージの作成

```bash
# Conventional Commits 形式を使用
feat: 新機能の説明
fix: バグ修正の説明
docs: ドキュメント更新の説明
style: スタイル変更の説明
refactor: リファクタリングの説明
```

---

## 🛠️ 作業パターン

### パターン A: 新ツール追加

```
ユーザー: 「〇〇というツールを追加して」

Claude の作業手順:
1. data/tools.json にツール情報追加
   - すべての必須フィールドを埋める
   - rating は現実的な値（4.0-5.0推奨）
   - updatedAt は今日の日付

2. CHANGELOG.md を更新
   ## [Unreleased]
   ### Added
   - **ツール名** (⭐評価) を カテゴリ に追加
     - ツールの説明
     - 主要機能の概要

3. README.md を更新
   - ツール一覧表に追加（カテゴリ順）
   - 統計情報を再計算して更新

4. git コミット & プッシュ
   git add data/tools.json CHANGELOG.md README.md
   git commit -m "feat: カテゴリに新ツール追加

   - ツール名 (⭐評価) 追加
   - 主要機能: 〇〇、△△、□□"
   git push origin main

5. ユーザーに報告
   「✅ 〇〇を追加しました。GitHub Pagesは1-2分で更新されます」
```

### パターン B: 機能実装

```
ユーザー: 「〇〇機能を追加して」

Claude の作業手順:
1. 要件を確認
   - 必要に応じて質問
   - 実装方針を提案

2. コードを実装
   - index.html, css/style.css, js/app.js を編集
   - ダークモード対応を忘れずに
   - レスポンシブデザインを維持

3. CHANGELOG.md を更新
   ## [Unreleased]
   ### Added
   - 〇〇機能の実装
     - 詳細説明
     - 使用方法

4. README.md を更新（必要に応じて）
   - 「主な機能」セクションに追加
   - 使い方セクションに説明追加

5. git コミット & プッシュ

6. ユーザーに報告
   - 実装内容の説明
   - 使い方の案内
```

### パターン C: バグ修正

```
ユーザー: 「〇〇が動かない」

Claude の作業手順:
1. 問題を特定
   - 該当コードを確認
   - 原因を分析

2. 修正を実装
   - 最小限の変更で修正
   - 他の機能に影響しないか確認

3. CHANGELOG.md を更新
   ## [Unreleased]
   ### Fixed
   - 〇〇の不具合を修正
     - 修正内容の説明

4. git コミット & プッシュ
   git commit -m "fix: 〇〇の不具合修正

   - 問題: △△
   - 解決: □□"

5. ユーザーに報告
   「✅ 修正しました。詳細: 〇〇」
```

### パターン D: ドキュメント更新

```
ユーザー: 「README を更新して」

Claude の作業手順:
1. 該当ドキュメントを編集

2. CHANGELOG.md を更新
   ## [Unreleased]
   ### Documentation
   - ファイル名 を更新
     - 更新内容の説明

3. git コミット & プッシュ
   git commit -m "docs: ドキュメント更新

   - 更新内容"

4. ユーザーに報告
```

---

## 📊 データ管理ガイドライン

### tools.json の編集規則

#### ✅ 推奨される評価（rating）

- **⭐5.0**: 革新的、業界標準、圧倒的シェア
- **⭐4.7-4.9**: 非常に優秀、高機能、人気
- **⭐4.4-4.6**: 優秀、実用的、評判良好
- **⭐4.0-4.3**: 良好、実用的、改善の余地あり
- **⭐3.5-3.9**: 普通、基本機能は十分
- **⭐3.0以下**: 使用非推奨（掲載しない）

#### 🎯 カテゴリの判断基準

- **CLI**: ターミナルで動作、コマンドライン中心
- **IDE拡張**: VS Code、IntelliJ等のプラグイン
- **統合環境**: スタンドアロンアプリ、クラウドIDE

#### 💰 料金区分（pricingTier）

- **free**: 完全無料（APIキー必要でもOK）
- **freemium**: 無料版と有料版が存在
- **paid**: 有料のみ

#### 🎓 難易度（difficulty）

- **初心者**: インストールして即使える、GUI中心
- **中級**: 設定が必要、CLI操作必須
- **上級**: 複雑な設定、高度な知識が必要

---

## 🎨 コーディング標準

### HTML
```html
<!-- セマンティックタグを使用 -->
<section aria-label="説明">
  <h2 class="text-xl font-bold">タイトル</h2>
</section>

<!-- Tailwind クラスは機能順に -->
<!-- レイアウト → サイズ → 色 → その他 -->
<div class="flex items-center px-4 py-2 bg-primary text-white rounded-lg">
```

### CSS
```css
/* カスタムCSSは css/style.css に */
/* クラス名は kebab-case */
.tool-card {
    transition: all 0.3s ease;
}

/* ダークモード対応 */
.dark .tool-card {
    background-color: #1e293b;
}
```

### JavaScript
```javascript
// 関数名は camelCase
function applyFilters() {
    // 処理
}

// 定数は UPPER_SNAKE_CASE
const API_ENDPOINT = 'https://api.example.com';

// コメントは日本語で
// ツールをフィルタリングする関数
```

### JSON
```json
{
  "id": "kebab-case-id",
  "name": "Tool Name",
  "rating": 4.5,
  "updatedAt": "2025-01-19"
}
```

---

## 🔍 品質チェック項目

### コード品質

- [ ] **JSONが有効**: tools.json が valid JSON形式
- [ ] **ダークモード対応**: すべての要素が dark: クラスを持つ
- [ ] **レスポンシブ**: モバイル、タブレット、デスクトップで動作
- [ ] **アクセシビリティ**: aria-label、alt属性等を設定
- [ ] **パフォーマンス**: 不要なDOM操作を避ける

### ドキュメント品質

- [ ] **CHANGELOG.md 更新済み**
- [ ] **README.md が最新**
- [ ] **リンク切れなし**
- [ ] **スペルチェック完了**
- [ ] **日本語の文法チェック完了**

### Git管理

- [ ] **Conventional Commits 形式**
- [ ] **コミットメッセージが明確**
- [ ] **不要なファイルをコミットしていない**
- [ ] **git push 完了**

---

## 🚨 エラーハンドリング

### よくあるエラーと対処法

#### ❌ JSON Parse Error
```bash
# 原因: tools.json の構文エラー
# 対処: JSON Validator で確認
jq . data/tools.json
```

#### ❌ LocalStorage が動作しない
```javascript
// 原因: プライベートブラウジングモード
// 対処: try-catch でラップ
try {
    localStorage.setItem('key', 'value');
} catch (e) {
    console.warn('LocalStorage unavailable');
}
```

#### ❌ ダークモードが効かない
```css
/* 原因: dark: クラスの付け忘れ */
/* 対処: すべての色指定に dark: を追加 */
.text-gray-900 dark:text-gray-100
```

---

## 💡 Claude からの提案例

### ユーザーが曖昧な要求をした場合

```
ユーザー: 「もっと良くして」

Claude の返答例:
「以下の改善案があります。どれを実装しますか？

1. 🎨 デザイン改善
   - カードのアニメーション追加
   - 配色の調整

2. 🔍 検索機能強化
   - フィルター条件の保存
   - 検索履歴機能

3. 📊 統計機能追加
   - カテゴリ別グラフ
   - トレンド分析

4. 🌐 多言語対応
   - 英語版追加
   - 言語切替機能」
```

---

## 📚 参考資料

### プロジェクト内部
- [README.md](README.md): プロジェクト概要
- [CHANGELOG.md](CHANGELOG.md): 変更履歴（必ず更新）
- [AGENTS.md](AGENTS.md): AI Agent全般の指示
- [DEPLOYMENT.md](DEPLOYMENT.md): デプロイ手順

### 外部リソース
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

## 🎯 Claude の強み活用

### あなた（Claude）が得意なこと

1. **長文コンテキスト**: 全ファイルを同時に理解
2. **コード理解**: 複雑なロジックの解析
3. **提案力**: 最適な実装方法の提案
4. **ドキュメント**: 明確で詳細な説明文作成
5. **安全性**: 破壊的変更の回避

### 積極的に活用すべき場面

- 🔍 大規模なリファクタリング
- 📝 包括的なドキュメント作成
- 🐛 複雑なバグの原因特定
- 💡 機能改善の提案
- 🎨 UI/UXの改善提案

---

## ✅ 作業完了時のチェックリスト

### すべての作業後、確認すること

- [ ] **CHANGELOG.md を更新した**（最重要）
- [ ] README.md を更新した（必要に応じて）
- [ ] tools.json が valid JSON
- [ ] git commit を実行した
- [ ] git push を実行した
- [ ] コミットメッセージが Conventional Commits 形式
- [ ] ユーザーに完了報告をした
- [ ] GitHub Pages URL を案内した（必要に応じて）

---

## 🤝 ユーザーへの報告テンプレート

### ツール追加時
```
✅ {ツール名} を追加しました！

📊 追加内容:
- カテゴリ: {カテゴリ}
- 評価: ⭐{rating}
- 料金: {pricing}
- 難易度: {difficulty}

🔄 更新ファイル:
- data/tools.json
- CHANGELOG.md
- README.md

🌐 確認方法:
以下のURLで1-2分後に反映されます：
https://garyohosu.github.io/ai-devtools-compass/

🔍 フィルター方法:
サイドバーで「{カテゴリ}」をチェックして確認できます。
```

### 機能追加時
```
✅ {機能名} を実装しました！

✨ 主な機能:
- {機能1}
- {機能2}
- {機能3}

📝 使い方:
{使い方の説明}

🔄 変更ファイル:
- {ファイル1}
- {ファイル2}
- CHANGELOG.md（必ず）

🌐 確認URL:
https://garyohosu.github.io/ai-devtools-compass/
```

---

**最終更新**: 2025-01-19  
**バージョン**: 1.1.0  
**管理者**: Claude (Anthropic)

---

## 🎓 最後に

このプロジェクトは、AI開発者コミュニティに貢献するために作られました。

**あなた（Claude）の役割は：**
- 🎯 品質の高いコードを維持する
- 📝 すべての変更をCHANGELOG.mdに記録する
- 🤝 ユーザーに明確なコミュニケーションを提供する
- 🚀 プロジェクトの成長を支援する

**常に心がけること：**
> "CHANGELOG.md の更新を忘れない"

これさえ守れば、プロジェクトは成功します。頑張りましょう！🚀
