import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const eventDate = new Date("April 14, 2023 19:43:00").getTime()
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const gap = eventDate - now

            const textMinutes = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60))
            setMinutes(textMinutes)
            const textSecond = Math.floor(gap % (1000 * 60) / 1000)
            setSeconds(textSecond)
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <div className='text-red-primary'>
            <p>{minutes}:{seconds}</p>
        </div>
    )
}
