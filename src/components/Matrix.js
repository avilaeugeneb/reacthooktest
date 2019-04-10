import React, { useState } from 'react'
import MATRIX_FRAMES from '../data/matrix'
import { useDynamicTransition } from '../hooks/transition'

const minimumDelay = 100
const minimumIncrement = 1

const Matrix = () => {
  const [delay, setDelay] = useState(500)
  const [increment, setIncrement] = useState(5)

  const index = useDynamicTransition({
    delay,
    increment,
    length: MATRIX_FRAMES.length
  })

  const updateDelay = e => {
    const delay = parseInt(e.target.value)
    setDelay(delay < minimumDelay ? minimumDelay : delay)
  }

  const updateIncrement = e => {
    const increment = parseInt(e.target.value)
    setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
  }
  return (
    <div className='Matrix'>
      <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
      <div className='multiform'>
        <div>
          Frame transition delay (seconds):
          <input type='number' onChange={updateDelay} />
        </div>
        <div>
          Frame increment:
          <input type='number' onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}

export default Matrix
