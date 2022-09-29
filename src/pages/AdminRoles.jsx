import React , {useState} from 'react'
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
import {AdminRolesData} from '../seed/seed'
const AdminRoles = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='m-4 rounded-lg shadow-lg font-Montserrat '>
            <div className="flex justify-between items-center w-full p-5">
                <div className="flex items-center mx-3">
                    <label htmlFor="" className='text-black-2 text-sm  mr-2'>SHOW</label>
                    <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                        {
                            day.map((days, index) => (
                                <option key={index} className='peer-optional:text-gray-1' value="">{days}</option>

                            )

                            )
                        }


                    </select>
                </div>
               
                <div className="flex gap-2">
                <div className=" flex justify-between items-center">
                        <label htmlFor="" className='text-black-2 text-sm  mr-2'>Search</label>
                    <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Search' />
                </div>
                    <div className="flex justify-center items-center  mr-3">

                        <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                            <option className='peer-optional:text-gray-1' value="">Select Role</option>
                            <option value="">Offline</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className="">
                
<div className="overflow-x-auto relative shadow-md">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 outline-gray-2   ">
        <thead className="text-xs text-black-2 uppercase bg-gray-7 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                ASSIGNED TO
                </th>
                <th scope="col" className="py-3 px-6">
                Created Date
                </th>
                <th scope="col" className="py-3 px-6">
                ACTIONS
                </th>
             
            </tr>
        </thead>
        <tbody>
            {
                AdminRolesData.map((items , index)=>(

            <tr key={index} className="outline-8 outline-gray-6  border-2 border-gray-6 bg-white text-black-2 border-b dark:bg-gray-800 ">
                <th scope="row" className="py-4 px-6 font-medium text-black-2 whitespace-nowrap dark:text-white">
                    {items.name}
                </th>
                <td className="py-4 px-6">
                    {items.assignedto}
                </td>
                <td className="py-4 px-6">
                    {items.date}
                </td>
                <td className="py-4 px-6 flex gap-4">
                    <button  className=" outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}><img src='/public/assets/icons/edit.png' alt="editicon" /></button>
                    <button><img src="/public/assets/icons/copy.png" alt="copyicon" /></button>

                </td>
             
            </tr>
                ))
            }
            
        </tbody>
    </table>
</div>

            </div>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="relative flex items-start justify-between p-5 text-center border-b border-solid border-text-red rounded-t">
                  <div className="w-full mt-3">
                  <h3 className="text-3xl text-black-2 font-medium text-center w-full">
                  Edit Permission
                  </h3>
                  <p className='text-gray-5'>Edit permission as per your requirements.</p>
                  </div>
                  <button
                    className="absolute right-[-5] p-1 ml-auto  bg-red-900 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white  h-6 w-6 text-2xl  outline-none focus:outline-none">
                      ×dfdgdfg
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
        
    )
}

export default AdminRoles