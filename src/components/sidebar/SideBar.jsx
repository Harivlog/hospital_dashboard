import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuData, Account } from './menuData'
import Select from 'react-select'
const SideBar = () => {
   const [toggle, setToggle] = useState(true)
   const [dropdownToggle, setdropdownToggle] = useState(false)
   const [dropToggle, setDropToggle] = useState(false)
   const dropdownHundler = () => {

      setdropdownToggle(!dropdownToggle)
      setDropToggle(!toggle)
      console.log(toggle)
   }
   const handleToggle = () => {
      setToggle(!toggle)
   }
   const options = [
      { value: 'chocolate', label: <div>Chocolate </div> },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
   ];
   const image = '<img src="/public/assets/icons/clipBoard.png"/>'
   return (
      <>
         {
            toggle ?
               <>
                  <aside className="w-64 2xl:w-96 h-screen bg-gray-1 rounded-3xl relative" aria-label="Sidebar">
                     <div className="overflow-y-auto py-4   rounded dark:bg-gray-800">
                        <ul className="space-y-2">
                           <li className='flex justify-center items-center mb-4'>

                              <img onClick={handleToggle} src="/public/assets/icons/rightLeftArrow.png" alt="logo" />

                           </li>
                           <hr className='border-gray-2' />
                           {
                              MenuData.map((menu, index) => (
                                 <li key={index} className="px-3 py-1  hover:bg-gray-hover  hover:text-text-primary hover:font-bold">
                                    <Link to={menu.links} className="flex items-center p-2 text-base  text-gray-900 rounded-lg  hover:text-text-primary ">
                                       <img className='' src={menu.img} alt="overview" />
                                       <p className='px-2'>{menu.title}</p>
                                    </Link>
                                 </li>
                              ))
                           }
                           <li className="    hover:text-text-primary hover:font-bold">
                              <div className="flex items-center  text-base  text-gray-900 rounded-lg   ">

                              

                                 <div className="dropdown w-full">
                                    <button className="px-3 py-3 w-full hover:bg-gray-hover hover:text-text-primary nav-btn flex" type="button" onClick={() => setdropdownToggle(!dropdownToggle)} >
                                    <img loading="lazy" decoding="async" src='/public/assets/icons/clipBoard.png' alt="" />
                                       <p className='pl-2'>Home Testing</p>
                                       

                                    </button>
                                    {
                                       dropdownToggle ?
                                          <div className="dropdownMenuButton px-6" aria-labelledby="dropdownMenuButton" >
                                             <li onClick={dropdownHundler} className="my-4 hover:text-text-primary">
                                                <Link to="HomeTesting" className="dropdown-item my-2" >OverView</Link></li>
                                             <li onClick={dropdownHundler} className="my-4 hover:text-text-primary">
                                                <Link to="createTest" className="my-6 " >Test</Link></li>
                                                <li onClick={dropdownHundler} className="my-4 hover:text-text-primary">
                                                <Link to="facilityquestion" className="my-2 dropdown-item" >Packages</Link></li>
                                                <li onClick={dropdownHundler} className="my-4 hover:text-text-primary">
                                                <Link to="banner" className="my-2 dropdown-item" >Banners</Link></li>
                                          </div>
                                          : ""
                                    }
                                 </div>
                              </div>
                           </li>

                        </ul>
                        <h3 className='px-3 font-bold my-3'>ACCOUNT</h3>
                        <ul className='mb-10'>

                           {
                              Account.map((menu, index) => (
                                 <li key={index} className="px-3 py-1  hover:bg-gray-hover   hover:font-bold">
                                    <Link to={menu.links} className="flex items-center p-2 text-base  text-gray-900 rounded-lg hover:text-text-primary">
                                       <img className='' src={menu.img} alt="overview" />
                                       <p className='px-5'>{menu.title}</p>
                                    </Link>
                                 </li>
                              ))
                           }



                        </ul>
                        <hr className='border-gray-2' />

                     </div>
                  </aside>


               </>
               : <div className="flex flex-col items-center w-16 h-[53.3rem] overflow-hidden text-gray-700 bg-gray-1   rounded-3xl">
                  <img onClick={handleToggle} className="my-5" src="../assets/icons/logoMini.png" alt="" />


                  <div className="flex flex-col items-center mt-2 border-t border-gray-300">
                     {
                        MenuData.map((items, index) => (
                           <Link className='my-5' key={index} to={items.links}>
                              <img className='w-6 h-6' src={items.img} alt="sidebarIcons" />
                           </Link>
                        ))
                     }
                  </div>
                  <div className="flex flex-col items-center mt-2 border-t border-gray-300">
                     {
                        Account.map((items, index) => (
                           <Link className='my-5' key={index} to={items.links}>
                              <img className='w-5 h-5' src={items.img} alt="sidebarIcons" />
                           </Link>
                        ))
                     }
                  </div>

               </div>
         }
      </>
   )
}

export default SideBar