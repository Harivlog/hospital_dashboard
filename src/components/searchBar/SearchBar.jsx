import React from 'react'
const adminUser = {
    img : '',
    name : "Joseph Obisanya",
    title : 'Super Admin'
}
const SearchBar = () => {
  return (
    <div className=' bg-gray-1 h-20 w-[100%] px-5 flex flex-row justify-between items-center rounded-3xl'>
        <div className=" border border-gray-2 bg-white flex  w-[70%] p-3 rounded-xl font-normal">
            
                 
                         <img src="/assets/icons/search.svg" alt="" /> 
                         
            
            <input  className='w-full outline-none ml-2' type="text" placeholder='Search pathology results' />
        </div>
        <div className="border-2 border-gray-2 p-2 rounded-full">
            <img className='w-5 h-5' src="/assets/icons/alert1.png" alt="alert" />
        </div>
        <div className="flex justify-around  w-[22%] border-l-2 border-gray-2 ">
            <div className="">
                 {
                    adminUser.img ? <img src={adminUser.user}  alt="" /> : <div className='w-10 h-10 bg-gray-2 rounded-full'></div>
                 }
                
            </div>
            <div className="">
                <h3 className='text-black font-bold leading-5 text-black-1'>{adminUser.name}</h3>
                <p className='text-sm text-text-primary'>{adminUser.title}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBar