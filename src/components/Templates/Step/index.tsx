import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import ArrowsImagePath from '../../../../assets/images/arrows.png'
import { StaticImageData } from 'next/legacy/image'
import StepCard from '@/components/Molecules/StepCard'

type StepProps = {
  title: string
}

const Step: React.FC<StepProps> = ({ title }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>{title}</div>
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
