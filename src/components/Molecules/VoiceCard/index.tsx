import NextImage from '@/components/Atoms/NextImage'
import { VoiceType } from '@/types'
import { changePosition, styles } from './styles'

type VoiceCardProps = {
  data: VoiceType
  current: number
}

const VoiceCard: React.FC<VoiceCardProps> = ({ data, current }) => {
  return (
    <div css={[styles.container, changePosition(current)]}>
      <NextImage
        src={data.thumbnailPath}
        alt={data.alt}
        width={320}
        height={180}
      />
      <div css={styles.textContainer}>
        <div css={styles.title}>{data.title}</div>
        <div css={styles.universityAndName}>{data.university_and_name}</div>
      </div>
    </div>
  )
}

export default VoiceCard
