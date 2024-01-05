import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/neerajpandit')
    //     .then(response =>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center bg-gray-600 m-4 px-6 py-6 text-white rounded-2xl '>Github : {data.followers}
    <img className='rounded-lg' src={data.avatar_url} alt='Github'/>
    </div>
  )
}
export default Github



export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/neerajpandit')
  return response.json()
}