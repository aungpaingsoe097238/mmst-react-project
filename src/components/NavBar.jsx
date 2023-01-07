import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const user = useSelector((state)=>state.auth.user)
  const token = useSelector((state)=>state.auth.token)

  const handleLogout = () => {

  }


  return (
    <nav className='flex justify-between items-center bg-blue-50 px-10 py-1 shadow-sm'>
        <div>React</div>
        <div className='flex items-center gap-5'>
            <div>
                <p className='text-sm font-semibold'>{  user }</p>
                <small>{ user }</small>
            </div>
            <button className='bg-gray-400 px-3 py-1 rounded text-white cursor-pointer' onClick={handleLogout}>logout</button>
        </div>
    </nav>
  )
}

export default NavBar