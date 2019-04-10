import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGet = (url, initialValue) => {
  const [result, setResult] = useState(initialValue)

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setResult(res.data)
      })
      .catch(() => setResult(initialValue))
  }, [])

  return result
}
