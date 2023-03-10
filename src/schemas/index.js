import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  
    email: yup.string().email().required("Please enter your Email"),
    password: yup.string().min(6).required("Please Enter your password"),


    })

   
    
export const signupSchema = yup.object().shape({
    name: yup.string().min(3).required("Please enter your name"),
    email: yup.string().email().required("Please enter your Email"),
 
    password: yup.string().min(6).required("Please Enter your password"),
    cfrm_password : yup.string().required().oneOf([yup.ref("password"), null], "Password did'nt match")    

    })