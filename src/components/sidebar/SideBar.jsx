import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuData, Account } from './menuData'

const SideBar = () => {
   const [toggle, setToggle] = useState(true)
   const handleToggle = ()=> {
      setToggle(!toggle)
   }

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
                              <img className='w-6 h-6' src={menu.img} alt="overview" />
                              <p className='px-5'>{menu.title}</p>
                           </Link>
                        </li>
                     ))
                  }


               </ul>
               <h3 className='px-3 font-bold my-3'>ACCOUNT</h3>
               <ul className='mb-10'>

                  {
                     Account.map((menu, index) => (
                        <li key={index} className="px-3 py-1  hover:bg-gray-hover   hover:font-bold">
                           <Link to={menu.links} className="flex items-center p-2 text-base  text-gray-900 rounded-lg hover:text-text-primary">
                              <img className='w-6 h-6' src={menu.img} alt="overview" />
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