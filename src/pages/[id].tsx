import { client } from '@/lib/client'
import { Content, Contents, Params } from '@/types/contents'
import { NextSeo } from 'next-seo'

export const getStaticPaths = async () => {
  const data: Content = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content) => `/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: Params) => {
  const id = context.params.id
  const data: Content = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      data: data,
    },
  }
}

type Props = {
  data: Contents
}

const Detail: React.FC<Props> = ({ data }) => {
  const createMarkup = () => {
    return { __html: data.content }
  }

  return (
    <>
      <NextSeo
        title={`Intern Media | ${data.title}`}
        description={data.excerpt}
        openGraph={{
          url: `https://tech-blog1.vercel.app/${data.id}`,
          title: `Intern Media | ${data.title}`,
          description: data.excerpt,
          // TODO: OGP画像の型を作るか、動的に作るやり方を調べる
          images: [
            {
              url: 'https://tech-blog1.vercel.app/public/vercel.svg',
            },
          ],
        }}
      />
      <main>
        <h1>{data.title}</h1>
        <div>{data.publishedAt}</div>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </main>
    </>
  )
}

export default Detail
