import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserAdd,
  HiOutlinePhone,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import { FadeCarousel, TextAnimationed } from "../components";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cfrm_password: "",
};

const SignUp = () => {
  const [feildActive, setFeildActive] = useState("");
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="flex w-full min-h-[100vh] bg-white_clr ">
      <div className="bg-primary_clr hidden md:flex flex-col  w-[50%] p-2 justify-center">
        <div className="  h-[3rem] flex justify-center ">
          <div className="  w-[80%]">
            <TextAnimationed />
          </div>
        </div>
        <FadeCarousel />
      </div>
      <div className="w-[100%]  md:w-[50%]  flex flex-col justify-center items-center my-2">
        <h2 className="text-center font-semibold text-2xl popins-fonts">
          CONNECT TO DISCOVER
        </h2>
        <form className="md:w-[70%] lg:w-[60%] " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="block roboto-fonts">
              Name
            </label>
            <li
              onClick={() => setFeildActive("name")}
              className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${
                feildActive === "name" ? "border-border_clr bg-input_field" : ""
              }  my-1 py-2 px-3 rounded-md`}
            >
              <input
                className="text-xl   outline-none roboto-fonts bg-transparent w-[90%]  "
                type="name"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiOutlineUserAdd
                className={`text-gray-400 text-xl ${
                  feildActive === "name" ? "text-primary_clr" : ""
                }`}
              />
            </li>
            {errors.name && touched.name ? (
              <p className="text-red-600">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="" className="block roboto-fonts">
              Email
            </label>
            <li
              onClick={() => setFeildActive("email")}
              className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${
                feildActive === "email"
                  ? "border-border_clr bg-input_field"
                  : ""
              }  my-1 py-2 px-3 rounded-md`}
            >
              <input
                className="text-xl   outline-none roboto-fonts bg-transparent w-[90%]  "
                type="name"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiOutlineMail
                className={`text-gray-400 text-xl ${
                  feildActive === "email" ? "text-primary_clr" : ""
                }`}
              />
            </li>
            {errors.email && touched.email ? (
              <p className="text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div className="my-2">
            <label htmlFor="" className="block roboto-fonts">
              Password
            </label>
            <li
              onClick={() => setFeildActive("password")}
              className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${
                feildActive === "password"
                  ? "border-border_clr bg-input_field"
                  : ""
              }  my-1 py-2 px-3 rounded-md`}
            >
              <input
                className="text-xl   outline-none roboto-fonts bg-transparent w-[90%]  "
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiOutlineLockClosed
                className={`text-gray-400 text-xl ${
                  feildActive === "password" ? "text-primary_clr" : ""
                }`}
              />
            </li>
            {errors.password && touched.password ? (
              <p className="text-red-600">{errors.password}</p>
            ) : null}
          </div>
          <div className="my-2">
            <label htmlFor="" className="block roboto-fonts">
              Confirm Password
            </label>
            <li
              onClick={() => setFeildActive("crmpassword")}
              className={`border-2 border-transparent flex justify-between items-center bg-gray-100 ${
                feildActive === "crmpassword"
                  ? "border-border_clr bg-input_field"
                  : ""
              }  my-1 py-2 px-3 rounded-md`}
            >
              <input
                className="text-xl   outline-none roboto-fonts bg-transparent w-[90%]  "
                type="password"
                id="cfrm_password"
                name="cfrm_password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiOutlineLockClosed
                className={`text-gray-400 text-xl ${
                  feildActive === "crmpassword" ? "text-primary_clr" : ""
                }`}
              />
            </li>
            {errors.cfrm_password && touched.cfrm_password ? (
              <p className="text-red-600">{errors.cfrm_password}</p>
            ) : null}
          </div>

          <button
            className="flex justify-center items-center w-[100%] roboto-fonts bg-gradient-to-r to-primary_clr from-blue-500 py-3 rounded-lg my-3 text-white_clr hover:text-primary_clr  border-2 border-transparent hover:border-primary_clr border-hover hover:to-white_clr hover:from-white_clr btn-white"
            onClick={console.log(window.location.href)}
            type="submit"
          >
            CONNECT TO DISCOVER
          </button>
          <button className="w-[100%] roboto-fonts border py-3 rounded-lg my-3 text-primary_clr hover:text-white_clr hover:bg-gradient-to-r to-primary_clr from-blue-500 transition-all">
            CONNECT WITH GOOGLE
          </button>
          <div className="flex ">
            <p
              href="/"
              className=" text-[0.9rem]  roboto-fonts text-gray-400  "
            >
              Already have an account{" "}
            </p>
            <Link
              to="/"
              className="pl-1 text-[0.9rem] roboto-fonts font-medium text-primary_clr"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
