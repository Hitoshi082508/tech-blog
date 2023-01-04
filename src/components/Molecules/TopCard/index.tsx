import { Contents } from '@/types/contents'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { changePosition, styles } from './styles'

type TopCardProps = {
  data: Contents
  current: number
}

const TopCard: React.FC<TopCardProps> = ({ data, current }) => {
  return (
    <Link href={data.id} css={[styles.container, changePosition(current)]}>
      {/* alt属性に何を入れるか検討する */}
      <div css={styles.eyecatchContainer}>
        <Image
          src={data.eyecatch.url}
          layout="fill"
          alt="アイキャッチ画像"
          css={styles.eyecatch}
        />
      </div>
      <h2 css={styles.title}>{data.title}</h2>
      <div css={styles.categoryContainer}>
        {data.category.map((category, index) => {
          return (
            <p key={index} css={styles.category}>
              {`#${category.name}`}
            </p>
          )
        })}
      </div>
    </Link>
  )
}

export default TopCard
