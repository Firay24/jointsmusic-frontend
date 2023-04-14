import React from 'react'
import Image from 'next/image'
import qrCode from 'src/assets/images/qr-code.png'

export default function TicketCard() {
  return (
    <div className='font-poppins text-white'>
      <p className='text-lg'>Ticket</p>
      <div className='mt-2 flex justify-center py-5 backdrop-blur-2xl bg-white rounded-xl bg-opacity-[0.20]'>
        <div className='mr-6 flex flex-col justify-between text-sm'>
            <div>
                <p className='font-semibold'>fisan.onodaconan@gmail.com</p>
                <p>VIP customer</p>
            </div>
            <div>
                <p>Computer Science Faculty of UGM</p>
                <p className='font-semibold'>08.00 AM</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Image src={qrCode} />
            <p>s2uehwka</p>
        </div>
      </div>
    </div>
  )
}
