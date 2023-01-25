import React, {useState} from 'react'
import {HiOutlineMail, HiOutlineLockClosed, HiOutlineUserAdd, HiOutlinePhone} from 'react-icons/hi'
import { Link } from 'react-router-dom'
// React_carousel slider import
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img from '../assets/heroImg1.jpeg'
import img1 from '../assets/heroImg2.jpg'
import img2 from '../assets/myLogoImg.png'

const SignUp = () => {
  const [feildActive, setFeildActive] = useState('')

  return (
    <div className='flex w-full bg-white '>
     <div className='bg-[#6063fb] hidden md:flex  w-[50%] p-2'>
        <Carousel
        autoPlay={true}
        >
          <div className=''>
            <img className='w-[20%] h-[20%]' src={img} width={100} height={100}/>
             </div>
          <div className='text-white'>
          <img className='w-[20%] h-[20%]' src={img1} width={100} height={100}/>
            
             </div>

          <div className=' w-[50%] h-[20rem] flex justify-center items-center'>
          <img className='w-[100%] h-[100%]' src={img2} width={100} height={100}/>
            
             </div>

        </Carousel>

     </div>
    <div className='w-[100%]  md:w-[50%]  flex flex-col justify-center items-center my-12'>
        <h2 className='text-center font-semibold text-2xl popins-fonts'>
          SignUp FORM
        </h2>
        <form className='md:w-[70%] lg:w-[60%] '>
          <div >
            <label 
            htmlFor=""

            className='block roboto-fonts'
            >Name</label>
             <li 
            onClick={()=> setFeildActive('name')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'name' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='name'/>
            <HiOutlineUserAdd className={`text-gray-400 text-xl ${feildActive === 'name' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
          <div >
            <label 
            htmlFor=""

            className='block roboto-fonts'
            >User Email</label>
             <li 
            onClick={()=> setFeildActive('email')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'email' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='name'/>
            <HiOutlineMail className={`text-gray-400 text-xl ${feildActive === 'email' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
          <div >
            <label 
            htmlFor=""

            className='block roboto-fonts'
            >Phone Number</label>
             <li 
            onClick={()=> setFeildActive('number')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'number' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='text'/>
            <HiOutlinePhone className={`text-gray-400 text-xl ${feildActive === 'number' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
          <div className='my-2'>
            <label 
            htmlFor=""
            className='block roboto-fonts'
            >Password</label>
            <li 
            onClick={()=> setFeildActive('password')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'password' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='password'/>
            <HiOutlineLockClosed className={`text-gray-400 text-xl ${feildActive === 'password' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
          <div className='my-2'>
            <label 
            htmlFor=""
            className='block roboto-fonts'
            >Confirm Password</label>
            <li 
            onClick={()=> setFeildActive('crmpassword')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'crmpassword' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='crmpassword'/>
            <HiOutlineLockClosed className={`text-gray-400 text-xl ${feildActive === 'crmpassword' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
         
          <button className='w-[100%] roboto-fonts bg-gradient-to-r to-[#6063fb] from-blue-500 py-3 rounded-lg my-3 text-white btn btn-white btn-        animate'
          onClick={ console.log(window.location.href)}
          >Connect to Discover</button>
            <button className='w-[100%] roboto-fonts border-2 border-[#6063fb] py-3 rounded-lg my-3 text-[#6063fb]'>Connect with Google</button>
          <div  className="flex ">
          
          <p href='/' className=' text-[0.9rem]  roboto-fonts text-gray-400  '>Allready have an account </p>
            <Link to='/' className='pl-1 text-[0.9rem] roboto-fonts font-medium text-[#6063fb]'>Login</Link>
             
            </div>
        </form>
       </div>
    </div>
  )
}

export default SignUp