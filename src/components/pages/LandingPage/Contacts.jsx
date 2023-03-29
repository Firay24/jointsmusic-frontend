import React from 'react'
import Image from 'next/image'
import Facebook from 'src/assets/images/icons/Facebook.png'
import Instagram from 'src/assets/images/icons/Instagram.png'
import Linkedln from 'src/assets/images/icons/LinkedIn.png'
import Twitter from 'src/assets/images/icons/Twitter.png'

export default function Contacts() {
  return (
    <div className='py-10 text-white flex flex-col items-center'>
        <div className='text-center'>
            <p className='mb-1'>contact@company.com</p>
            <p className='mb-1'>(123) 456 - 789</p>
            <p>58 Middle Point Rd,  San Francisco, 94124</p>
        </div>
        <div className='flex gap-x-5 mt-5'>
            <div className='bg-[#E7E6F2] h-8 w-8 flex justify-center items-center rounded'>
                <Image src={Facebook} alt='icon-facebook' className='w-2'/>
            </div>
            <div className='bg-[#E7E6F2] h-8 w-8 flex justify-center items-center rounded'>
                <Image src={Instagram} alt='icon-facebook' className='w-1/2'/>
            </div>
            <div className='bg-[#E7E6F2] h-8 w-8 flex justify-center items-center rounded'>
                <Image src={Linkedln} alt='icon-facebook' className='w-1/2'/>
            </div>
            <div className='bg-[#E7E6F2] h-8 w-8 flex justify-center items-center rounded'>
                <Image src={Twitter} alt='icon-facebook' className='w-1/2'/>
            </div>
        </div>
    </div>
  )
}
