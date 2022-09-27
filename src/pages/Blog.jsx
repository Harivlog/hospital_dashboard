import React from 'react'
import { RecentPost } from '../components'
import { blogCards } from '../seed/seed'
const Blog = () => {
    return (
        <>
            <div className="">
                <div className="my-3">
                    <h3 className='text-text-red-1 text-xl font-bold'>Blogs</h3>

                </div>
                <div className="grid grid-cols-4">
                    <div className="col-span-3 gap-4 grid grid-cols-2">
                        {

                            blogCards.map((blogItem, index) => (
                                <div className="font-Montserrat" key={index}>
                                    <div className="">
                                        <img className='w-full' src={blogItem.img} alt={`blog${index + 1}`} />
                                    </div>
                                    <div className="p-4 shadow-lg">
                                        <div className="">
                                            <h3 className='text-lg font-Montserrat font-normal text-black-2'>{blogItem.title}</h3>
                                            <div className="my-3 flex gap-2 items-center text-sm">
                                                <img src={blogItem.userImg} alt="userimg" />
                                                <p className='text-gray-4'>by</p>
                                                <h4 className='text-black-2 font-medium'>{blogItem.userName}</h4>
                                                <p className='text-gray-4 border-l-2 border-l-gray-2 pl-3'>{blogItem.date}</p>

                                            </div>
                                            <div className="flex gap-2 my-3 text-sm">
                                                <p className='text-blue-1 bg-blue-2 py-1 px-3 rounded-2xl'>{blogItem.field1}</p>
                                                <p className='text-blue-3 bg-dark-blue py-1 px-2 rounded-2xl'>{blogItem.feild2}</p>

                                            </div>
                                            <div className="mb-2">
                                                <p className='text-gray-5 text-sm font-normal'>{blogItem.discription}</p>
                                            </div>
                                            <div className="flex justify-between p-4 items-center mt-4 border-t-2 border-gray-6">
                                                <div className="flex ">
                                                    <img className='mr-3' src={blogItem.messageIcon} alt="messageIcon" />
                                                    <h4 className='text-black-2 font-medium'>{blogItem.comment}</h4>
                                                </div>
                                                <p className='font-sm'><a className='text-blue-3' href="">Read More</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="">
                        <RecentPost/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog