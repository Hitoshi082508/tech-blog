import Category from '@/components/Atoms/Category'
import { Contents } from '@/types/contents'
import { styles } from './styles'
import { cdate } from 'cdate'
import NextImage from '@/components/Atoms/NextImage'

type ArticleProps = {
  data: Contents
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  const createMarkup = () => {
    return { __html: data.content }
  }
  return (
    <article css={styles.container}>
      <h1 css={styles.title}>{data.title}</h1>
      <div css={styles.categoryContainer}>
        {data.category.map((item) => {
          return <Category key={item.id} category={item.name} />
        })}
      </div>
      <div css={styles.updatedAt}>
        更新日：<time>{cdate(data.updatedAt).format('YYYY/MM/DD')}</time>
      </div>
      <NextImage
        src={data.eyecatch.url}
        width={780}
        height={420}
        percentWidth={100}
        radius={15}
        alt={data.eyecatchAlt}
      />
      <div css={styles.article} dangerouslySetInnerHTML={createMarkup()} />
    </article>
  )
}

export default Article
