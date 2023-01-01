import Image, { StaticImageData } from 'next/legacy/image'
import { getHeightWidthStyle, styles } from './styles'

type NextImageProps = {
  width: number
  height: number
  spWidth?: number
  spHeight?: number
  src: StaticImageData
  alt: string
}

const NextImage: React.FC<NextImageProps> = ({
  width,
  height,
  spWidth,
  spHeight,
  src,
  alt,
}) => {
  return (
    <div
      css={[
        styles.container,
        getHeightWidthStyle(width, height, spWidth, spHeight),
      ]}
    >
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default NextImage
