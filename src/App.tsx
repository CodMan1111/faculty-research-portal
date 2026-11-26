import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ForgotPassword from './forgot-password'
import Login from './login'
import CreateAccount from './create-account'
import UpdatePassword from './update-password'
import {Routes, Route} from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  return (
  <Routes> 
    <Route path="/" element={<Login/>}/>
    <Route path="/login" element={<Login/>}> </Route> 
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/create-account" element={<CreateAccount/>}/>
    <Route path="/update-password" element={<UpdatePassword />} />
  </Routes>
  )
  /*switch (window.location.pathname){
    case '/forgot-password':
      return <ForgotPassword/>
    default: 
    return <Login></Login>
  } */
}

export default App