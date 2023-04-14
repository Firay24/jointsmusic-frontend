import React from 'react'
import NavBar from '@/components/shared/NavBar'
import Step from './Components/Step'
import Account from './Components/Account'
import OrderSummary from './Components/OrderSummary'
import FooterTicket from './Components/FooterTicket'

function AccountPage() {
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
        <div className='border-t mx-10 mt-16 border-purple-primary'>
          <FooterTicket />
        </div>
    </div>
  )
}

export default AccountPage