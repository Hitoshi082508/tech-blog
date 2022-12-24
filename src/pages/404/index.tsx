import { NextPage } from 'next'
import { styles } from './styles'

const Custom404: NextPage = () => {
  return (
    <div css={styles.container}>
      <h1>404ページ</h1>
    </div>
  )
}

export default Custom404
