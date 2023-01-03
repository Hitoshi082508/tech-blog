import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import EngineerIconPath from '../../../../assets/images/engineer-icon.png'
import DescriptionImagePath from '../../../../assets/images/description-image.png'
import ArrowsImagePath from '../../../../assets/images/arrows.png'

const JobDescription: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage
            src={EngineerIconPath}
            width={70}
            height={70}
            alt="エンジニアのアイコン"
          />
          <h1 css={styles.title}>エンジニアになりたい</h1>
        </div>
        <div css={styles.descriptionContainer}>
          <div>
            <h2 css={styles.descriptionTitle}>エンジニアとは？</h2>
            <div css={styles.description}>
              そもそもエンジニアとは、「工学（エンジニアリング）に関する専門的な知識やスキルを持った人材」を指す言葉で、日本では「技術者」とも呼ばれます。IT技術が進んだ現代では、インターネット関係のITの専門知識やスキルを備えた「ITエンジニア」が活躍しています。
              現代社会を陰で支えている縁の下の力持ち、それがエンジニアです。エンジニアはIT業界を中心に不足しており、今後も社会で必要とされる職業であることは間違いないでしょう。
            </div>
          </div>
          <NextImage
            src={DescriptionImagePath}
            width={360}
            height={240}
            spWidth={305}
            spHeight={205}
            alt="エンジニアの説明"
          />
        </div>
        <div css={styles.arrowContainer}>
          <NextImage src={ArrowsImagePath} width={40} height={85} alt="矢印" />
          <h2 css={styles.arrowText}>職種とロードマップを見てみよう！</h2>
        </div>
      </div>
    </div>
  )
}

export default JobDescription
