import Image, { StaticImageData } from 'next/legacy/image'
import { displayNone, getHeightWidthStyle, styles } from './styles'

type NextImageProps = {
  width: number
  height: number
  spWidth?: number
  spHeight?: number
  spNone?: boolean
  src: string | StaticImageData
  alt: string
}

const NextImage: React.FC<NextImageProps> = ({
  width,
  height,
  spWidth,
  spHeight,
  spNone = false,
  src,
  alt,
}) => {
  return (
    <div
      css={[
        styles.container,
        displayNone(spNone),
        getHeightWidthStyle(width, height, spWidth, spHeight),
      ]}
    >
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default NextImage
