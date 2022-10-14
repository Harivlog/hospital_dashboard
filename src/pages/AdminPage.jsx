import React from 'react'
import Chart from 'react-apexcharts'
import { DonutChart, MixedChart, PatientDonatChart, RedarChart, Map, StackedChartCom } from '../components/charts/Charts'
import { UpcomingAppointment, DoctorsAdmin } from '../seed/seed'
const AdminPage = () => {
  return (
    <div className='font-Montserrat'>
      <div className="my-3 ">
        <h3 className='text-blue-5 text-xl font-bold'>Welcome Joseph,
        </h3>
        <p className='text-black-1'>Super Admin</p>
      </div>
      <div className="flex gap-3">
        <div className="grid grid-cols-3 gap-4 w-[70%] ">
          <div className="col-span-1 "><DonutChart /></div>
          <div className="col-span-1 "><PatientDonatChart /></div>
          <div className="col-span-1 "><MixedChart /></div>
          <div className="col-start-1 col-end-3"><Map /></div>
          <div className="grid-span-1"><RedarChart /></div>
          <div className="col-start-1 w-[100%] overflow-x-auto col-end-4 border-2 border-gray-3 p-3 rounded-3xl">
            <div className="flex justify-between items-center w-[100%]  ">
              <div className="">DOCTORS</div>
              <div className="flex gap-3 justify-between">
                <div className=" border-2 border-gray-3 bg-white flex items-center  w-[100%]  px-3 rounded-md font-normal ">


                  <img className='w-4 h-4' src="/assets/icons/search.svg" alt="" />


                  <input className='w-full outline-none ml-2' type="text" placeholder='Search doctors by name or title' />
                </div>
                <div className="flex w-full justify-center items-center my-3 ">
                  <button className=" border-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] rounded-l-xl text-xs hover:bg-text-red-1 hover:text-white hover:border-0">All</button>
                  <button className="border-y-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Man</button>
                  <button className="border-2 border-gray-3 py-[0.55rem] font-semibold rounded-r-xl w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Women</button>
                </div>
              </div>
            </div>
            <table className="table-auto w-full   mt-5  border-spacing-y-4  gap-3 border-separate rounded">
              <thead className="bg-gray-50 m-3 ">
                <tr>

                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.65rem] font-bold text-left text-gray-500 uppercase "
                  >
                    NAME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.65rem] font-bold text-left text-gray-500 uppercase "
                  >
                    ROLE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.65rem] font-bold text-left text-gray-500 uppercase "
                  >
                    BOOKEDAPPOINTMENT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.65rem] font-bold text-left text-gray-500 uppercase "
                  >
                    CHAT
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.65rem] font-bold text-left text-gray-500 uppercase "
                  >
                    BOOK NEW APPOINTMENTS
                  </th>

                </tr>
              </thead>
              <tbody className="divide-y  divide-gray-200 py-3 m-5">
                {
                  DoctorsAdmin.map((items, index) => (
                    <tr className='modify-border border-2 border-gray-3 rounded-lg ' key={index}>

                      <td className="px-6 py-4  text-gray-800 whitespace-nowrap font-bold text-xs text-left">
                        <img src="" alt="" />
                        {items.doctorName}
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-800 whitespace-nowrap text-left">
                        {items.role}
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-left whitespace-nowrap">
                        <a
                          className="text-text-red-1 font-bold  hover:text-green-700"
                          href="#"
                        >
                          {items.bookedAppointment}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-xs cursor-pointer  text-right whitespace-nowrap">
                      
                          <img src="/public/assets/icons/letterInbox.png" alt="letterIcon" />
                        
                      </td>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        BOOK
                      </th>
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
        <div className="rounded-3xl border-2 border-gray-3 ">
          <div className=" p-3">
            <StackedChartCom />
          </div>
          <div className="border-t-2 border-gray-3 p-3">
            <h2 className='font-bold text-black-1 text-sm'>UPCOMING APPOINTMENTS</h2>
            <div className="">
              {
                UpcomingAppointment.map((items, index) => (
                  <div key={index} className="my-2 flex justify-between items-center rounded-2xl p-2 border-2 border-gray-3 ">
                    <div className="flex ">
                      <div className="mr-2"><img className='w-8 h-8' src={items.img} alt="upcomingdoctors" /></div>
                      <div className="">
                        <h2 className='font-bold text-black-1 text-[0.70rem]'>{items.doctorName}</h2>
                        <p className='font-semibold text-text-primary text-xs'>{items.title}</p>
                      </div>
                    </div>
                    <div className=" flex flex-start justify-center flex-col ">
                      <p className='text-right  text-3xl'>...</p>
                      <p className='font-bold text-black-1 text-[0.60rem]'>{items.date}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="border-t-2 border-gray-3 p-3">
            <div className="flex w-full  items-center my-3 ">
              <button className=" border-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] rounded-l-xl text-xs hover:bg-text-red-1 hover:text-white hover:border-0">All</button>
              <button className="border-y-2 border-gray-3 py-[0.55rem] font-semibold w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Man</button>
              <button className="border-2 border-gray-3 py-[0.55rem] font-semibold rounded-r-xl w-[6rem] text-xs hover:bg-text-red-1 hover:text-white hover:border-0">Women</button>
            </div>
            <h2 className='font-bold text-black-1 text-sm'>PREVIOUS APPOINTMENTS</h2>
            <div className="">
              {
                UpcomingAppointment.map((items, index) => (
                  <div key={index} className="my-2 flex justify-between items-center rounded-2xl p-2 border-2 border-gray-3 ">
                    <div className="flex ">
                      <div className="mr-2"><img className='w-8 h-8' src={items.img} alt="upcomingdoctors" /></div>
                      <div className="">
                        <h2 className='font-bold text-black-1 text-[0.70rem]'>{items.doctorName}</h2>
                        <p className='font-semibold text-text-primary text-xs'>{items.title}</p>
                      </div>
                    </div>
                    <div className=" flex flex-start justify-center flex-col ">
                      <p className='text-right  text-3xl'>...</p>
                      <p className='font-bold text-black-1 text-[0.60rem]'>{items.date}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminPage