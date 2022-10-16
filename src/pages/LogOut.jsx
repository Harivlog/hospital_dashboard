import React from 'react'

const LogOut = () => {
  return (
    <>
      <div className="flex flex-col relative ">
        <div className="my-3">
            <h3 className='text-text-red-1 text-xl font-bold'>LogOut</h3>

        </div>
        <div className="flex  justify-center items-center w-full h-[82vh] border border-gray-2 rounded-3xl">
           <div className=" p-2 w-[40%]">
            <div className="flex justify-center items-center">
                <img className="2xl:w-56 2xl:h-56" src='/public/assets/icons/logo.svg' alt="logo" />
            </div>
            <div className="flex flex-col mt-6">
                    <label className='text-black-1 my-2 2xl:text-3xl' htmlFor="email">Email</label>
                    <input type="email" className='text-sm rounded-3xl py-3 px-6 2xl:py-5 2xl:px-6 w-full border border-gray-3 outline-none  2xl:text-2xl' placeholder='Olaboluwatofezzy@ymail.com'/>
                    <button className='my-6 font-semibold rounded-3xl py-3 px-6 2xl:py-5 2xl:px-6 2xl:rounded-full text-sm 2xl:text-2xl w-full bg-text-primary text-white'>LOGOUT</button>
            </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default LogOut