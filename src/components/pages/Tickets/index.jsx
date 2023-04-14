import React from 'react'
import NavBar from '@/components/shared/NavBar'
import AccountPage from './AccountPage'
import PaymentPage from './PaymentPage'

function Ticket() {
  return (
    <div>
        <NavBar/>
        {/* <AccountPage /> */}
        <PaymentPage/>
    </div>
  )
}

export default Ticket