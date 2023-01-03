import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import VoiceIconPath from '../../../../assets/images/voice-icon.png'
import { VoiceData } from '@/utils/voice'
import VoiceCard from '@/components/Molecules/VoiceCard'
import { useState } from 'react'
import Arrow from '@/components/Atoms/Arrow'

const Voice: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0)
  const handlePrev = () => setCurrentItem((n) => n - 1)
  const handleNext = () => setCurrentItem((n) => n + 1)
  return (
    <div css={styles.container}>
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
          return (
            <VoiceCard key={item.id} data={item} currentItem={currentItem} />
          )
        })}
        {VoiceData.map((item) => {
          return (
            <VoiceCard key={item.id} data={item} currentItem={currentItem} />
          )
        })}
        {VoiceData.map((item) => {
          return (
            <VoiceCard key={item.id} data={item} currentItem={currentItem} />
          )
        })}
      </div>
      <button css={styles.button}>先輩の声一覧を見る</button>
      <Arrow position="left" top={250} spTop={180} onClick={handlePrev} />
      <Arrow position="right" top={250} spTop={180} onClick={handleNext} />
    </div>
  )
}

export default Voice
