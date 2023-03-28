import React, { useEffect, useState } from 'react'

export default function Countdown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const countDate = new Date("May 23, 2023 00:00:00").getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const gap = countDate - now

      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24

      const textDay = Math.floor(gap / day)
      setDays(textDay)
      const textHour = Math.floor((gap % day) / hour)
      setHours(textHour)
      const textMinutes = Math.floor((gap % hour) / minute)
      setMinutes(textMinutes)
      const textSecond = Math.floor((gap % minute) / second)
      setSeconds(textSecond)

    }, 1000)

    return () => clearInterval(interval)

  })

  

  return (
    <div className='flex gap-5'>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Days</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{days}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Hours</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{hours}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Minutes</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{minutes}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-y-2'>
        <p className='font-semibold text-lg'>Seconds</p>
        <div className='h-20 w-20 border-2 border-purple-primary rounded-xl'>
            <p className='flex justify-center items-center h-full text-3xl font-bold'>{seconds}</p>
        </div>
      </div>
    </div>
  )
}
