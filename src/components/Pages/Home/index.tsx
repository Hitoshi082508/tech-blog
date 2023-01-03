import About from '@/components/Templates/About'
import Category from '@/components/Templates/Category'
import Member from '@/components/Templates/Member'
import Top from '@/components/Templates/Top'
import Voice from '@/components/Templates/Voice'
import { Contents } from '@/types/contents'

type HomePageProps = {
  data: Contents[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Top data={data} />
      <About />
      <Category />
      <Voice />
      <Member />
    </>
  )
}

export default HomePage
