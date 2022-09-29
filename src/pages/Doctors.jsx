import React from 'react'
import { DoctorAppointment } from '../seed/seed'
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Doctors = () => {
    return (
        <div className='font-Montserrat'>
            <div className="my-3">
                <h3 className='text-text-red-1 text-xl font-bold'>Doctors</h3>
                <div className="flex my-3">
                    <div className="flex items-center mx-3">
                        <label htmlFor="" className='text-xs font-bold mr-2'>SHOW</label>
                        <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                            {
                                day.map((days, index) => (
                                    <option key={index} className='peer-optional:text-gray-1' value="">{days}</option>

                                )

                                )
                            }


                        </select>
                    </div>
                    <div className="flex justify-center items-center w-[20%] mr-3">
                        <label htmlFor="" className='text-xs font-bold mr-2'>Status</label>

                        <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                            <option className='peer-optional:text-gray-1' value="">Online</option>
                            <option value="">Offline</option>

                        </select>
                    </div>
                    <div className=" border-2 border-gray-3 bg-white flex items-center w-[35%] py-[0.38rem] px-3 rounded-md font-normal ">


                        <img className='w-4 h-4' src="/assets/icons/search.svg" alt="" />


                        <input className='w-full outline-none ml-2' type="text" placeholder='Search doctors by name or title' />
                    </div>
                    <div className="flex justify-center items-center mx-3">
                        <button className=" border-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] rounded-l-md text-xs hover:bg-text-red-1 hover:text-white hover:border-0">All</button>
                        <button className="border-y-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Man</button>
                        <button className="border-2 border-gray-3 py-[0.55rem] font-semibold rounded-r-md w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Women</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 p-3">
                    {
                        DoctorAppointment.map((items, index) => (
                            <div key={index} className="border border-gray-2 w-[27%] rounded-lg px-5 p-t-0">
                                <div className="w-full flex justify-center items-center flex-col">
                                    <div className="flex w-full justify-end">
                                        <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="font-extrabold text-2xl mb-2 md:mb-0   hover:bg-text-primary-800 focus:ring-4 focus:outline-none focus:ring-text-primary-300  rounded-lg  px-5 py-2.5 text-center  ">...</button>
                                        <div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium  bg-gray-5 rounded-lg shadow-sm opacity-0 tooltip ">
                                            Tooltip on bottom
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-[7rem] items-center my-3">
                                        <img className='w-[100%] border-4 border-gray-2 rounded-full' src='/public/assets/images/roundImg.png' alt="" />

                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <h3 className='font-bold text-sm'>{items.name}</h3>
                                        <p className='text-xs text-text-red-1'>{items.doctor}</p>
                                    </div>
                                </div>
                                <hr className='my-2 border border-gray-2' />
                                <div className="flex flex-col justify-center items-center p-3">
                                    <button className=' rounded-2xl border border-gray-2 py-2 px-12 text-xs '>CHAT</button>
                                    <button className='my-2 bg-text-primary rounded-2xl text-white py-2 px-12 text-xs '>BOOK</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Doctors