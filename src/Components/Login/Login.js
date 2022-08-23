
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [login,setLogin] = useState(true)
  const navigate = useNavigate();


  const [inpval, setInpval] = useState({
   
    email: "",
   firstName: '',
   lastName: '',
    password: ""
})



const [data,setData] = useState([]);
console.log(inpval);

const getdata = (e) => {
    // console.log(e.target.value);


    const { value, name } = e.target;
    // console.log(value,name);


    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })

}

const addData = (e) => {
    e.preventDefault();
    if (!login){

    const { name, email, date, password } = inpval;

    if (name === "") {
        toast.error(' name field is requred!',{
            position: "top-center",
        });
    } else if (email === "") {
         toast.error('email field is requred',{
            position: "top-center",
        });
    } else if (!email.includes("@")) {
         toast.error('plz enter valid email addres',{
            position: "top-center",
        });
    } else if (date === "") {
         toast.error('date field is requred',{
            position: "top-center",
        });
    } else if (password === "") {
         toast.error('password field is requred',{
            position: "top-center",
        });
    } else if (password.length < 5) {
         toast.error('password length greater five',{
            position: "top-center",
        });
    } else {
        console.log("data added succesfully");
      
        localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
        console.log('localStroage.getItem', localStorage.getItem('useryoutube'))
        // navigate('/home')
        setLogin(!login)
        toast.success('SignUp Succesfully', {
          position: "top-center",
      });

    }
  }else{e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
        toast.error('email field is requred', {
            position: "top-center",
        });
    } else if (!email.includes("@")) {
        toast.error('plz enter valid email addres', {
            position: "top-center",
        });
    } else if (password === "") {
        toast.error('password field is requred', {
            position: "top-center",
        });
    } else if (password.length < 5) {
        toast.error('password length greater five', {
            position: "top-center",
        });
    } else {

        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el, k) => {
                return el.email === email && el.password === password
            });

            if (userlogin.length === 0) {
                alert("invalid details")
                toast.error('Login', {
                  position: "top-center",
              });
            } else {
                console.log("user login succesfulyy");

                localStorage.setItem("user_login", JSON.stringify(userlogin))
                toast.success('Login', {
                  position: "top-center",
              });
              navigate('/home')
            }
        }
    }
}

}
  return (
    <>
    <div
      className="min-h-screen color flex flex-col items-center justify-center bg-gray-100"
    >
       <ToastContainer />
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-[400px]
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
         {login? "Welcome Back" : "Create Account"} 
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
        {login? <div> <span>Dont have Account </span><span onClick={() => setLogin(!login)} className="cursor-pointer font-semibold underline text-blue-600">Sign-Up</span></div> : <div> <span>Already have account ? </span><span onClick={() => setLogin(!login)} className="cursor-pointer font-semibold underline text-blue-600">Sign In</span></div>} 
         
        </div>

        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                onChange={getdata}
                  id="email"
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            {!login ?   <div className="flex space-x-1">
            <div className="flex flex-col mb-5">
              <label
                for="firstName"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >First Name:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="firstName"
                  onChange={getdata}
                  type="text"
                  name="First Name"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-4
                    pr-4
                    rounded-l-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                for="lastName"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Last Name:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="lastName"
                  onChange={getdata}
                  type="text"
                  name="lastName"
                  className="
                    text-sm
                    placeholder-gray-500
                   pl-4
                    pr-4
                   rounded-r-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            </div> : null }
          
          
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                onChange={getdata}
                  id="password"
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
              onClick={addData}
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span  className="mr-2 uppercase">{login?"Sign In" : 'Sign Up'}</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
     
      </div>
    </div>
     
    </>
  );
};

export default Login;
