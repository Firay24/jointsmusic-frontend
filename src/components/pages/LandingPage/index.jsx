import React from 'react'

import NavBar from '@/components/shared/NavBar'
import Heroes from './Heroes'
import Partners from './Partners'
import About from './About'
import Guests from './Guests'
import TicketConcert from './TicketConcert'
import Contacts from './Contacts'

export default function LandingPage() {
  return (
    <div className='relative'>
        <NavBar />
        <Heroes />
        <Partners />
        <About />
        <Guests />
        <TicketConcert />
        <Contacts />
    </div>
  )
}
