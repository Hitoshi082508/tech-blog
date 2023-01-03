import { styles, getBackgroundColor, getFontColor } from './styles'
import { JobData } from '@/utils/job'
import JobCard from '@/components/Molecules/JobCard'
import { SlMagnifier } from 'react-icons/sl'

type JobListProps = {
  title: string
  subTitle: string
  backgroundColor: string
  fontColor: string
}

const JobList: React.FC<JobListProps> = ({
  title,
  subTitle,
  backgroundColor,
  fontColor,
}) => {
  return (
    <div css={[styles.base, getBackgroundColor(backgroundColor)]}>
      <div css={[styles.container, getFontColor(fontColor)]}>
        <div css={styles.titleContainer}>
          <SlMagnifier css={styles.icon} color={fontColor} />
          <h2 css={styles.title}>{title}</h2>
        </div>
        <p css={styles.subTitle}>{subTitle}</p>
        <div css={styles.jobCardContainer}>
          {JobData.map((item) => {
            return <JobCard key={item.id} data={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default JobList
