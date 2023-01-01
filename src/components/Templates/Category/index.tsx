import { styles } from './styles'
import CategoryIconPath from '../../../../assets/images/category-icon.png'
import NextImage from '@/components/Atoms/NextImage'
import { JobData } from '@/utils/job'
import JobCard from '@/components/Molecules/JobCard'

const Member: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage
            src={CategoryIconPath}
            width={40}
            height={40}
            alt="カテゴリーのアイコン"
          />
          <h2 css={styles.title}>Category</h2>
        </div>
        <p css={styles.subTitle}>なりたい像から自分にあった職を見つけよう</p>
        <div css={styles.jobCardContainer}>
          {JobData.map((item) => {
            return <JobCard key={item.id} data={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Member
