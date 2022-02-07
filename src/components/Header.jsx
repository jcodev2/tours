/* **************** Imports **************** */
import React from 'react'
import logo from '../public/favicon.svg'
import Navigation from './Navigation'

/* **************** Variables **************** */

/* **************** Functions **************** */
const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <Navigation />
      </div>
    </header>
  )
}

/* **************** Code Execution **************** */
export default Header
