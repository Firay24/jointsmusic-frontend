import React from 'react'
import Image from 'next/image'
import guest1 from 'src/assets/images/guests1.png'

export default function Guests() {
  return (
    <div className="flex flex-col font-poppins text-white px-10 py-52 h-max w-full items-center">
        <div className='font-semibold text-3xl'>Main <span className='text-red-primary'>Guests</span></div>
        <div className='flex w-full gap-x-10 justify-center mt-10'>
            <Image ></Image>
            <div className='w-1/6 relative'>
                <div className='absolute z-10 text-sm p-2 bg-purple-primary h-8 w-8 flex justify-center items-center'>
                    <p>1</p>
                </div>
                <div className=''>
                    <Image src={guest1} className="w-full shadow-xl shadow-slate-700"></Image>
                </div>
                <div className='top-60 absolute w-full rounded-md py-2 px-2 flex flex-col items-center bg-[#737373] backdrop-blur-lg bg-opacity-[0.20]'>
                    <p className='text-lg font-semibold'>Jacson</p>
                    <p className='text-sm'>Rock Band</p>
                </div>
            </div>
            <div className='w-1/6 relative'>
                <div className='absolute z-10 text-sm p-2 bg-purple-primary h-8 w-8 flex justify-center items-center'>
                    <p>2</p>
                </div>
                <div className=''>
                    <Image src={guest1} className="w-full shadow-xl shadow-slate-700"></Image>
                </div>
                <div className='top-60 absolute w-full rounded-md py-2 px-2 flex flex-col items-center bg-[#737373] backdrop-blur-lg bg-opacity-[0.20]'>
                    <p className='text-lg font-semibold'>Jacson</p>
                    <p className='text-sm'>Rock Band</p>
                </div>
            </div>
            <div className='w-1/6 relative'>
                <div className='absolute z-10 text-sm p-2 bg-purple-primary h-8 w-8 flex justify-center items-center'>
                    <p>3</p>
                </div>
                <div className=''>
                    <Image src={guest1} className="w-full shadow-xl shadow-slate-700"></Image>
                </div>
                <div className='top-60 absolute w-full rounded-md py-2 px-2 flex flex-col items-center bg-[#737373] backdrop-blur-lg bg-opacity-[0.20]'>
                    <p className='text-lg font-semibold'>Jacson</p>
                    <p className='text-sm'>Rock Band</p>
                </div>
            </div>
            <div className='w-1/6 relative'>
                <div className='absolute z-10 text-sm p-2 bg-purple-primary h-8 w-8 flex justify-center items-center'>
                    <p>4</p>
                </div>
                <div className=''>
                    <Image src={guest1} className="w-full shadow-xl shadow-slate-700"></Image>
                </div>
                <div className='top-60 absolute w-full rounded-md py-2 px-2 flex flex-col items-center bg-[#737373] backdrop-blur-lg bg-opacity-[0.20]'>
                    <p className='text-lg font-semibold'>Jacson</p>
                    <p className='text-sm'>Rock Band</p>
                </div>
            </div>
        </div>
    </div>
  )
}
