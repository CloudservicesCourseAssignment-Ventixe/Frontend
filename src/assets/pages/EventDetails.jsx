import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function EventDetails() {

  const {id} = useParams()
  const [event, setEvent] = useState({})

  const getEvent = async () => {
    const res = await fetch(`https://eventprovider-ddh4hmd4fafhevcf.swedencentral-01.azurewebsites.net/api/Events/${id}`)

    if (res.ok) {
      const response = await res.json()
      setEvent(response)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])



  return (
    <div className='event-details-card'>
      <h1>{event.name}</h1>
      <p>{event.description}</p>
      <Link to={`/events/booking/${id}`}>Book tickets</Link>
    </div>
  )
}

export default EventDetails