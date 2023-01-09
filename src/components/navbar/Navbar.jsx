import React from 'react'

const Navbar = () => {
  return (
<div className='flex items-center justify-between p-4 z-50 absolute w-full'>
    <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>TMB.Flix</h1>
    <div>
        <button className='pr-4 text-white cursor-pointer '>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
    </div>
</div>
  )
}

export default Navbar