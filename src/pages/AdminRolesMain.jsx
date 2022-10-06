import React from 'react'
import { RolesList, AdminRolesMainData } from '../seed/seed'
const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const imgs = [
  { img: `${<img src="/public/assets/icons/externalLink.png" />}` }
]
// "03252808791 hazi sajad"

const AdminRolesMain = () => {
  return (
    <div className=' font-Montserrat m-4'>
      <div className="">
        <h2 className='text-lg font-medium text-black-2'>Roles List</h2>
        <p className=" text-gray-5">A role provide access to predefined menus and features so that depending on  <br />assigned role an administrator can have access to what he need</p>
      </div>
      <div className="my-4 flex flex-wrap  gap-3">
        {
          RolesList.map((items, index) => (
            <div key={index} className="shadow-lg p-5 w-[30%]">
              <div className="flex justify-between items-center">
                <div className="">
                  <h4 className='text-gray-5'>{items.totalUser}</h4>

                </div>
                <div className="">
                  <img src={items.user} alt={`userGroupAvatar${index}`} />

                </div>

              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <h2 className='text-lg font-[500] text-black-2 mb-1'>{items.title}</h2>
                  <p className='text-sm text-text-primary font-semibold cursor-pointer'>Edit Role</p>
                </div>
                <div className="">
                  <img className='cursor-pointer' src="/assets/icons/copy.png" alt="copyIcon" />
                </div>
              </div>
            </div>
          ))
        }
        <div className="shadow-lg p-5 w-[30%] flex justify-between items-center">
          <div className="">
            <img src="/public/assets/images/Illustration.svg" alt="" />
          </div>
          <div className="">
            <button className='ml-4 bg-text-primary py-2 px-3 text-white rounded-md  font-normal text-xs mb-2 '>Add New Role</button>
            <p className='text-gray-5 text-xs'>Add role, if it does not exist.</p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className='text-2xl text-black-2 font-medium'>Total users with their roles</h2>
        <p className='text-gray-5'>Find all of your company’s administrator accounts and their associate roles.</p>
      </div>
      <div className="shadow-lg">
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

                <select className='text-text-primary placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-text-primary rounded-md outline-none' name="" id="">

                  <option className='peer-optional:text-gray-1' value="" label={`${imgs.img} Export`} >
                  </option>
                  <option value="">Offline</option>

                </select>
              </div>
            </div>
          </div>
          <div className="">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-black-2 uppercase bg-gray-7 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="py-3 px-6">
                  NAME
                </th>
                <th scope="col" className="py-3 px-6">
                  ROLE
                </th>
                <th scope="col" className="py-3 px-6">
                  PLAN
                </th>
                <th scope="col" className="py-3 px-6">
                  BILLING
                </th>
                <th scope="col" className="py-3 px-6">
                  STATUS
                </th>
                <th scope="col" className="py-3 px-6">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {
                AdminRolesMainData.map((items, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="pl-4 w-4">
                      <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                      </div>
                    </td>
                    <th scope="row" className="flex items-center py-4  text-gray-900 whitespace-nowrap dark:text-white">
                      <img className="w-10 h-10 rounded-full" src={items.img} alt="Jese image" />
                      <div className="pl-3">
                        <div className="text-sm font-semibold  text-gray-5">{items.username}</div>
                        <div className="font-normal text-xs text-gray-4">{items.email}</div>
                      </div>
                    </th>

                    <td className="py-4 px-6 ">
                      <div className="flex items-center gap-2">
                        <img src={items.roleIcon} alt={`roleIcon${index}`} />
                        <h2 className='text-sm text-gray-5 font-medium'>{items.role}</h2>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <p className='text-sm'>
                          {items.plan}

                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center ">
                        <p className='text-sm'>
                          {items.billing}

                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <p className='text-sm'>
                          {items.status}

                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <a href="#" className="font-medium text-center text-blue-600 dark:text-blue-500 hover:underline"><img src='/public/assets/icons/eye.png' alt="eyeIcon" /></a>
                    </td>
                  </tr>

                ))
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminRolesMain