import React from 'react'

const LoginPage = () => {
  return (
    <div className=' h-screen bg-text-primary flex justify-center items-center'>
       <div className="w-[40%]">


       <div className="flex justify-center items-center p-6">
           <img className='w-10 h-10 cursor-pointer' src="/public/assets/icons/closeWhite.png" alt="" />
       </div>
       <div className="bg-white rounded-xl py-16 px-8 ">
            <div className="flex justify-center items-center flex-col">
              <div className="w-[15%]">
                <img className='w-[100%]' src="/public/assets/icons/logo.svg" alt="logo" />
              </div>
              <p className='mt-2 font-bold text-text-1'>LOGIN</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-text-1'>Email</label>
              <input className='border border-gray-2 py-3 px-3 rounded-3xl my-2' type="email" placeholder='rachealajibade@gmail.com' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className='text-text-1'>Password</label>
              <input className='border border-gray-2 py-3 px-3 rounded-3xl my-2' type="password" placeholder='XXXXXXXXXXXXXX'/>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <input type="checkbox" />
                <label className='ml-2 text-text-1' htmlFor="">Remember Me</label>
              </div>
              <div className="">
                <a className='text-text-primary text-under underline md:decoration-1' href="">Forgot Password?</a>
              </div>
            </div>
            <div className="mt-4">
              <button className='w-full text-white py-3 px-3 font-semibold bg-text-primary rounded-3xl my-2'>LOGIN</button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default LoginPage