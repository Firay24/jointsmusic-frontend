import React from 'react'
import Card from './Card'

export default function OrderSummary() {
  return (
    <div className='font-poppins text-white'>
        <p className='mb-5'>Order Summary</p>
        <Card/>
        <div className='mt-2 text-sm'>
            <p>Premium Reguler Concert Ticket</p>
            <p className='font-bold'>$245</p>
        </div>
        <div className='font-semibold mt-2 text-sm flex justify-between w-3/4'>
            <p>Total</p>
            <p>$245</p>
        </div>
    </div>
  )
}
