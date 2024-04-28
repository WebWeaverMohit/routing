import React from 'react'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom'

const Details = () => {
   const {pathname} = useLocation() 
    const {id} = useParams()
    const navigate = useNavigate()
  return (
    <div>
        <Link to={`${pathname}/profile`}>Profile</Link>
        <div>Details</div>
        <h1>Book id : {id}</h1>
        <button className='px-2 py-2 bg-red-500' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Details