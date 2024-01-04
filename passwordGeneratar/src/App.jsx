import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed]=useState(false)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [password, setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopdrstuvwxyz"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*(){}[]"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
      setPassword(pass)

  },[length,charAllowed,numberAllowed,setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <>
      <div className='h-full max-w-md mx-auto rounded-lg bg-gray-700 px-4 my-8 p-4 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden  mb-4'>
        <input 
        type='text'
        className=' outline-none px-4 py-1 w-full rounded-lg '
        placeholder='password'
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPassword}
         className='outline-none bg-blue-700  text-white'
        px-4 py-0 shrink-0>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={90}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
        
          onChange={(e)=>{
            setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='characterInput'
        
          onChange={(e)=>{
            setCharAllowed((prev)=>!prev)}}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      
      </div>
      <h1>Vite + React</h1>
      
      
    </>
  )
}

export default App
