import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import AboutIconPath from '../../../../assets/images/about-icon.png'
import { AboutData } from '@/utils/about'

const About: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <NextImage
          src={AboutIconPath}
          width={40}
          height={40}
          alt="カバンのアイコン"
        />
        <h1 css={styles.title}>インターンって何？</h1>
        <h2 css={styles.subTitle}>What is an intern?</h2>
        <p css={styles.description}>
          エンジニアの説明を書きます。テキストをここに書きます。テキストをここに書きます。テキストをここに書きます。エンジニアの説明を書きます。テキストをここに書きます。テキストをここに書きます。テキストをここに書きます。エンジニアの説明を書きます。テキストをここに書きます。テキストをここに書きます。テキストをここに書きます。
        </p>
        <div css={styles.aboutCardContainer}>
          {AboutData.map((item) => {
            return (
              <NextImage
                key={item.id}
                src={item.imagePath}
                width={350}
                height={105}
                alt={item.alt}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
