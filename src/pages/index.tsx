import { client } from '@/lib/client'
import { Content, Contents } from '@/types/contents'
import TopCard from '@/components/TopCard'
import { styles } from './styles'

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
    <div css={styles.container}>
      {data.map((data) => (
        <TopCard key={data.id} data={data} />
      ))}
    </div>
  )
}

export default Home
