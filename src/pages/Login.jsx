import React,{ useState } from 'react'
// import Login from './Login'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import {HiOutlineMail, HiOutlineLockClosed} from 'react-icons/hi'
import {loginSchema} from '../schemas'
// formik the form hook--------------
import { Formik,useFormik } from 'formik';


// initial value get formik-----------
const initialValues ={
  email : "",
  password : "",
}

const Login = () => {

  const [feildActive, setFeildActive] = useState('')
   
const {values, handleChange,handleSubmit,handleBlur,errors, touched} = useFormik({
    initialValues : initialValues,
    validationSchema : loginSchema,
    onSubmit: (values) =>{
      console.log("here are the login values : " + values.email + values.password)
    }
  })
  console.log(errors)
  return ( 
    <>
   
    <div className='flex w-full  bg-white'>
    
    <div className='bg-primary_clr hidden md:flex w-[50%] p-2'>
     

    </div>
    <div className='h-[100vh] bg-white_clr w-[100%] md:w-[50%] flex justify-center items-center'>
        
       
    <div className='w-[100%] flex flex-col justify-center items-center'>
        <h2 className='text-center font-semibold text-2xl popins-fonts'>
          LOGIN TO DISCOVER
        </h2>
        <form
        onSubmit={handleSubmit}
        className='w-[90%] md:w-[70%] lg:w-[60%]'>
          <div >
            <label 
            htmlFor=""

            className='block roboto-fonts'
            >Email</label>
             <li 
            onClick={()=> setFeildActive('email')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'email' ? 'border-border_clr bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input 
            className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='email'
            autoComplete='off'
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <HiOutlineMail  className={`text-gray-400 text-xl ${feildActive === 'email' ? 'text-primary_clr': ''}`}/>
            </li>
            {
              errors.email  && touched.email? 
             ( <p className='text-red-600'>{errors.email}</p>) 
             : null   
            }
          </div>
          <div className='my-2'>
            <label 
            htmlFor=""
            className='block roboto-fonts'
            >Password</label>
            <li 
            onClick={()=> setFeildActive('password')}
            className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${feildActive === 'password' ? 'border-border_clr bg-input_field': ''}  my-1 py-2 px-3 rounded-md`}>
            <input 
            className='text-xl   outline-none roboto-fonts bg-transparent w-[90%]  ' type='password'
            id='password'
            name='password'
            autoComplete='off'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            />
            <HiOutlineLockClosed className={`text-gray-400 text-xl ${feildActive === 'password' ? 'text-primary_clr': ''}`}/>
            </li>
            {
              errors.password  && touched.password? 
             ( <p className='text-red-600'>{errors.password}</p>) 
             : null   
            }

          </div>
          <div className='text-right'>
            <a href='/' className=' text-[0.9rem] roboto-fonts text-gray-400 '>Forget Password</a>
            </div>
          <button
           className='flex justify-center items-center w-[100%] roboto-fonts bg-gradient-to-r to-primary_clr from-blue-500 py-3 rounded-lg my-3 text-white_clr btn-white_clr hover:text-primary_clr border-2 border-transparent hover:border-primary_clr  hover:to-white_clr hover:from-white_clr      '
           type='submit'
           >LOGIN TO DISCOVER</button>
            <button className='w-[100%] roboto-fonts border-2 border-primary_clr py-3 rounded-lg my-3 text-primary_clr hover:text-white_clr hover:bg-gradient-to-r to-primary_clr from-blue-500'>LOGIN WITH GOOGLE</button>
          <div  className="flex ">
          
          <p href='/' className=' text-[0.9rem]  roboto-fonts text-gray-400  '>Not have any account </p>
            <Link to='signup' className='pl-1 text-[0.9rem] roboto-fonts font-medium text-primary_clr'>Register</Link>

            </div>
        </form>
       </div>
    </div>
    </div>
    </>
  )
}

export default Login