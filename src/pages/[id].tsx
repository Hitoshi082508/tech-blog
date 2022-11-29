import { client } from '@/lib/client'

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content) => `/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      data: data,
    },
  }
}

type Props = {
  data: any
}

const Detail: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <main>
      <h1>{data.title}</h1>
      <p>{data.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />
    </main>
  )
}

export default Detail
