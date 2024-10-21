import React from 'react'

export default function NavBar() {
  return (
    <nav className='w-full h-14 bg-blue-600 flex justify-between items-center px-5 py-10 md:px-20'>
        <h2 className='text-white font-semibold text-lg md:text-3xl'>DEMO Streaming</h2>
        <div className='flex gap-5 md:gap-10 p-5 items-center'>
          <button className='text-white text-sm md:text-lg  font-semibold'>Log in</button>
          <button className='bg-gray-700 text-white p-2  md:p-3 rounded-lg '>Start your free trial</button>
        </div>
      </nav>
  )
}
