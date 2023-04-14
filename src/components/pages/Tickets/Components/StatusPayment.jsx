import React from 'react'
import Image from 'next/image'
import Bullet from 'src/assets/images/icons/iconBullet.png'
import MiniBullet from 'src/assets/images/icons/bulletMini.png'

export default function StatusPayment() {
  return (
    <div className='relative font-poppins'>
      <p className='text-white mb-5 text-lg'>Status</p>
      <div className='border-l border-hei'>
        <div className='flex items-center pl-5'>
            <div className='absolute -left-1.5'>
                <Image src={Bullet} />
            </div>
            <div className='text-white'>
                <p className='font-medium mb-1'>Payment</p>
                <p className='text-sm font-light italic'>Waiting for payment by the customer</p>
            </div>
        </div>
        <div className='flex items-center pl-5 mt-2'>
            <div className='absolute -left-1'>
                <Image src={MiniBullet} />
            </div>
            <div className=''>
                <p className='font-medium mb-1 text-purple-primary'>Process</p>
                <p className='text-sm font-light text-grey-primary italic'>Waiting for confirmation</p>
            </div>
        </div>
        <div className='flex items-center pl-5 mt-2'>
            <div className='absolute -left-1'>
                <Image src={MiniBullet} />
            </div>
            <div className=''>
                <p className='font-medium mb-1 text-purple-primary'>Success</p>
                <p className='text-sm italic text-grey-primary font-light'>Save your ticket token</p>
            </div>
        </div>
      </div>
    </div>
  )
}
