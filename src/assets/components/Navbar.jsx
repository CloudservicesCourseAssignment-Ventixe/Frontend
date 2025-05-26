import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Events from '../pages/Events'

function Navbar() {


  return (
    <nav className='navbar'>
      <NavLink to={Events}>Events</NavLink>
      </nav>
  )
}

export default Navbar