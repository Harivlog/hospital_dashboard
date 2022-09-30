import React, { useState } from 'react'
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
import { AdminRolesData,Rolesdata} from '../seed/seed'
const AdminRoles = () => {
  const [showModal, setShowModal] = useState(false);
  const [AddModal, setAddModal] = useState(false);

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
                AdminRolesData.map((items, index) => (

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
                      <button className=" outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(true)}><img src='/public/assets/icons/edit.png' alt="editicon" /></button>
                      <button
                        type="button"
                        onClick={() => setAddModal(true)}
                      ><img src="/public/assets/icons/copy.png" alt="copyicon" /></button>

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
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative  my-6 mx-auto max-w-[70%]">
              {/*content*/}
              <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="relative flex items-start justify-between p-5 text-center border-b border-solid border-text-red rounded-t">
                  <div className="w-full mt-3">
                    <h3 className="text-3xl text-black-2 font-medium text-center w-full">
                      Edit Permission
                    </h3>
                    <p className='text-gray-5'>Edit permission as per your requirements.</p>
                    <div className="flex flex-col justify-start ">
                      <label htmlFor="" className='text-black-2 text-left text-sm  mr-2 my-1'>Permission Name</label>
                      <div className="flex w-[36rem] ">
                        <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder=' Enter a permission name' />
                        <button className='ml-4 bg-text-primary py-2 px-3 text-white rounded-md font-xs'>Update</button>
                      </div>
                      <div className="my-2 flex justify-start items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Set as core permission</label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute py-2 px-2 -top-11 -right-11 rounded-md shadow-md  ml-auto  bg-white border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black-2  text-3xl  outline-none focus:outline-none">
                      <img src="/public/assets/icons/close.png" alt="" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div role="alert">
                    <div class="bg-yellow-1 text-yellow-2 font-bold rounded-t px-4 py-2">
                      Danger
                    </div>
                    <div class="text-normal rounded-b bg-yellow-3 px-4 py-3 text-yellow-2">
                      <p>Something not ideal might be happening.</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}

              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-black-3"></div>
        </>
      ) : null}
      {AddModal ? (
        <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative   mx-auto max-w-[70%]">
              {/*content*/}
              <div className="p-3 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="relative flex items-start justify-between p-3 text-center border-b border-solid border-text-red rounded-t">
                  <div className="w-full ">
                    <h3 className="text-3xl text-black-2 font-medium text-center w-full">
                      Add a role
                    </h3>
                    <p className='text-gray-5'>Adding a role to the role list</p>
                    <div className="flex flex-col justify-start ">
                      <label htmlFor="" className='text-black-2 text-left text-sm  mr-2 my-1'>Roll Name</label>
                      <div className="flex  ">
                        <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder=' Enter role name' />

                      </div>
                      <div className="my-2 flex justify-start items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Set as core permission</label>
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute py-2 px-2 -top-6 -right-6 rounded-md shadow-md  ml-auto  bg-white border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setAddModal(false)}
                  >
                    <span className=" text-black-2  text-3xl  outline-none focus:outline-none">
                      <img src="/public/assets/icons/close.png" alt="" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-4 flex-auto">
                  <h3 className='text-xl text-black-2 font-medium  w-full'>Role Permissions</h3>
                  <div className="my-3">
                    <div className="flex justify-between items-center ">
                      <h4>Administrator Access</h4>
                      <div className=" flex items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Sellect All</label>
                      </div>
                    </div>
                    <table className="table-auto w-full   rounded">
                            
                            <tbody>
              {
                Rolesdata.map((items, index) => (

                  <tr key={index} className="text-left text-sm outline-8 outline-gray-6  border-2 border-gray-6 bg-white text-black-2 border-b dark:bg-gray-800 ">
                    <th scope="row" className=" py-4 px-6 font-medium text-black-2 whitespace-nowrap dark:text-white">
                      {items.name}
                    </th>
                    <td className="py-4 px-6">
                      {items.assignedto}
                    </td>
                    <td className="py-4 px-6">
                      {items.date}
                    </td>
                    <td className="py-4 px-6 flex gap-4">
                    <div className="px-4 flex items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Read</label>
                      </div>
                      <div className="px-4 flex items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Write</label>
                      </div>
                      <div className="px-4 flex items-center">
                        <input type="checkbox" className='bg-gray-2 border border-gray-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   pl-10 p-2.5 mr-2 w-4 h-4' />
                        <label htmlFor="">Create</label>
                      </div>
                    </td>

                  </tr>
                ))
              }

            </tbody>
                        </table>
                        <div className="mt-4 flex justify-center items-center gap-3">
                          <button className="bg-text-primary text-white py-2 px-4 rounded-lg">Create Permission</button>
                          <button className='border-2 border-black-4 text-black-4 py-2 px-4 rounded-lg'>Discard</button>
                        </div>
                  </div>
                </div>
                {/*footer*/}

              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 bg-black-3"></div>
        </>
      ) : null}
    </div>

  )
}

export default AdminRoles