import React from 'react'
import {RecentPostData , Postcategoies} from '../../seed/seed'
const RecentPost = () => {
  return (
    <div className='flex flex-col p-3 font-Montserrat'>
        <div className=" flex justify-between items-center">
            <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
        </div>
        <div className="my-4 p-3">
            <h2 className='text-gray-4 my-3'>Recent Post</h2>
            {
                RecentPostData.map((post, index)=>(
                    <div className="flex gap-2 my-4" key={index}>
                        <div className="">
                            <img className='w-30rem h-10rem' src={post.img} alt={`post${index + 1}`} />

                        </div>
                        <div className="">
                            <h3 className='text-sm mb-1 text-gray-5 font-semibold'>{post.title}</h3>
                            <p className='text-sm text-gray-4'>{post.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="">
        <h2 className='text-gray-4 my-3'>Categories</h2>
            {
               Postcategoies.map((items,index)=>(
                 <div className="my-3" key={index}>
                   <a href="">
                    <img className='' src={items.img} alt={`catagoryPost${index}`} />
                   </a>
                 </div>
               ))
            }
        </div>
    </div>
  )
}

export default RecentPost