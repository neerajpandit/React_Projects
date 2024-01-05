import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId}=useParams()
  return (
    <div className='text-2xl bg-gray-700 text-white p-4'>
      user : {userId}
    </div>
  )
}

export default User
