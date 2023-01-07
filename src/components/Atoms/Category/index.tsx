import { styles } from './styles'

type CategoryProps = {
  category: string
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div css={styles.container}>
      <span css={styles.hash}>#</span>
      <div css={styles.category}>{category}</div>
    </div>
  )
}

export default Category
