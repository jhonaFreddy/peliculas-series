import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className=''> 
      <div className='h-16 items-center flex text-2xl px-20 w-full text-white bg-gray-700'>
        Popular Titles
      </div>
    <div className='flex  gap-10 px-20 py-10'>
      
    <Link href="/series">
        <div className='flex flex-col items-center'>
        <div className='w-36 h-48 bg-gray-800 flex justify-center items-center text-white text-3xl cursor-pointer hover:bg-gray-700 bg-no-repeat bg-center bg-'
        style={{ backgroundImage: `url('placeholder.png')`, backgroundSize: '300px', }}>
          Series

        </div>
        <div>
          Popular Series
        </div>
        </div>
      </Link>
      <Link href="/movies">
        <div className='flex flex-col items-center'>
        <div className='w-36 h-48 bg-gray-800 flex justify-center items-center text-white text-3xl cursor-pointer hover:bg-gray-700 bg-no-repeat bg-center bg-'
        style={{ backgroundImage: `url('placeholder.png')`, backgroundSize: '300px',  }}>
          Movies

        </div>
        <div>
          Popular Movies
        </div>
        </div>
      </Link>
    </div>
    </div>
  );
}
