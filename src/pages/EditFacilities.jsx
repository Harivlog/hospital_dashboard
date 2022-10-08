import React from 'react'
import { servicesData } from '../seed/seed'

const EditFacilities = () => {
    return (
        <div className='font-Montserrat'>
            <div className="my-3 flex justify-between items-center">
                <h3 className='text-text-red-1 text-xl font-bold'>Edit Facilities </h3>
            </div>
            <div className=" w-full flex justify-center items-center">
                <div className="w-[80%]">
                    <input type="text" className='w-[40%] border border-gray-8 rounded-md py-1 px-2' placeholder='Evercare Hospital' />
                    <div className="my-6 flex justify-center">
                        <div className="w-[70%] ">
                            <h2 className='text-gray-5 text-xl font-medium'>Featured Image</h2>
                            <div className="my-3 flex gap-5">
                                <img src="/public/assets/images/blog11.png" alt="" />
                                <div className="w-[100%]">
                                    <h4 className='text-gray-5 font-medium'>Main image:</h4>
                                    <p className='text-xs text-gray-4'>Required image resolution 800x400, image size 10mb.</p>
                                    <p className='text-text-primary my-2'>https://pixinvent.com/images/banner.jpg</p>

                                    <div className="border-2  flex border-gray-2  rounded-md placeholder:text-sm pl-2 border-r-0">
                                        <input type="text" className="outline-none w-[100%]" placeholder='Choose FIle' />
                                        <input type="file" className='w-[0%]' name='browser' /><span className='bg-text-primary text-white py-[0.7rem] px-[1rem] rounded-r-md  '>Browse</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="" className='text-black'>Address</label>
                        <input type="text" className='w-[40%] border border-gray-8 rounded-md py-1 px-2' />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="" className='text-black'>About Us</label>
                        <textarea  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet eu, egestas mi. Pharetra, aenean ut facilisis fermentum cursus a volutpat. Elementum etiam felis semper eget. Curabitur tempus, quis id vestibulum sit ut pellentesque tincidunt est. Vel suspendisse integer non blandit. Lobortis proin quis tincidunt sed vitae. Amet arcu dolor sagittis vitae tellus malesuada. A scelerisque dolor nibh pharetra, egestas faucibus nunc faucibus.


                        Urna, et egestas erat sit sed porta nisi. Sed volutpat, eget quis congue curabitur eget convallis. Cum penatibus pharetra, et ut vitae. Amet lectus elit rhoncus sed porta diam cras pellentesque. Ac natoque varius tellus blandit dignissim pellentesque. Facilisis ligula donec risus quis. Euismod vitae dolor ornare sed. Sed eget at porttitor orci ultrices nisl. Habitant purus pharetra aliquam morbi urna. Sed volutpat platea vel semper aenean volutpat consectetur cursus tincidunt. Pretium dolor sed ipsum suspendisse. Amet eget ' type="text" className='min-h-auto border border-gray-8 rounded-md py-2 px-6' />
                    </div>
                    <div className="">
                        <label htmlFor="" className='text-black'>Services</label>
                        <div className="flex  justify-center items-center py-4">

                            <div className="flex flex-wrap justify-between gap-5 w-[100%]">
                                {
                                    servicesData.map((items, index) => (
                                        <div className="border border-black rounded-3xl py-1 w-[30%] flex items-center justify-center" key={index}>
                                            <p className='text-black'>{items.serviceName}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <label htmlFor="" className='text-black'>Top Evercare Doctors</label>
                    <div className="flex justify-between items-center my-3">
                        <div className="bg-gray-9 w-[30%] h-[13rem] flex  justify-center items-center ">
                            <img src="/public/assets/icons/plus.png" alt="add" />
                        </div>
                        <div className="bg-gray-9 w-[30%] h-[13rem] flex  justify-center items-center ">
                            <img src="/public/assets/icons/plus.png" alt="add" />
                        </div>
                        <div className="bg-gray-9 w-[30%] h-[13rem] flex  justify-center items-center ">
                            <img src="/public/assets/icons/plus.png" alt="add" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditFacilities