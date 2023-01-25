import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SignUp } from './pages'
import Login from './pages/Login'

const App = () => {
  return (
    <>

    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

    </Routes>
    
    
    </>  
    
  )
}

export default App