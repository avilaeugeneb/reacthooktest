import React from 'react'
import moment from 'moment'

const Story = ({ story }) => {
  const { by, time, title, url } = story
  const dateTime = time * 1000
  return (
    <div>
      <a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
      <div>{by} - {moment(dateTime).format('LLL')}</div>
    </div>
  )
}

export default Story
