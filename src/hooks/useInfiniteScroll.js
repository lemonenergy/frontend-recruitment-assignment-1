import { useEffect, useRef } from 'react'

const edgeOffset = 800

const useInfiniteScroll = (elRef, action) => {
  const debounce = useRef(false)

  useEffect(() => {
    const el = elRef.current

    const handleScroll = () => {
      if (el.scrollTop + el.offsetHeight < el.scrollHeight - edgeOffset) return
      if (!debounce.current) {
        window.requestAnimationFrame(async () => {
          debounce.current = true
          await action()
          debounce.current = false
        })
      }
    }

    el.addEventListener('scroll', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
    }
  }, [elRef, action, debounce])
}

export default useInfiniteScroll
