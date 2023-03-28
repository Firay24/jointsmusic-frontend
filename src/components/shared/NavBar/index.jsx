import React from 'react'
import logo from "src/assets/images/icons/logo.png"
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NavBar() {
    const router = useRouter()

    return (
        <header>
            <div className='flex justify-between px-10 py-5 text-purple-primary font-poppins sticky top-0'>
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt="logo" className='w-5 h-5' />
                    <p className='font-bold text-lg'>joints <span className='text-white'>music</span></p>
                </div>
                <div>
                    <ul className='flex gap-6 items-center text-sm cursor-pointer'>
                        <li className='hover:text-white'>
                            <Link href="/landing-page" className={router.pathname === "/landing-page" ? "text-white" : ""}>Home</Link>
                        </li>
                        <li className='hover:text-white'>About</li>
                        <li className='hover:text-white'>
                            <Link href="/ticket" className={router.pathname === "/ticket" ? "text-white" : ""}>Ticket</Link>
                        </li>
                        <li className='hover:text-white'>Contact</li>
                        <li className='bg-purple-primary text-white p-3 rounded-full hover:bg-purple-dark'>Check Order</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
