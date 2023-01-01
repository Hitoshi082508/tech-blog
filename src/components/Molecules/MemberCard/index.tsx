import { MemberType } from '@/types'
import { styles } from './styles'
import NextImage from '@/components/Atoms/NextImage'

type MemberCardProps = {
  data?: MemberType
}

const MemberCard: React.FC<MemberCardProps> = ({ data }) => {
  return (
    <div css={styles.container}>
      <div css={styles.topContainer}>
        <NextImage
          height={60}
          width={60}
          src={data.eyecatchPath}
          alt={data.alt}
        />
        <div css={styles.nameGradeContainer}>
          <div css={styles.name}>{data.name}</div>
          <div css={styles.gradeAndOccupation}>{data.grade_and_occupation}</div>
        </div>
      </div>
      <div css={styles.introduction}>{data.introduction}</div>
    </div>
  )
}

export default MemberCard
