import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../src/Components/Header'
import RouteComponent from './Allroutes/RouteComponent'
import axios from 'axios'

const App = () => {
  return (
    <div>
      <Header />
      <RouteComponent />
    </div>
  )
}

export default App