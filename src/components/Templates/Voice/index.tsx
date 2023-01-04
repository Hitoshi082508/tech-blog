import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import VoiceIconPath from '../../../../assets/images/voice-icon.png'
import { VoiceData } from '@/utils/voice'
import VoiceCard from '@/components/Molecules/VoiceCard'
import Arrow from '@/components/Atoms/Arrow'
import { useCarousel } from '@/hooks/useCarousel'

const Voice: React.FC = () => {
  const length = VoiceData.length
  const { current, next, prev, handlers } = useCarousel(length)
  return (
    <div css={styles.container} {...handlers}>
      <div css={styles.titleContainer}>
        <NextImage
          src={VoiceIconPath}
          width={40}
          height={40}
          alt="メガホンのアイコン"
        />
        <h2 css={styles.title}>Voice</h2>
      </div>
      <div css={styles.subTitle}>実際にインターンをしている先輩の声</div>
      <div css={styles.voiceCardContainer}>
        {VoiceData.map((item) => {
          return <VoiceCard key={item.id} data={item} current={current} />
        })}
      </div>
      <button css={styles.button}>先輩の声一覧を見る</button>
      {current !== 0 && (
        <Arrow position="left" top={250} spTop={180} onClick={prev} />
      )}
      <Arrow position="right" top={250} spTop={180} onClick={next} />
    </div>
  )
}

export default Voice
