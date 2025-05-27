import React from 'react'

function Header() {


  return (
    <header className='header'>
      <h4>Events</h4>
      <div className='d-flex'>
        <div className='header-icons'>
          <div className='header-icon'>
            <img src="src\assets\Images\notification-icon.svg" alt="notification icon" />
          </div>
          <div className='header-icon'>
            <img src="src\assets\Images\settings-icon.svg" alt="settings icon" />
          </div>
        </div>

        
        <div className='header-account-info'>
          <div className='user-picture'>
            <img src="src\assets\Images\Avatar1.svg" alt="user profile picture" />
          </div>
          <p className='user-name'>Jessica Eriksson</p>
          <p className='user-role'>Admin</p>
        </div>
      </div>
    </header>
  )
}

export default Header