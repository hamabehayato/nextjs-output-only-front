nextjs-output-only-front
Next.js アウトプットサンプル

TypeScript を使用

状態管理は context api を使用

url はこちら https://hamabehayato.github.io/nextjs-output-only-front/

目次
環境構築
アプリケーションの仕様

1. 環境構築
   1-1. ライブラリ インストール
   npm install

または

yarn
1-2. アプリケーション実行
npm run dev

または

yarn dev 2. アプリケーションの仕様
2-1. 仕様
Todo リスト
Todo 一覧表示
Todo 検索処理
Todo 新規登録処理
Todo 詳細表示
Todo 編集処理
Todo 削除処理
2-2. 構成技術
next: 14.0.2
react-dom: 18.2.0
react: 18.2.0
typescript: 5.2.2

個人の考えメモ
・現場の話を聞くに最近は、改修を外国の会社に頼むパターンも多いらしい。コミットメッセージは英語で書いておく。
　 └ コード内のコメントまで英語にするか考えたが、流石にメモを読むたびに翻訳する手間を考えるとなし。
・コンポーネント設計は、「複数ページで共通で使用するのか、引数を渡す数が 2 つ以下で共通化できないか」を基準に考えていく。
