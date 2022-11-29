import Link from 'next/link'
import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'

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

const Home: React.FC<Props> = ({ data }) => {
  return (
    <div>
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
