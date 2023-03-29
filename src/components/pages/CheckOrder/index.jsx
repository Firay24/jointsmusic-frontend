import React from 'react'
import NavBar from '@/components/shared/NavBar'
import Image from 'next/image'
import loginImage from 'src/assets/images/login.png'
import FormLogin from './FormLogin'

export default function index() {
  return (
    <div className='text-white'>
      <NavBar />
      <div className='flex mt-20 justify-between'>
        <div className='mt-20 ml-10 w-1/2'>
          <FormLogin />
        </div>
        <div className=''>
          <Image className='w-[700px]' src={loginImage} alt='heroes image'/>
        </div>
      </div>
    </div>
  )
}
