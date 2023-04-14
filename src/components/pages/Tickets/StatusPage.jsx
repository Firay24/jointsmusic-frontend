import React from 'react'
import Step from './Components/Step'
import OrderSummary from './Components/OrderSummary'
import StatusPayment from './Components/StatusPayment'
import TicketCard from './Components/TicketCard'

export default function StatusPage() {
  return (
    <div>
      <div className='mt-28 ml-10'>
          <Step/>
          <div className='flex mt-5 justify-between mr-10'>
            <div className='w-2/5'>
              <StatusPayment/>
            </div>
            <div className='w-2/5'>
              {/* <OrderSummary/> */}
              <TicketCard/>
            </div>
          </div>
    </div>
    </div>
  )
}
