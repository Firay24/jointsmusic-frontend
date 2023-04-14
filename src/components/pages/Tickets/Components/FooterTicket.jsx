import React from 'react'

export default function FooterTicket() {
  return (
    <div className='flex justify-between items-center'>
      <p className='text-xs italic mt-5 text-grey-primary'>*one account can only order one ticket</p>
      <button className='bg-red-primary mt-5 p-3 text-sm rounded text-white hover:bg-red-dark'>Cancel Order</button>
    </div>
  )
}
