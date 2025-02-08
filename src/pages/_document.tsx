import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 移除旧的 Google Analytics 代码 */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 