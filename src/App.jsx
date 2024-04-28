import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../src/Components/Header'
import RouteComponent from './Allroutes/RouteComponent'
import axios from 'axios'

const App = () => {
  const  getUsers = ()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => console.log(res.data)) 
    .catch((err) => console.log(err))
  }
  return (
    <div>
      <Header />
      <RouteComponent />
      <button onClick={getUsers}>Get Users</button>

    </div>
  )
}

export default App