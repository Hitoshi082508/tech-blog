import { useEffect } from 'react'

type ArgumentTypes = {
  active: boolean
}

const useStopScrollingBackContent = ({ active }: ArgumentTypes) => {
  const stopScrollingBackContent = () => {
    if (active) {
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = 'auto'
      }
    }
  }

  useEffect(stopScrollingBackContent, [active])
}

export default useStopScrollingBackContent
