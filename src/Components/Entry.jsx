import React from 'react'
import axios from '../Helpers/axios'
import { useNavigate } from 'react-router-dom'

const Entry = () => {
  const navigate = useNavigate()
  const SubmitHandler = () => {
    navigate('/Library')
  }
  const  getPosts = ()=> {
    axios.get('/posts')
    .then((res) => console.log(res.data)) 
    .catch((err) => console.log(err))
  }
  return (
    <div>
      <button className='px-3 py-3 bg-blue-500 rounded-lg' onClick={getPosts}>Get Posts</button><br /><br />
      <form onSubmit={SubmitHandler} action="">
        <button className="px-3 py-2 bg-blue-500">Go to Library</button>
      </form>
    </div>
  )
}

export default Entry