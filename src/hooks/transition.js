import { useEffect, useState } from 'react'
export const useDynamicTransition = ({ increment, delay, length }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(storedIndex => {
        return (storedIndex + increment) % length
      })
    }, delay)

    return () => clearInterval(interval)
  }, [delay, increment])

  return index
}
