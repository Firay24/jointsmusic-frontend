import React from 'react'
import Timer from './Timer'

export default function Payment() {
  return (
    <div className='text-white'>
        <p className='text-lg'>Payment</p>
        <div className='w-3/4 mt-5'>
            <div className='mb-2'>
                <p className='text-grey-primary italic'>Registration Number</p>
                <p className='font-bold'>253467192739</p>
            </div>
            <p className='text-grey-primary italic'>Number Credit</p>
            <div className='flex justify-between mb-2'>
                <div>
                    <p>BRI A.N Fira Yusi Rukmana</p>
                    <p className='font-bold'>7628392920</p>
                </div>
                <Timer/>
            </div>
        </div>
        <button className='p-2 mt-2 bg-purple-primary w-1/4 rounded hover:bg-purple-dark'>Next</button>
    </div>
  )
}
