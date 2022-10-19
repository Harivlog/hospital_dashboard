import React from 'react'
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
import {DoctorAppointment} from '../seed/seed'
const PatientDashboard = () => {
    return (

        <div className='font-Montserrat'>

            <div className="my-3">
                <h3 className='text-text-red-1 text-xl font-bold'>Pathology Results</h3>
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
                        <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                            <option className='peer-optional:text-gray-1' value="">October</option>
                            <option value="">Novenber</option>
                            <option value="">December</option>

                        </select>
                    </div>
                    <div className=" border-2 border-gray-3 bg-white flex items-center w-[35%] py-[0.38rem] px-3 rounded-md font-normal ">


                        <img className='w-4 h-4' src="/assets/icons/search.svg" alt="" />


                        <input className='w-full outline-none ml-2' type="text" placeholder='Search doctors by name or title' />
                    </div>
                    <div className="flex justify-center items-center mx-3">
                        <button className=" border-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] rounded-l-md text-xs hover:bg-text-red-1 hover:text-white hover:border-0">DAY</button>
                        <button className="border-y-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">WEEK</button>
                        <button className="border-2 border-gray-3 py-[0.55rem] font-semibold rounded-r-md w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">MONTH</button>
                    </div>
                </div>
                
                <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden  border border-gray-2 rounded-lg px-3">
                        <table className="table-auto w-full  mt-5  border-spacing-y-4  gap-3 border-separate rounded">
                            <thead className="bg-gray-50 m-3">
                                <tr>
                                  
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        DOCTOR
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        FILE
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        TIME
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        ACTION
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 py-3 m-5">
                                {
                                    DoctorAppointment.map((items,index)=>(
                                        <tr className='modify-border border-2 border-gray-3 rounded-lg ' key={index}>
                                   
                                    <td className="px-6 py-4  text-gray-800 whitespace-nowrap font-bold text-xs">
                                        <img src="" alt="" />
                                        {items.name}
                                    </td>
                                    <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap">
                                    {items.file}
                                    </td>
                                    <td className="px-6 py-4 text-xs font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-text-red-1 font-bold  hover:text-green-700"
                                            href="#"
                                        >
                                            {items.time}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-xs  text-right whitespace-nowrap">
                                        <a
                                            className="text-black font-semibold hover:text-white hover:bg-text-primary hover:border-none border border-gray-2 py-2 px-3 rounded-2xl"
                                            href="#"
                                        >
                                            VIEW RESULT
                                        </a>
                                    </td>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        ...
                                    </th>
                                </tr>
                                    ))
                                }
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>

    )
}

export default PatientDashboard