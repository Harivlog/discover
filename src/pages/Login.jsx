import React,{ useState } from 'react'
// import Login from './Login'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import {HiOutlineMail, HiOutlineLockClosed} from 'react-icons/hi'

const Login = () => {
  const [feildActive, setFeildActive] = useState('')
  
  return ( 
    <>
    <div className='flex w-full  bg-white'>
    
    <div className='bg-[#6063fb] hidden md:flex w-[50%] p-2'>
     

    </div>
    <div className='h-[100vh] bg-white w-[100%] md:w-[50%] flex justify-center items-center'>
        
       
    <div className='w-[100%] flex flex-col justify-center items-center'>
        <h2 className='text-center font-semibold text-2xl popins-fonts'>
          LOGIN FORM
        </h2>
        <form className='w-[90%] md:w-[70%] lg:w-[60%]'>
          <div >
            <label 
            htmlFor=""

            className='block roboto-fonts'
            >User Email</label>
             <li 
            onClick={()=> setFeildActive('email')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'email' ? 'border-[#9b9dfd] bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='email'/>
            <HiOutlineLockClosed className={`text-gray-400 text-xl ${feildActive === 'email' ? 'text-[#6063fb]': ''}`}/>
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
            <HiOutlineMail className={`text-gray-400 text-xl ${feildActive === 'password' ? 'text-[#6063fb]': ''}`}/>
            </li>
          </div>
          <div className='text-right'>
            <a href='/' className=' text-[0.9rem] roboto-fonts text-gray-400 '>Forget Password</a>
            </div>
          <button className='w-[100%] roboto-fonts bg-gradient-to-r to-[#6063fb] from-blue-500 py-3 rounded-lg my-3 text-white btn btn-white btn-        animate'>Login to Discover</button>
            <button className='w-[100%] roboto-fonts border-2 border-[#6063fb] py-3 rounded-lg my-3 text-[#6063fb]'>Login with Google</button>
          <div  className="flex ">
          
          <p href='/' className=' text-[0.9rem]  roboto-fonts text-gray-400  '>Not have any account </p>
            <Link to='signup' className='pl-1 text-[0.9rem] roboto-fonts font-medium text-[#6063fb]'>Sign Up</Link>

            </div>
        </form>
       </div>
    </div>
    </div>
    </>
  )
}

export default Login