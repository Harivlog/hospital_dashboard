import React, { useState } from 'react'
import { galleryFilterData } from '../seed/seed'

const HomeTesting = () => {

  const [galleryImage, setgalleryImage] = useState(galleryFilterData)
  const [activeFilter, setactiveFilter] = useState('All')
  
  const filterData = (data) =>{
    setactiveFilter(data)
    setgalleryImage(galleryFilterData)
    const itemCategory = galleryFilterData.filter((item)=>{
      return item.category == data
    })
    if(data == 'All'){
    setgalleryImage(galleryFilterData)

    }
    else{

      setgalleryImage(itemCategory)
    }
    
  }
 

  return (
    <>
      <div className="font-monseperat">
        <div className="my-3">
          <h3 className='text-text-red-1 text-xl font-bold'>Home Testing</h3>

        </div>
        <div className="flex justify-between items-center border-b-2 border-[#393C49] py-3">
          <div className="flex gap-7">
           {
            ['All','Covid','Biopsy','Biofluid','Imaging','Packages'].map((items,index)=>(
              <button className={`font-medium text-[${activeFilter == items ? 'red' : ''}] `} onClick={()=> filterData(items)}>{items}</button>
            ))
           }
          
          
          </div>
          <div className="">
            <button className='bg-[#05B1F3] flex  items-center py-3 px-6 text-white rounded-lg'><img className='mr-2' src="/public/assets/icons/manage.png" alt="" /> Manage Category</button>
          </div>
        </div>
        <div className="flex justify-center items-center my-5">
          <div className="flex w-[85%] flex-wrap gap-3">
            <div className="bg-[#F2F2F2] border-dashed border-2 border-[#2F80ED] rounded-lg w-[25%] flex justify-center items-center cursor-pointer">
              <div className="flex flex-col justify-center items-center">
              <img src="/public/assets/icons/bluePlus.png" alt="" />
               <p>Add new Test</p>
              </div>
            </div>
            {
              galleryImage.map((items,index)=>(
                <div className="rounded-xl w-[25%]" key={index}>
                  <div className="bg-[#F2F2F2] rounded-t-lg">
                    <div className="py-5 px-8">
                      <div className="flex justify-center items-center">
                      <img className='w-28 h-32' src={items.image} alt="" />

                      </div>
                      <div className="">
                        <h3 className='text-center font-medium text-sm'>{items.testCategory}</h3>
                        <div className="text-center">
                          <span className='text-[#FF0000]'>{items.price}</span>
                          <span className='font-bold px-1'>.</span>
                          <span className='text-[#05B1F3]'>{items.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                  <button className='bg-[#05B1F3] flex justify-center items-center py-3 w-full px-6 text-white rounded-b-lg'><img className='mr-2' src="/public/assets/icons/edit2.png" alt="" /> Edit Test</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTesting