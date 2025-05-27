import React from 'react'
// import { useLocation } from 'react-router-dom';

function Header() {

  //   const location = useLocation();

  //  const getPageTitle = () => {
  //   const path = location.pathname.toLowerCase();

  //   if (path.startsWith('/events/') && path !== '/events') return 'Event Details';
  //   if (path === '/events') return 'Events';
  //   if (path === '/dashboard') return 'Dashboard';
  //   if (path === '/signin') return 'Sign In';
  //   if (path === '/signup') return 'Sign Up';

  //   return '';
  // };

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