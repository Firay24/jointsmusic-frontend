import React from 'react'

export default function FormLogin() {
  return (
    <div className='font-poppin'>
      <h3 className='font-normal text-xl'>Account Details</h3>
      <div className=''>
        <form className='flex flex-col mt-5'>
            <label className='text-[#718096] py-2 mb-2'>Email address</label>
            <input type="text" placeholder='email@myemail.com' className='mb-2 py-2 px-2 w-1/2 rounded-md text-slate-900'/>
            <label className='text-[#718096] py-2 mb-2'>Password</label>
            <input type="password" placeholder='*******' className='py-2 px-2 w-1/2 rounded-md text-slate-900 mb-2' />
            <button className='bg-purple-primary w-1/4 py-2 rounded-md mt-5 hover:bg-purple-dark'>Submit</button>
        </form>
      </div>
    </div>
  )
}
