import NextImage from '@/components/Atoms/NextImage'
import { Contents } from '@/types/contents'
import Link from 'next/link'
import { styles } from './styles'

type StepCardProps = {
  data?: Contents
}

const StepCard: React.FC<StepCardProps> = ({ data }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>Cardだよ〜</div>
    </div>
  )
}

export default StepCard
