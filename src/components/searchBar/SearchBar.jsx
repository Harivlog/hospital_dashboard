import React from 'react'
const adminUser = {
    img : '',
    name : "Joseph Obisanya",
    title : 'Super Admin'
}
const SearchBar = () => {
  return (
    <div className=' bg-gray-1 h-20 2xl:h-28 w-[100%] px-5 flex flex-row justify-between items-center rounded-3xl'>
        <div className=" border border-gray-2 bg-white flex  w-[70%] p-3  2xl:p-5 rounded-xl font-normal">
            
                 
                         <img src="/assets/icons/search.svg" alt="" /> 
                         
            
            <input  className='w-full text-lg outline-none ml-2 2xl:text-2xl' type="text" placeholder='Search pathology results' />
        </div>
        <div className="border-2 border-gray-2 p-2 rounded-full">
            <img className='w-5 h-5 2xl:w-7 2xl:h-7' src="/assets/icons/alert1.png" alt="alert" />
        </div>
        <div className="flex justify-around  w-[22%] border-l-2 border-gray-2 ">
            <div className="">
                 {
                    adminUser.img ? <img src={adminUser.user} className="w-10 h-10 2xl:w-14 2xl:h-14" alt="" /> : <div className= '2xl:w-14 2xl:h-14 w-10 h-10 bg-gray-2 rounded-full'></div>
                 }
                
            </div>
            <div className="">
                <h3 className=' font-bold leading-5 text-black-1 2xl:text-xl '>{adminUser.name}</h3>
                <p className='text-sm text-text-primary 2xl:text-lg'>{adminUser.title}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBar