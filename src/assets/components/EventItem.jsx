import React from 'react'
import { Link } from 'react-router-dom'

function EventItem({item}) {
  return (
    
    
      
      <Link to={`/events/${item.id}`}>
        <div className='event-card'>
          <div className='event-picture'>
            <img src="src\assets\Images\consert-picture.jpg" alt="event picture" />
          </div>
          <p className='event-datetime'>June 5, 2029 - 3.00 PM</p>
          <p className='event-name'>{item.name}</p>
          <div className='event-location'>
            <div className='map-pin'>
              <img src="src\assets\Images\MapPin.svg" alt="" />
            </div>
            <p className='event-location-text'>Rocky Ridge Exhibition Hall, Denver, CO</p>
          </div>
        </div>
      </Link>
  
   







   
  )
}

export default EventItem