import {NavLink} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-center gap-4'>
        <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/">Home</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/Library">library</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/Entry">Entry</NavLink>
        {/* <NavLink className={(e) => (e.isActive ? "text-red-500" : "")} to="/Profile">profile</NavLink> */}
    </nav>
  )
}

export default Header