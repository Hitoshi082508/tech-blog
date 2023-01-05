import Image from 'next/legacy/image'
import { styles } from './styles'
import BackgroundImagePathPC from '../../../../assets/images/contact-background-pc.png'
import BackgroundImagePathSP from '../../../../assets/images/contact-background-sp.png'
import NextImage from '@/components/Atoms/NextImage'
import ManImagePath from '../../../../assets/images/contact-man.png'
import { isMobile } from 'react-device-detect'

const Contact: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <Image
          src={isMobile ? BackgroundImagePathSP : BackgroundImagePathPC}
          layout="fill"
          objectFit="cover"
          css={styles.background}
        />
        <NextImage
          src={ManImagePath}
          width={224}
          height={284}
          spNone
          alt="パソコンを打つ男の子"
        />
        <div css={styles.textContainer}>
          <h2 css={styles.title}>オンライン個別面談受付中</h2>
          <p css={styles.subTitle}>
            あなたの疑問や不安に丁寧にお応えします。ぜひお気軽にお申し込みください。
          </p>
          <button css={styles.button}>お申し込みはこちら</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
