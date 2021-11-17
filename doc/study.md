# Next.js typescript化した状態でプロジェクト作成 起動まで
yarn create next-app { projectName } --example=with-typescript
yarn dev

# データを事前に決める必要がある場合に呼び出すメソッド
getServerSideProps

# ルーティング
デフォルトで使える
ファイルの構造によって自動的にpathが割り振り

## 固定のディレクトリPath
例
```
ディレクトリファイルpath
pages/my_new_page.tsx

URL
http://localhost:3000/my_new_page
```
 
## 動的に決める必要がある場合
例
```
ディレクトリファイルpath
pages/message/[message].tsx

URL
http://localhost:3000/message/hoge
http://localhost:3000/message/test
```

# API
Next.jsではapiを簡単に作成可能

例 API定義(pages/api/holidays.ts)
```
export default (req, res) => {
    res.statusCode = 200
    fetch("https://date.nager.at/api/v2/PublicHolidays/2020/JP")
        .then(r => r.json())
        .then(data => res.json(data))
}
```
例 画面呼び出し方
```
fetch("/api/holidays")
    .then(r => r.json())
    .then(data => {
        console.log(data)
    })
```

以下のケースで使用
- このようにAPIを利用してProxyすればドメインを経由するため、CORS回避
- またAPIキーを利用するような場合もクライアントに処理させず、API側にキーを隠蔽したい場合

※ CORSを回避する方法として[getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)
を利用する方法もできます

