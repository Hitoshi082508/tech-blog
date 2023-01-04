import Arrow from '@/components/Atoms/Arrow'
import TopCard from '@/components/Molecules/TopCard'
import { Contents } from '@/types/contents'
import { styles } from './styles'
import { useCarousel } from '@/hooks/useCarousel'

type TopProps = {
  data: Contents[]
}

const Top: React.FC<TopProps> = ({ data }) => {
  const length = data.length
  const { current, next, prev, handlers } = useCarousel(length)
  return (
    <div css={styles.container} {...handlers}>
      <div css={styles.topCardContainer}>
        {data.map((item) => {
          return <TopCard key={item.id} data={item} current={current} />
        })}
      </div>
      {current !== 0 && (
        <Arrow position="left" top={140} spTop={100} onClick={prev} />
      )}
      <Arrow position="right" top={140} spTop={100} onClick={next} />
    </div>
  )
}

export default Top
