import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function Login() {

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    
    const {setUser} = useContext(UserContext)
    const chancheHandle=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='m-8'>
      <h1>Login</h1>
      <input 
      type='text'
      placeholder='username'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
      type='password'
      placeholder='password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button  onClick={chancheHandle}>Submit</button>
    </div>
  )
}

export default Login
