import React from 'react'
import Payment from './Components/Payment'
import FooterTicket from './Components/FooterTicket'
import Step from './Components/Step'
import OrderSummary from './Components/OrderSummary'

export default function PaymentPage() {
  return (
    <div>
        <div className='mt-28 ml-10'>
          <Step/>
          <div className='flex mt-5 justify-between mr-10'>
            <div className='w-2/5'>
              <Payment/>
            </div>
            <div className='w-2/5'>
              <OrderSummary/>
            </div>
          </div>
        </div>
        <div className='border-t mx-10 mt-16 border-purple-primary'>
          <FooterTicket/>
        </div>
    </div>
  )
}
