import { styles } from './styles'
import StepCard from '@/components/Molecules/StepCard'
import { Steps } from '@/types/contents'

type StepProps = {
  title: string
  data?: Steps[]
}

const Step: React.FC<StepProps> = ({ title, data }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <h2 css={styles.title}>{title}</h2>
        </div>
        {data.map((item) => {
          return <StepCard key={item.id} step={item} />
        })}
      </div>
    </div>
  )
}

export default Step
