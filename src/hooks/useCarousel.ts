import { useCallback, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useSwipeable } from 'react-swipeable'

export const useCarousel = (length: number) => {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    if (current >= length - 1 && isMobile) {
      setCurrent(0)
      return
    }
    setCurrent((n) => n + 1)
  }, [current])

  const prev = useCallback(() => {
    if (current === 0) {
      return
    }
    setCurrent((n) => n - 1)
  }, [current])

  const handlers = useSwipeable({
    onSwiped: (event) => {
      if (event.dir == 'Left') {
        next()
      }
      if (event.dir == 'Right') {
        prev()
      }
    },
    trackMouse: true,
  })

  return {
    current,
    next,
    prev,
    handlers,
  }
}
