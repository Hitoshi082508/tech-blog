import { client } from '@/lib/client'
import { Content, Contents, Params } from '@/types/contents'

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
    <main>
      <h1>{data.title}</h1>
      <div>{data.publishedAt}</div>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </main>
  )
}

export default Detail
