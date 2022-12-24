import Link from 'next/link'
import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'
import { NextPage } from 'next'

export const getStaticProps = async () => {
  const data: Content = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      data: data.contents,
    },
  }
}

type Props = {
  data: Contents[]
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <h1>トップページ</h1>
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <Link href={`/${data.id}`}>
              <div>{data.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
