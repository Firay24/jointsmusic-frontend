import React from 'react'
import Image from 'next/image'
import iconCek from 'src/assets/images/icons/Check.png'

export default function Step() {
  return (
    <div className='flex font-poppins text-base'>
        <p className='text-white'>Account</p>
        <Image src={iconCek} />
        <p className='text-grey-primary'>Payment</p>
        <Image src={iconCek} />
        <p className='text-grey-primary'>Status</p>
    </div>
  )
}
