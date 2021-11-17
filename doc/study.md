# Next.js typescript化した状態でプロジェクト作成 起動まで
yarn create next-app { projectName } --example=with-typescript
yarn dev

# データを事前に決める必要がある場合に呼び出すメソッド
getServerSideProps

# ルーティング
デフォルトで使える
ファイルの構造によって自動的にpathが割り振り

例
```
ディレクトリpath
pages/my_new_page.tsx

URL
http://localhost:3000/my_new_page
```