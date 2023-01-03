import NextImage from '@/components/Atoms/NextImage'
import { styles } from './styles'
import ArrowsImagePath from '../../../../assets/images/arrows.png'
import { StaticImageData } from 'next/legacy/image'

type JobDescriptionProps = {
  iconPath: StaticImageData
  iconAlt: string
  title: string
  descriptionTitle: string
  description: string
  thumbnailPath: StaticImageData
  thumbnailAlt: string
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  iconPath,
  iconAlt,
  title,
  descriptionTitle,
  description,
  thumbnailPath,
  thumbnailAlt,
}) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage src={iconPath} width={70} height={70} alt={iconAlt} />
          <h1 css={styles.title}>{title}</h1>
        </div>
        <div css={styles.descriptionContainer}>
          <div>
            <h2 css={styles.descriptionTitle}>{descriptionTitle}</h2>
            <div css={styles.description}>{description}</div>
          </div>
          <NextImage
            src={thumbnailPath}
            width={360}
            height={240}
            spWidth={305}
            spHeight={205}
            alt={thumbnailAlt}
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
