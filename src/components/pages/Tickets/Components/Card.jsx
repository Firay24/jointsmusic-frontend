import React from 'react'

export default function Card() {
  return (
    <div className='text-white py-8 items-center justify-between px-14 flex bg-white backdrop-blur-2xl rounded-xl bg-opacity-[0.20] w-3/4'>
      <div className=''>
        <p className='font-medium'>Premium</p>
        <p className='text-xs'>Reguler</p>
      </div>
      <p className='text-3xl font-bold'>$245</p>
    </div>
  )
}
