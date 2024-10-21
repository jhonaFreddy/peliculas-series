import React from 'react'

export default function NavBar() {
  return (
    <nav className='w-full h-14 bg-blue-600 flex justify-between items-center px-20'>
        <h2 className='text-white font-semibold text-3xl'>DEMO Streaming</h2>
        <div className='flex gap-10'>
          <button className='text-white text-md font-semibold'>Log in</button>
          <button className='bg-gray-700 text-white p-3 rounded-lg '>Start your free trial</button>
        </div>
      </nav>
  )
}
