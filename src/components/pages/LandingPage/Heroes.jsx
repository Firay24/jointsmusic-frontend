import React from 'react'
import Image from 'next/image'
import heroImage from 'src/assets/images/heroes.png'
import iconCalendar from 'src/assets/images/icons/calendar.png'

export default function heroesImage() {
  return (
    <div className='flex'>
      <div className='mt-20 ml-10'>
        <h1 className='text-white text-5xl font-semibold font-poppins leading-[4rem]'>Donec et odio pellentesqu diam.</h1>
        <p className='mt-5 text-xl text-purple-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis.</p>
        <div className='mt-5 flex gap-2 items-center'>
          <Image src={iconCalendar} className="w-8" />
          <p className='text-white font-poppins font-semibold text-xl'>23 MAY 2023</p>
        </div>
      </div>
      <div className=''>
        <Image className='w-[900px]' src={heroImage} alt='heroes image'/>
      </div>
    </div>
  )
}

