import Image, { StaticImageData } from 'next/legacy/image'

type NextImageProps = {
  width: number
  height: number
  src: StaticImageData
  alt: string
}

const NextImage: React.FC<NextImageProps> = ({ height, width, src, alt }) => {
  return (
    <div style={{ position: 'relative', height: height, width: width }}>
      <Image src={src} alt={alt} layout="fill" />
    </div>
  )
}

export default NextImage
