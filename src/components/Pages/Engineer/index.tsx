import JobDescription from '@/components/Templates/JobDescription'
import JobList from '@/components/Templates/JobList'
import { theme } from '@/styles/theme'

const EngineerPage: React.FC = () => {
  return (
    <div>
      <JobDescription />
      <JobList
        title="Detailed Job"
        subTitle="エンジニアの中でもこんな種類があるよ"
        backgroundColor={theme.color.main}
        fontColor={theme.color.white}
      />
      <JobList
        title="Other Job"
        subTitle="他にも自分に合った職業を見つけよう"
        backgroundColor={theme.color.lightMain}
        fontColor={theme.color.black}
      />
    </div>
  )
}

export default EngineerPage
