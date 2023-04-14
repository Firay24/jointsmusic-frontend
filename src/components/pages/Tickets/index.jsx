import React from 'react'
import NavBar from '@/components/shared/NavBar'
import AccountPage from './AccountPage'
import PaymentPage from './PaymentPage'
import StatusPage from './StatusPage'

function Ticket() {
  return (
    <div>
        <NavBar/>
        {/* <AccountPage /> */}
        {/* <PaymentPage/> */}
        <StatusPage/>
    </div>
  )
}

export default Ticket