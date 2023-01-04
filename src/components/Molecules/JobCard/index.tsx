import NextImage from '@/components/Atoms/NextImage'
import { JobType } from '@/types'
import Link from 'next/link'
import { styles } from './styles'

type JobCardProps = {
  data?: JobType
}

const JobCard: React.FC<JobCardProps> = ({ data }) => {
  return (
    <Link href={data.link}>
      <div css={styles.container}>
        <h3 css={styles.occupation}>{data.occupation}</h3>
        <NextImage
          src={data.iconPath}
          alt={`${data.occupation}のアイコン`}
          width={70}
          height={70}
          spWidth={50}
          spHeight={50}
        />
        <div css={styles.description}>{data.description}</div>
      </div>
    </Link>
  )
}

export default JobCard
