import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Events from '../pages/Events'

function Navbar() {


  return (
    <nav className='navbar'>
      <NavLink to="/" className='ventixe-logo'>
        <img src="src\assets\Images\Ventixe-logo.svg" alt="Ventixe logo" />
        <p>Ventixe</p>
      </NavLink>

      <div className='navlinks'>
        <NavLink to="/dashboard" className="navlink">
          <img src="src\assets\Images\dashboard-icon.svg" alt="dashboard-icon" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/events" className="navlink">
          <img src="src\assets\Images\Events-icon.svg" alt="events-icon" />
          <p>Events</p>
        </NavLink>
      </div>

      
    </nav>
  )
}

export default Navbar