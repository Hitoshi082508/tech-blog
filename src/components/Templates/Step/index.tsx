import { styles } from './styles'
import StepCard from '@/components/Molecules/StepCard'

type StepProps = {
  title: string
}

const Step: React.FC<StepProps> = ({ title }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <h2 css={styles.title}>{title}</h2>
        </div>
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
        <StepCard />
      </div>
    </div>
  )
}

export default Step
