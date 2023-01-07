import Image, { StaticImageData } from 'next/legacy/image'
import {
  displayNone,
  getHeightWidthStyle,
  styles,
  borderRadius,
  getPercentWidth,
} from './styles'

type NextImageProps = {
  width: number
  height: number
  spWidth?: number
  spHeight?: number
  percentWidth?: number
  spNone?: boolean
  radius?: number
  src: string | StaticImageData
  alt: string
}

const NextImage: React.FC<NextImageProps> = ({
  width,
  height,
  spWidth,
  percentWidth,
  spHeight,
  spNone = false,
  radius,
  src,
  alt,
}) => {
  return (
    <div
      css={[
        styles.container,
        displayNone(spNone),
        getHeightWidthStyle(width, height, spWidth, spHeight),
        percentWidth && getPercentWidth(percentWidth),
        borderRadius(radius),
      ]}
    >
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default NextImage
