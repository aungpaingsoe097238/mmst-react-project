import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center bg-blue-50 px-10 py-1 shadow-sm'>
        <div>React</div>
        <div className='flex items-center gap-5'>
            <div>
                <p className='text-sm font-semibold'>Aung Paing Soe</p>
                <small>aps@gmail.com</small>
            </div>
            <button className='bg-gray-400 px-3 py-1 rounded text-white cursor-pointer'>logout</button>
        </div>
    </nav>
  )
}

export default NavBar