import TopCard from '@/components/Molecules/TopCard'
import About from '@/components/Templates/About'
import Category from '@/components/Templates/Category'
import Member from '@/components/Templates/Member'
import { Contents } from '@/types/contents'
import { styles } from './styles'

type HomePageProps = {
  data: Contents[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <div css={styles.container}>
        {data.map((item) => {
          return <TopCard key={item.id} data={item} />
        })}
      </div>
      <About />
      <Category />
      <Member />
    </>
  )
}

export default HomePage
