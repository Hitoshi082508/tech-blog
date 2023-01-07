import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'
import HomePage from '@/components/Pages/Home'

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
  return <HomePage data={data} />
}

export default Home
