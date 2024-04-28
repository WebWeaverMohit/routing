import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Library = () => {
  return (
    <div>
      <ul>
        <li><Link to='/Library/1'>Book 1</Link></li>
        <li><Link to='/Library/2'>Book 2</Link></li>
        <li><Link to='/Library/3'>Book 3</Link></li>        
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

export default Library