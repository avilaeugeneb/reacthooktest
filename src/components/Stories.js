import React from 'react'

import Story from './Story'
import { STORIES_API } from '../constants/APIs'
import { useGet } from '../hooks/axios'

const Stories = () => {
  const stories = useGet(STORIES_API, [])

  return (
    <div>
      <h3>Stories</h3>
      {
        stories.map(story => (
          <Story key={story.id} story={story} />
        ))
      }
    </div>
  )
}

export default Stories
