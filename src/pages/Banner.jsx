import React from 'react'

function Banner() {
    return (
        <>
            <div className="">
                <div className="my-3">
                    <h3 className='text-text-red-1 text-xl font-bold'>Create Banners</h3>

                </div>

                <div className="shadow-lg rounded-lg p-5 ">
                    <p className='font-light  text-gray-4'>user</p>
                    <div className="flex mb-5 ">
                        <div className=" pr-4 flex justify-end ">

                            <img className='w-[3rem] h-[3rem]' src="/public/assets/images/user8.png" alt="user" />
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <h3 className='text-xl font-Montserrat font-medium text-black-2'>Chad Alexander</h3>
                                <p className='text-gray-5 text-sm font-light'>May 24, 2020</p>

                            </div>



                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-4">

                    <div className="w-[80%]">
                        <h2 className='text-black text-2xl font-Montserrat font-medium'>Promo Banners</h2>
                        <div className="">
                            <div className="flex justify-between items-center my-10">
                                <div className="bg-[#ECECEC] w-52 h-52 flex justify-center items-center">
                                    <img src="../../public/assets/icons/plus.png" alt="plus" />
                                </div>
                                <div className="w-[60%] flex flex-col ">
                                    <label htmlFor="Link" className='text-[#5E5873]'>Link</label>
                                    <input className='border text-sm border-[#D8D6DE] rounded-md py-2 px-3' type="text" placeholder='https://hospitalsconnect.co/deals_discount' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-10">
                                <div className="bg-[#ECECEC] w-52 h-52 flex justify-center items-center">
                                    <img src="../../public/assets/icons/plus.png" alt="plus" />
                                </div>
                                <div className="w-[60%] flex flex-col ">
                                    <label htmlFor="Link" className='text-[#5E5873]'>Link</label>
                                    <input className='border text-sm border-[#D8D6DE] rounded-md py-2 px-3' type="text" placeholder='https://hospitalsconnect.co/deals_discount' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center my-10">
                                <div className="bg-[#ECECEC] w-52 h-52 flex justify-center items-center">
                                    <img src="../../public/assets/icons/plus.png" alt="plus" />
                                </div>
                                <div className="w-[60%] flex flex-col ">
                                    <label htmlFor="Link" className='text-[#5E5873]'>Link</label>
                                    <input className='border text-sm border-[#D8D6DE] rounded-md py-2 px-3' type="text" placeholder='https://hospitalsconnect.co/deals_discount' />
                                </div>
                            </div>
                          

                        </div>
                        <div className="">
                <button className="bg-blue-4 mx-2 text-white rounded-md py-2 px-4">Save Changes</button>
                <button className="border border-text-primary py-2 px-4 rounded-md text-text-primary">Cancel</button>
            </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner