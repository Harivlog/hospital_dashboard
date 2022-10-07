import React from 'react'
import { HospitalsPackageData } from '../seed/seed'

const HospitalsPackage = () => {
  return (
    <div className='font-Montserrat'>
         <div className="my-3 flex justify-between items-center">
                    <h3 className='text-text-red-1 text-xl font-bold'>Hospitals Package</h3>
                    <img className='cursor-pointer' src="/assets/icons/redClose.png"  alt="close" />
                </div>
                <div className="flex flex-wrap justify-between px-16">
                       {
                        HospitalsPackageData.map((items,index)=>(
                            <div key={index} className="cursor-pointer my-3">
                                <div className="">
                                    <img src={items.img} alt="packageimage" />
                                </div>
                                <div className="p-5 shadow-lg">
                                    <h2 className='text-lg font-semibold text-black-2 mb-5'>{items.title}</h2>
                                    <hr />
                                    <div className="flex justify-between py-2">
                                        <div className="flex items-center">
                                            
                                            <img src="/public/assets/icons/blackEye.png" alt="views" />
                                            <p className='pl-2 font-semibold text-black-2'>{items.views} Views</p>
                                        </div>
                                        <div className="">
                                            
                                            <a href="" className='text-indigo-1 font-semibold'>Edit Package</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                       }
                </div>
    </div>
  )
}

export default HospitalsPackage