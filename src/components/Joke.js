import React from 'react'

import { JOKE_API } from '../constants/APIs'
import { useGet } from '../hooks/axios'

const Joke = () => {
  const { setup, punchline } = useGet(JOKE_API, {})
  return (
    <div>
      <h3>Joke</h3>
      <p>{setup}</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke
