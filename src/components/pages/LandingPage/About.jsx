import React from 'react'
import Image from 'next/image'
import imgAbout from 'src/assets/images/imgAbout.png'
import Countdown from './Components/Countdown'

export default function About() {
  return (
    <div className='text-white font-poppins px-10 mt-5 py-5'>
        <h2 className='font-semibold text-3xl'>About <span className='text-purple-primary'>Us</span></h2>
        <div className='flex mt-5 gap-x-5'>
            <div>
                <Image src={imgAbout} className='w-[1500px]'/>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='font-light text-base'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet proin ut vitae, felis. Mauris aliquet faucibus iaculis dui vitae ullamcorper ac. Posuere enim, mi pharetra neque proin dictum amet.</p>
                    <p><span className='text-purple-dark font-medium'>Vitae ullamcorper ac. </span> Posuere enim, mi pharetra neque proin dictum amet.</p>
                </div>
                <div>
                    <Countdown></Countdown>
                </div>
            </div>
        </div>
    </div>
  )
}
