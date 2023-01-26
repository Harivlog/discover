import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SignUp } from './pages'
import Login from './pages/Login'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>

    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
       
    </Routes>
    
    
    </>  
    
  )
}

export default App