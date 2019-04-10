import React, { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories';

const App = () => {
  const [ userQuery, setUserQuery ] = useState('')

  const updateUserQuery = e => {
    setUserQuery(e.target.value)
  }

  const searchQuery = () => {
    if (userQuery) window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && userQuery) {
      searchQuery()
    }
  }
  return (
    <div className='App'>
      <h1>Hello Eugene</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  )
}

export default App
