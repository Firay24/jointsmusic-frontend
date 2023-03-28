import React from 'react'

export default function Countdown() {
  const countDate = new Date("May 23, 2023 00:00:00").getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinutes = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  return (
    <div className='flex gap-5'>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Days</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{textDay}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Hours</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{textHour}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Minutes</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{textMinutes}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Seconds</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{textSecond}</p>
        </div>
      </div>
    </div>
  )
}
