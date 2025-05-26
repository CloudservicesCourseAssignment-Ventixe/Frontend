import React from 'react'
import { Link } from 'react-router-dom'

function EventItem({item}) {
  return (
<Link to={`/events/${item.id}`}>
        <div className='event-card'>
            <div>{item.name}</div>
        </div>
    </Link>
  )
}

export default EventItem