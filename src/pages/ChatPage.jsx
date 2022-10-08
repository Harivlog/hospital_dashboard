import React from 'react'
import { chatData } from '../seed/seed'

const ChatPage = () => {
  return (
    <div className='font-Montserrat'>
      <div className="my-3 flex justify-between items-center">
        <h3 className='text-text-red-1 text-xl font-bold'>Chat </h3>
      </div>
      <div className="border border-gray-3 rounded-2xl flex">
        <ul className="w-[30%] bg-gray-1 rounded-2xl scroll-0">
          {
            chatData.map((items, index) => (
              <li className=' border-b border-gray-3' key={index}>
                <div className="flex justify-between py-5  px-3">
                  <div className="flex ">
                    <div className="relative rounded-full">
                      <img className='status ' src={items.img} alt="userimg " />
                      <div className={`absolute top-1 rounded-full right-1 w-[0.4rem] h-[0.4rem]  ${items.status == 'online' ? 'bg-green-400' : 'bg-text-1'}`}></div>
                    </div>
                    <div className="ml-1">
                      <h2 className='text-sm text-text-1 font-semibold'>{items.name}</h2>
                      <p className='text-xs text-text-red-1 font-medium'>{items.specialist}</p>

                    </div>
                  </div>
                  <div className="">
                    <p className='text-xs text-text-1'>{items.duration}</p>
                  </div>
                </div>
              </li>
            ))
          }
         <div className=" py-5 px-3">
         <div className=" border border-gray-2 bg-white flex   py-3 px-3 rounded-xl font-normal">


<img className='w-4 h-4' src="/assets/icons/search.svg" alt="" />


<input className='w-full outline-none ml-1 text-xs placeholder:text-black-5' type="text" placeholder='Search doctor or medical department' />
</div>
         </div>
        </ul>

        <div className="relative w-[70%]">
          <div className="flex justify-between items-center py-5  px-3 border-b border-gray-3 ">
            <div className="flex ">
              <div className="relative rounded-full">
                <img className='status ' src="/public/assets/icons/img.png" alt="activeuser " />
                <div className={`absolute top-1 rounded-full right-1 w-[0.4rem] h-[0.4rem] `}></div>
              </div>
              <div className="ml-1">
                <h2 className='text-sm text-text-1 font-semibold'>Dr. Ibrahim Yekeni</h2>
                <p className='text-xs  font-medium'>Active 50 min ago</p>

              </div>
            </div>
            <div className="cursor-pointer">
              <img src="/public/assets/icons/threeDots.png" alt="dots" />
            </div>
          </div>
          <div className="border-t border-gray-3 absolute bottom-0 left-0 flex justify-between items-center w-full">
            <div className="flex py-5  px-3  gap-2 items-center">
              <div className="">
                <img className='cursor-pointer' src="/public/assets/icons/emoji.png" alt="emoji" />
              </div>
              <div className="w-[100%]">
                <input className='w-[100%] outline-none' type="text" placeholder='Start typing here' />
              </div>
            </div>
            <div className="border-l border-gray-3  py-5  px-3">
              <div className="bg-text-red-1 py-2 px-3 rounded-3xl ">
                <img className='cursor-pointer' src="/public/assets/icons/sendIcon.png" alt="send" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage