import NextImage from '@/components/Atoms/NextImage'
import { Steps } from '@/types/contents'
import Link from 'next/link'
import { styles } from './styles'
type StepCardProps = {
  step: Steps
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.descriptionContainer}>
          <div css={styles.descriptionTitleContainer}>
            <h2 css={styles.stepNumber}>
              step
              <span css={styles.number}>{step.step_number}</span>
            </h2>
            <h2 css={styles.descriptionTitle}>{step.title}</h2>
          </div>
          <div css={styles.description}>{step.excerpt}</div>
          <Link href={step.id} css={styles.button}>
            <span>読む</span>
            <span>→</span>
          </Link>
        </div>
        <NextImage
          src={step.eyecatch.url}
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
