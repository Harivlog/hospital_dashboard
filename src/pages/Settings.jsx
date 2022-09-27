import React from 'react'

const Settings = () => {
    return (
        <>
            <div className="">
                <div className="my-3">
                    <h3 className='text-text-red-1 text-xl font-bold'>Settings</h3>

                </div>
                <div className=" p-3  w-full h-[45rem] border border-gray-2 rounded-3xl py-8">
                    <div className="flex mb-5">
                        <div className="w-[30%] flex justify-center">
                            <div className="w-36 h-36 rounded-full border-4 border-gray-border    bg-gray-dark flex justify-center items-center flex-col cursor-pointer">
                                <img src="/public/assets/icons/camera.png" alt="" />
                                <p className='text-xs text-white mt-2'>Click to change
                                    photo</p>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <h2 className='text-text-primary font-bold'>Account Details</h2>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="first name" className='text-black-1 my-2'>First Name</label>
                                <input type="text" className='rounded-3xl py-3 px-6 w-full border border-gray-3 outline-none' placeholder='Ola' />
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="last name" className='text-black-1 my-2'>Last Name</label>
                                <input type="text" placeholder='Boluwatife' className='rounded-3xl py-3 px-6 w-full border border-gray-3 outline-none' />
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="Email" className='text-black-1 my-2'>Email</label>
                                <input type="email" placeholder='Olaboluwatofezzy@ymail.com' className='rounded-3xl py-3 px-6 w-full border border-gray-3 outline-none' />
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="Account Type" className='text-black-1 my-2'>Account Type</label>
                                <input type="text" placeholder='Patient' className='rounded-3xl py-3 px-6 w-full border border-gray-3 outline-none' />
                            </div>
                            <button className='my-6 font-semibold rounded-3xl py-3 px-6 w-full bg-text-primary text-white'>SAVE NEW CHANGES</button>
                        </div>
                    </div>
                    <hr className='border border-gray-2'/>
                    <div className="text-center mt-4 p-3">
                        <h2 className='text-text-primary font-bold'>Security</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings