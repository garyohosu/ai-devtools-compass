# 🚀 GitHub Pages デプロイメントガイド

## ✅ 現在の状態

- ✅ GitHubリポジトリ: `garyohosu/ai-devtools-compass`
- ✅ コードプッシュ済み
- ✅ `.nojekyll`ファイル追加済み
- ⏳ GitHub Pages設定: **要設定**

---

## 📋 GitHub Pagesを有効化する手順

### 方法1: GitHub Web UI（推奨・簡単）

1. **GitHubリポジトリにアクセス**
   ```
   https://github.com/garyohosu/ai-devtools-compass
   ```

2. **Settings タブをクリック**
   - リポジトリページ上部の「Settings」をクリック

3. **Pages セクションに移動**
   - 左サイドバーの「Pages」をクリック

4. **ソースを設定**
   - **Source**: `Deploy from a branch` を選択
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
   - 「Save」をクリック

5. **数分待機**
   - GitHub Pagesのビルドが完了するまで1-2分待つ
   - ページをリロードすると公開URLが表示される

6. **公開URL**
   ```
   https://garyohosu.github.io/ai-devtools-compass/
   ```

---

### 方法2: GitHub CLI（ターミナルから）

```bash
# GitHub CLIをインストール済みの場合
gh auth login
gh api repos/garyohosu/ai-devtools-compass/pages \
  --method POST \
  -f source[branch]=main \
  -f source[path]=/
```

---

### 方法3: GitHub Actions（自動デプロイ）

以下のワークフローファイルを作成することもできます：

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

---

## 🔧 トラブルシューティング

### 404 エラーが出る場合

1. **GitHub Pages設定を確認**
   - Settings > Pages で正しく設定されているか確認

2. **ビルド状況を確認**
   - Actions タブで「pages build and deployment」を確認
   - エラーがあれば詳細を確認

3. **キャッシュをクリア**
   - ブラウザのキャッシュをクリアして再アクセス

### ファイルが読み込めない場合

1. **パス確認**
   - 現在の構成は `/ (root)` からの相対パスを使用
   - すべてのファイルが正しく配置されているか確認

2. **大文字小文字**
   - GitHubは大文字小文字を区別します
   - ファイル名が正確か確認

---

## 📊 デプロイ後の確認項目

### ✅ チェックリスト

- [ ] サイトが正常に表示される
- [ ] ダークモードが動作する
- [ ] フィルター・ソート機能が動作する
- [ ] モーダルが開く
- [ ] LocalStorage（メモ保存）が動作する
- [ ] データエクスポート/インポートが動作する
- [ ] レスポンシブデザインが正しく表示される（モバイル確認）

### 🧪 テストURL

公開後、以下のURLでアクセスできます：

```
https://garyohosu.github.io/ai-devtools-compass/
```

---

## 🎉 成功後の推奨アクション

### 1. READMEを更新

```markdown
# 🌐 Live Demo
https://garyohosu.github.io/ai-devtools-compass/
```

### 2. リポジトリ説明を追加

GitHubリポジトリページで：
- **About**セクションを編集
- **Website**: 公開URLを追加
- **Topics**: `ai`, `developer-tools`, `comparison`, `github-pages` 等を追加

### 3. ソーシャルシェア

- Twitter/X でシェア
- LinkedIn で紹介
- ブログ記事を書く

---

## 📱 カスタムドメイン（オプション）

独自ドメインを使用する場合：

1. **DNSレコードを設定**
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

2. **CNAMEファイルを作成**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **GitHub Settings**
   - Settings > Pages > Custom domain
   - ドメイン名を入力して保存

---

## 🔄 更新方法

今後の更新は以下の流れ：

```bash
# 1. ファイルを編集
# 2. コミット
git add .
git commit -m "feat: 新機能追加"
git push origin main

# 3. GitHub Pagesが自動で再デプロイ（1-2分）
```

---

## 📞 サポート

問題が発生した場合：
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Community Forum](https://github.community/)

---

**現在の公開URL予定地**: `https://garyohosu.github.io/ai-devtools-compass/`

上記手順でGitHub Pagesを有効化してください！🚀
