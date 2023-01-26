import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  
    email: yup.string().email().required("Please enter your Email"),
    password: yup.string().min(6).required("Please Enter your password"),


    })

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
export const signupSchema = yup.object().shape({
    name: yup.string().min(3).required("Please enter your name"),
    email: yup.string().email().required("Please enter your Email"),
    number: yup.string().min(11).required("Please Enter your number").matches(phoneRegExp, 'Phone number is not valid'),
    password: yup.string().min(6).required("Please Enter your password"),
    cfrm_password : yup.string().required().oneOf([yup.ref("password"), null], "Password did'nt match")    

    })