import React ,{useState} from 'react'
import ReactQuill from 'react-quill';
import "../../node_modules/react-quill/dist/quill.snow.css"
const EditBlog = () => {
    const [value, setValue] = useState('');
    EditBlog.modules = {
        toolbar: [
          [,{header : [3,4,5,6]},{font : []}],
          [{size : [],}],
          ["bold","italic","underline",],
          [{list : 'ordered'}, {list : "bullet"}],
          ["left"]
          [{ 'direction': 'ltr' }],
          ["clean"],
        
        ],

      };
      EditBlog.format = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        'align'
      ];
    return (
        <div className='font-Montserrat'>

            <div className="my-3">
                <h3 className='text-text-red-1 text-xl font-bold'>Edit/Create Blog</h3>

            </div>
            <div className="shadow-sm">
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
                    <div className=" ">
                        <div className="flex gap-3 mb-5">
                            <div className="w-full">
                                <label htmlFor="title" className=' text-sm font-light text-black-2'>Title</label>
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='The Best Features Coming to iOS and Web design' />
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className='text-sm font-light text-black-2'>Category</label>
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='Placeholder' />
                            </div>
                        </div>
                        <div className="flex gap-3 mb-5">
                            <div className="w-full">
                                <label htmlFor="title" className='text-sm font-light text-black-2'>Slug</label>
                                <input type="text" className='placeholder:text-sm w-[100%] py-1 px-3 border-2 border-gray-3 rounded-md outline-none' placeholder='the-best-features-coming-to-ios-and-web-design' />
                            </div>
                            <div className="w-full">
                                <label htmlFor="" className='text-sm font-light text-black-2'>Status</label>
                                <select className='text-gray-4 placeholder:text-sm w-[100%] py-[0.38rem] px-3 border-2 border-gray-3 rounded-md outline-none' name="" id="">
                                    <option className='peer-optional:text-gray-1' value="">Placeholder</option>
                                    <option value="">Placeholder1</option>
                                    <option value="">Placeholder2</option>

                                </select>
                            </div>
                        </div>


                    </div>
                    <div className="h-[12rem]">
                    <ReactQuill 
                        placeholder='' 
                        className='h-full placeholder:text-sm w-[100%] py-1 px-3  border-none rounded-md outline-none '
                        modules={EditBlog.modules}
                        formats = {EditBlog.formats}
                        theme="snow"
                        value={value} 
                        onChange={setValue} />
                    </div>
                    <div className="border-2 border-gray-1 rounded-lg p-6 my-16">
                        <h2 className='text-gray-5 text-xl font-medium'>Featured Image</h2>
                        <div className="my-3 flex gap-5">
                            <div className="">
                                <img src="/public/assets/images/blog11.png" alt="blog" />
                            </div>
                            <div className="">
                                <h4 className='text-gray-5 font-medium'>Main image:</h4>
                                <p className='text-xs text-gray-4'>Required image resolution 800x400, image size 10mb.</p>
                                <p className='text-text-primary my-2'>https://pixinvent.com/images/banner.jpg</p>
                                <div className="border-2 w-[60%] flex border-gray-2 py-1 rounded-md placeholder:text-sm pl-2 border-r-0">
                                    <input type="text" className="outline-none" placeholder='Choose FIle'/>
                                    <input type="file" name='browser'  /><span className='bg-text-primary text-white py-[0.7rem] px-[1rem] rounded-r-md  '>Browse</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                                <button className='rounded-md bg-text-primary text-white py-[0.5rem] px-5'>Save Changes</button>
                           
                                <button className='rounded-md border-2 border-text-primary text-text-primary py-[0.5rem] px-5 ml-4 font-medium'>Cancel</button>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlog