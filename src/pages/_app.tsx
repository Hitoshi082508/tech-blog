import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// TODO: pagePropsのanyをなくす
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo
        defaultTitle="Tech Blog"
        description="デフォルトの説明"
        openGraph={{
          type: 'website',
          title: 'Tech Blog',
          description:
            '初心者の方から、中級者、上級者の方までが楽しめる技術ブログです。',
          site_name: 'Tech Blog',
          url: 'https://tech-blog1.vercel.app/',
          images: [
            {
              url: 'https://tech-blog1.vercel.app/public/vercel.svg',
              width: 800,
              height: 600,
              alt: 'Tech Blogのロゴ',
              type: 'image/svg',
            },
          ],
        }}
        // Twitterアカウントを作ってから設定する
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
