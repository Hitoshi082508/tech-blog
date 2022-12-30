import TopCard from '@/components/Molecules/TopCard'
import { Contents } from '@/types/contents'
import { styles } from './styles'

type HomePageProps = {
  data: Contents[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div css={styles.container}>
      {data.map((item) => {
        return <TopCard key={item.id} data={item} />
      })}
    </div>
  )
}

export default HomePage
