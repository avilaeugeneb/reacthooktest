import React, { useState } from 'react'
import Joke from './Joke'
import Stories from './Stories'
import Tasks from './Tasks'
import Gallery from './Gallery'
import Matrix from './Matrix'

const App = () => {
  const [ userQuery, setUserQuery ] = useState('')
  const [ showGallery, setShowGallery ] = useState(true)

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

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
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
      <Tasks />
      <hr />
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          { showGallery ? 'Hide' : 'Show' } Gallery
        </button>
      </div>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  )
}

export default App
