
import LogImg from '../Login/LoginImg.png'
import * as React from 'react';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const ForgotPass = () => {

 
  
  return (
    <>
    <div className='mx-8 h-auto  md:mx-20 mt-36 md:mt-28  lg:mt-16'>
    <div className=' md:flex'>
        <div className="hidden md:flex md:flex-col w-1/2">
        <div className='flex md:mt-2'>
          <div className='md:text-lg lg:text-2xl xl:text-3xl lg:mt-1 font-semibold '>
          Welcome to 
          </div>
          <div  className='ml-1  md:text-xl lg:text-3xl xl:text-4xl font-semibold text-blue-700'>
          HRI Mybizmo
          </div>
        </div>
        <div className='text-slate-400 md:text-sm lg:text-lg'>Plan your next recruitment here</div>
        
        <div className=' mt-10 xl:mt-0 xl:pl-10 xl:pt-10 xl:pr-10 2xl:p-20'>
        <img className='w-full  ' src={LogImg} alt="" />
        </div>
        <div className='grid justify-end'>
        <div className='mt-2 text-xs lg:text-base text-slate-500'>
        Powered by HRI @MyBizmo
        </div>
        </div>
        </div>
        <div className='border-2 w-full py-5 px-5 md:w-1/2  rounded-lg border-blue-600 md:ml-20'>
          <div className='grid grid-cols-1 gap-y-4'>
          <div className=' md:mt-5 lg:mt-20 xl:mt-24 font-bold text-lg lg:text-2xl xl:text-3xl'>
          Admin Forgot Password
          </div>
          <div  className='mt-2 xl:mt-6'>
          
     
        <TextField
          className='w-full '
          label="Enter Email ID/ Phone Number"
          id="outlined-size-small"
        
          size="small"
        />
          </div>
         
        
          <div className='mt-6 xl:mt-6'>
          <Button className='w-full' variant="contained">Send</Button>
          </div>
          <Link to="/">
            <div>
            <button className='border-2 py-2 w-full hover:bg-slate-500 ease-in duration-200 hover:text-white  border-slate-300 rounded-lg text-xs text-slate-500' >Already have an account? Sign In</button>
            </div>
            </Link>
        </div>
        </div>
        </div>
        </div>
    
    </>
  )
}

export default ForgotPass