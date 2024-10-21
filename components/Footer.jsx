import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-800 text-white px-20'>
      <div className='flex flex-col gap-2 p-5 text-center'>
        <h3>Home | Terms and Condition | Privacy Policy | Collection Statement | Help | Manage Account</h3>
        <h3>Copyright © 2016 DEMO Streaming, All Rights Reserved</h3>
      </div>
      <div className='flex justify-between p-5 items-center'>
        <div className='flex gap-4 p-5 w-20 h-20'>
          <Image 
            src="/facebook-white.svg" 
            alt="Facebook White" 
            width={32} 
            height={26} 
          />
          <Image 
            src="/instagram-white.svg" 
            alt="Instagram White" 
            width={32} 
            height={32} 
          />
          <Image 
            src="/twitter-white.svg" 
            alt="Twitter White" 
            width={32} 
            height={32} 
          />
        </div>
        <div className='flex gap-4 h-10'>
          <Image 
            src="/app-store.svg" 
            alt="App Store" 
            width={128} 
            height={42} 
          />
          <Image 
            src="/play-store.svg" 
            alt="Play Store" 
            width={128} 
            height={42} 
          />
          <Image 
            src="/windows-store.svg" 
            alt="Windows Store" 
            width={120} 
            height={30} 
          />
        </div>
      </div>
    </footer>
  );
}
