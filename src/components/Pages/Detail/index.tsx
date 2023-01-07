import Article from '@/components/Templates/Article'
import Sidebar from '@/components/Templates/Sidebar'
import { Contents } from '@/types/contents'
import { styles } from './styles'

type DetailProps = {
  data: Contents
}

const DetailPage: React.FC<DetailProps> = ({ data }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <Article data={data} />
        <Sidebar />
      </div>
    </div>
  )
}

export default DetailPage
