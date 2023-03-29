import React from 'react'

export default function TicketConcert() {
  return (
    <div className="flex flex-col justify-center items-center font-poppins bg-[url('https://images.pexels.com/photos/3101522/pexels-photo-3101522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-screen w-full text-white">
      <div className='font-semibold text-3xl mb-8'>Tickets</div>
      <div className='w-3/4 h-1/2 flex gap-x-10'>
        <div className='backdrop-blur-2xl rounded-xl bg-opacity-[0.20] h-full flex flex-col justify-center items-center'>
          <div>
            <p className='text-xl font-semibold text-center'>Premium</p>
            <p className='text-base font-light text-center'>101 tickets</p>
          </div>
          <div className='mt-5 mb-5'>
            <p className='text-4xl font-bold text-center'>$234</p>
          </div>
          <div className='mb-5'>
            <p className='text-xs px-2 font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</p>
          </div>
          <div className='w-1/2'>
            <button className='py-2 w-full px-5 rounded-lg bg-purple-primary hover:bg-purple-dark'>Buy Now</button>
          </div>
        </div>
        <div className='backdrop-blur-2xl rounded-xl bg-opacity-[0.20] h-full flex flex-col justify-center items-center'>
          <div>
            <p className='text-xl font-semibold text-center'>Premium</p>
            <p className='text-base font-light text-center'>101 tickets</p>
          </div>
          <div className='mt-5 mb-5'>
            <p className='text-4xl font-bold text-center'>$234</p>
          </div>
          <div className='mb-5'>
            <p className='text-xs px-2 font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</p>
          </div>
          <div className='w-1/2'>
            <button className='py-2 w-full px-5 rounded-lg bg-purple-primary hover:bg-purple-dark'>Buy Now</button>
          </div>
        </div>
        <div className='backdrop-blur-2xl rounded-xl bg-opacity-[0.20] h-full flex flex-col justify-center items-center'>
          <div>
            <p className='text-xl font-semibold text-center'>Premium</p>
            <p className='text-base font-light text-center'>101 tickets</p>
          </div>
          <div className='mt-5 mb-5'>
            <p className='text-4xl font-bold text-center'>$234</p>
          </div>
          <div className='mb-5'>
            <p className='text-xs px-2 font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis.</p>
          </div>
          <div className='w-1/2'>
            <button className='py-2 w-full px-5 rounded-lg bg-purple-primary hover:bg-purple-dark'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

