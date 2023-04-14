import React from 'react'

export default function Account() {
  return (
    <div className='font-poppins'>
      <p className='text-white text-base'>Account Details</p>
      <form className='flex flex-col mt-3 text-sm gap-y-2'>
        <label className='text-grey-primary'>Email adress</label>
        <input type='text' className='py-2 px-2 rounded placeholder:text-xs' placeholder='Email@myemail.com' />
        <label className='text-grey-primary'>Password</label>
        <input type='password' className='py-2 px-2 rounded placeholder:text-xs' placeholder='*******' />
        <button className='text-white mt-3 bg-purple-primary py-2 rounded w-1/4 hover:bg-purple-dark'>Submit</button>
      </form>
    </div>
  )
}
