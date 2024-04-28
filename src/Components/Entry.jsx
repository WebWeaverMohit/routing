import React from 'react'
import { useNavigate } from 'react-router-dom'

const Entry = () => {
    const navigate = useNavigate()
    const SubmitHandler = () => {
        navigate('/Library')
    }
  return (
    <div>
        <form onSubmit={SubmitHandler} action="">
            <button className="px-3 py-2 bg-blue-500">Go to Library</button>
        </form>
    </div>
  )
}

export default Entry