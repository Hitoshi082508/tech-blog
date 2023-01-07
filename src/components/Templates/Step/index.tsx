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
        {data.map((item, key) => {
          return (
            <StepCard
              key={key}
              stepNumber={item.step_number}
              title={item.title}
              excerpt={item.excerpt}
              imageUrl={item.eyecatch.url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Step
