import React from 'react'

export default function Product({ title, image, programType }) {
    return (
      <div className='w-40 h-80 rounded-3xl shadow-lg ease-in duration-300 hover:scale-105 '>
        <img src={image} alt={title} className='w-full h-auto object-cover rounded-t-3xl' />
        <div className='px-3'>
          <h2 className='font-bold text-sm py-2'>{title}</h2>
        </div>
      </div>
    );
  }
