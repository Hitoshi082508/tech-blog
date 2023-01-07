import NextImage from '@/components/Atoms/NextImage'
import Link from 'next/link'
import { styles } from './styles'
import DescriptionImagePath from '../../../../assets/images/description-image.png'
type StepCardProps = {
  stepNumber: number
  title: string
  excerpt: string
  imageUrl: string
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  excerpt,
  imageUrl,
}) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.descriptionContainer}>
          <div css={styles.descriptionTitleContainer}>
            <h2 css={styles.stepNumber}>step{stepNumber}</h2>
            <h2 css={styles.descriptionTitle}>{title}</h2>
          </div>
          <div css={styles.description}>{excerpt}</div>
          <div>~ここにボタンを作る~</div>
        </div>
        <NextImage
          src={imageUrl}
          width={296}
          height={192}
          spWidth={315}
          spHeight={140}
          alt="参考"
        />
      </div>
    </div>
  )
}

export default StepCard
