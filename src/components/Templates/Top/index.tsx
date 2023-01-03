import Arrow from '@/components/Atoms/Arrow'
import TopCard from '@/components/Molecules/TopCard'
import { Contents } from '@/types/contents'
import { useState } from 'react'
import { styles } from './styles'

type TopProps = {
  data: Contents[]
}

const Top: React.FC<TopProps> = ({ data }) => {
  const [currentItem, setCurrentItem] = useState(0)
  const handlePrev = () => setCurrentItem((n) => n - 1)
  const handleNext = () => setCurrentItem((n) => n + 1)
  return (
    <div css={styles.container}>
      <div css={styles.topCardContainer}>
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
        {data.map((item) => {
          return <TopCard key={item.id} data={item} currentItem={currentItem} />
        })}
      </div>
      <Arrow
        position="left"
        top={140}
        spTop={100}
        left={-50}
        onClick={handlePrev}
      />
      <Arrow
        position="right"
        top={140}
        spTop={100}
        right={-50}
        onClick={handleNext}
      />
    </div>
  )
}

export default Top
