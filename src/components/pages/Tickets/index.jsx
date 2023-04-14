import React from 'react'
import NavBar from '@/components/shared/NavBar'
import Step from './Step'
import Account from './Account'
import OrderSummary from './OrderSummary'

function Ticket() {
  return (
    <div>
        <NavBar/>
        <div className='mt-28 ml-10'>
          <Step/>
          <div className='flex mt-5 justify-between mr-10'>
            <div className='w-2/5'>
              <Account/>
            </div>
            <div className='w-2/5'>
              <OrderSummary/>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center border-t mx-10 mt-16 border-purple-primary'>
          <p className='text-xs italic mt-5 text-grey-primary'>*one account can only order one ticket</p>
          <button className='bg-red-primary mt-5 p-3 text-sm rounded text-white hover:bg-red-dark'>Cancel Order</button>
        </div>
    </div>
  )
}

export default Ticket