import React from 'react'
import { RecentPost } from '../components'

const Blogdetail = () => {
    return (
        <div className='font-Montserrat'>
            <div className="my-3">
                <h3 className='text-text-red-1 text-xl font-bold'>Blogs</h3>

            </div>
            <div className="grid grid-cols-3">
                <div className="grid-sprit">
                    <div className="">
                        <img className='w-[100%]' src="/public/assets/images/blogPost.png" alt="blogPost" />
                    </div>
                    <div className="shadow-lg px-5 py-6">
                        <h2 className='text-xl font-Montserrat font-medium text-black-2'>The Best Features Coming to iOS and Web design</h2>
                        <div className="my-3 flex gap-2 items-center text-sm">
                            <img src="/public/assets/images/user1.png" alt="userimg" />
                            <p className='text-gray-4'>by</p>
                            <h4 className='text-black-2 font-medium'>Ghani Pradita</h4>
                            <p className='text-gray-4 border-l-2 border-l-gray-2 pl-3'>Jan 10, 2020</p>

                        </div>
                        <div className="flex gap-2 my-3 text-sm">
                            <p className='text-blue-1 bg-blue-2 py-1 px-3 rounded-2xl'>Gaming</p>
                            <p className='text-blue-3 bg-dark-blue py-1 px-2 rounded-2xl'>Video</p>

                        </div>
                        <p className='mb-5 text-gray-5 text-sm font-light '>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let's clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That's what makes them working titles, instead of overarching topics.</p>
                        <div className="">
                            <h2 className='text-xl font-Montserrat font-medium text-black-2 mb-3'>Unprecedented Challenge</h2>
                            <ul className='text-gray-5 text-sm font-light'>
                                <li className='my-2'>- Preliminary thinking systems</li>
                                <li className='my-2'>- Bandwidth efficient</li>
                                <li className='my-2'>- Fully ethical life</li>
                                <li className='my-2'>- Social impact</li>
                                <li className='my-2'> - Thought partnership</li>
                                <li className='my-2'>- Green space</li>
                            </ul>
                        </div>
                        <div className="flex my-6">
                            <div className="w-[40%] flex justify-center items-center ">

                                <img className='w-[4rem] h-[4rem]' src="/public/assets/images/user7.png" alt="user" />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-Montserrat font-medium text-black-2'>Willie Clark</h3>
                                <p className='text-gray-5 text-sm font-light'>Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.</p>
                            </div>
                        </div>
                        <div className="border-t-2 border-gray-6 flex justify-between p-4">
                            <div className="flex gap-3">
                                <div className="flex ">
                                    <img className='mr-3' src="/public/assets/icons/message.png" alt="messageIcon" />
                                    <h4 className='text-black-2 font-medium'>19.1K</h4>

                                </div>
                                <div className="flex ">
                                    <img className='mr-3' src="/public/assets/icons/badge.png" alt="badgeIcon" />
                                    <h4 className='text-black-2 font-medium'>139</h4>

                                </div>
                            </div>
                            <div className="">
                                <img className='cursor-pointer' src="/public/assets/icons/share.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="my-6">
                        <h3 className='font-light mb-3'>Comment</h3>
                        <div className="shadow-lg rounded-lg p-3">
                            <div className="flex my-6 ">
                                <div className="w-[15%] pr-4 flex justify-end ">

                                    <img className='w-[2rem] h-[2rem]' src="/public/assets/images/user8.png" alt="user" />
                                </div>
                                <div className="">
                                    <div className="mb-3">
                                        <h3 className='text-xl font-Montserrat font-medium text-black-2'>Chad Alexander</h3>
                                        <p className='text-gray-5 text-sm font-light'>May 24, 2020</p>

                                    </div>
                                    <p className='text-gray-5 text-sm font-light'>A variation on the question technique above, the multiple-choice question great way to engage your reader.</p>
                                    <div className="flex gap-2 my-2">
                                        <img src="/public/assets/icons/leftArrow.png" alt="" />
                                        <p className='text-text-primary text-sm font-medium'>Reply</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <h3 className='font-light mb-3'>Leave a Comment</h3>
                        <div className="shadow-lg rounded-lg p-5">
                            <div className="flex gap-3 mb-5">
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                            </div>
                            <div className="w-[49%] mb-5">
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                            </div>
                            <div className="">
                                <textarea type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                            </div>
                            <div className="flex">
                                <input type="checkbox" className=' w-5 py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                                <label htmlFor="" className='pl-3 my-3 text-sm font-light text-black-2'>Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <div className="my-3">
                                <button className='rounded-md bg-text-primary text-white py-[0.5rem] px-5'>Post Comment</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <RecentPost />
                </div>
            </div>

        </div>
    )
}

export default Blogdetail