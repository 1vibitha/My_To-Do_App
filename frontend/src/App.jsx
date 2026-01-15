import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home.jsx'
import Create from './Create.jsx'


const App = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element= {<Create />} />
        <Route  path='/home' element= {<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
