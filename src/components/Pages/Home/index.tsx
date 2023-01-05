import About from '@/components/Templates/About'
import Contact from '@/components/Templates/Contact'
import JobList from '@/components/Templates/JobList'
import Member from '@/components/Templates/Member'
import Top from '@/components/Templates/Top'
import Voice from '@/components/Templates/Voice'
import { theme } from '@/styles/theme'
import { Contents } from '@/types/contents'

type HomePageProps = {
  data: Contents[]
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Top data={data} />
      <About />
      <JobList
        title="Category"
        subTitle="なりたい像から自分に合った職を見つけよう"
        backgroundColor={theme.color.main}
        fontColor={theme.color.white}
      />
      <Voice />
      <Member />
      <Contact />
    </>
  )
}

export default HomePage
