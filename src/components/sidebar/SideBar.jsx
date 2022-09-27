import React from 'react'
import { Link } from 'react-router-dom'
import { MenuData , Account } from './menuData'

const SideBar = () => {
  return (
    <>
        
<aside className="w-64 h-[53.3rem] bg-gray-1 rounded-3xl relative" aria-label="Sidebar">
   <div className="overflow-y-auto py-4   rounded dark:bg-gray-800">
      <ul className="space-y-2">
         <li className='flex justify-center items-center mb-4'>
           <a href="">
            <img src="/public/assets/icons/rightLeftArrow.png" alt="logo" />
           </a>
         </li>
         <hr className='border-gray-2'/>
         {
            MenuData.map((menu ,index)=>(
                <li key={index} className="px-3 py-1  hover:bg-gray-hover  hover:text-text-primary hover:font-bold">
                <a href="#" className="flex items-center p-2 text-base  text-gray-900 rounded-lg   ">
                  <img className='w-6 h-6' src={menu.img} alt="overview" />
                  <p className='px-5'>{menu.title}</p>
                </a>
             </li>
            ))
         }
        
        
      </ul>
      <h3 className='px-3 font-bold my-3'>ACCOUNT</h3>
      <ul className='mb-10'>
     
         {
            Account.map((menu ,index)=>(
                <li key={index} className="px-3 py-1 hover:bg-gray-hover  hover:text-text-primary hover:font-bold">
                <a href="#" className="flex items-center p-2 text-base hover:font-bold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100  dark:hover:bg-gray-700">
                  <img className='w-6 h-6' src={menu.img} alt="overview" />
                  <p className='px-5'>{menu.title}</p>
                </a>
             </li>
            ))
         }
        
        
      
      </ul>
      <hr className='border-gray-2'/>

   </div>
</aside>

    </>
  )
}

export default SideBar