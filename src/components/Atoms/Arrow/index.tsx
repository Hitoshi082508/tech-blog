import { styles, arrowPosition } from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { theme } from '@/styles/theme'

type ArrowProps = {
  position: 'left' | 'right'
  top: number
  spTop?: number
  onClick: () => void
}

const Arrow: React.FC<ArrowProps> = ({ position, top, spTop, onClick }) => {
  return (
    <>
      {position === 'left' ? (
        <button
          onClick={onClick}
          css={[styles.container, arrowPosition(position, top, spTop)]}
        >
          <FaArrowLeft css={styles.icon} color={theme.color.black} />
        </button>
      ) : (
        <button
          onClick={onClick}
          css={[styles.container, arrowPosition(position, top, spTop)]}
        >
          <FaArrowRight css={styles.icon} color={theme.color.black} />
        </button>
      )}
    </>
  )
}

export default Arrow
