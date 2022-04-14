
import LogImg from './LoginImg.png'
import * as React from 'react';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import {BsApple} from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  
  return (
    <>
    <div className='mx-8 h-auto  md:mx-20 mt-10 md:mt-12 lg:mt-16'>
    <div className=' md:flex'>
        <div className="hidden md:flex md:flex-col w-1/2">
        <div className='flex md:mt-16 lg:mt-2'>
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
          <div className='font-bold text-lg lg:text-2xl xl:text-3xl'>
          Login as Admin
          </div>
          <div  className='xl:mt-6'>
          
     
        <TextField
          className='w-full '
          label="Enter Email ID/ Phone Number"
          id="outlined-size-small"
        
          size="small"
        />
          </div>
          <div>
          <FormControl className='w-full' variant="outlined">
          <InputLabel size="small"  htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
           
            size="small"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </div>
          <div className='grid justify-end'>
          <Link to="/ForgotPass">
          <div className='text-sm text-slate-500 cursor-pointer'>
          Forgot Password? 
          </div>
          </Link>
          </div>
          <div className='mt-2 xl:mt-6'>
          <Button className='w-full' variant="contained">Login</Button>
          </div>
            <div>
              <Link to="/Signup">
            <button className='border-2 hover:bg-slate-500 ease-in duration-200 hover:text-white py-2 w-full border-slate-300 rounded-lg text-sm text-slate-500' >Not a Member? Sign Up</button>
              </Link>
            </div>
            <div className='grid justify-center'>
            <div className='text-slate-600 font-semibold text-sm'>
            Or login with
            </div>
            </div>
            <div className='flex justify-between mx-5'>
              <div>
                <button className='border-2 px-2 py-1 xl:px-5 xl:py-2 xl:text-lg rounded border-slate-400'><FcGoogle/></button>
              </div>
              <div>
                <button className='text-blue-600 border-2 xl:px-5 xl:py-2 xl:text-lg px-2 py-1 rounded border-slate-400'><BsFacebook/></button>
              </div>
              <div>
                <button className='text-slate-500 border-2 px-2 xl:px-5 xl:py-2 xl:text-lg py-1 rounded border-slate-400'><BsApple/></button>
              </div>
            </div>
            <div className='flex justify-center font-semibold text-xs xl:text-sm text-center'>
              <div>
              The&nbsp;
              </div>
              <div className='text-blue-700'>
              terms of use&nbsp;
              </div>
              <div>
              and&nbsp;
              </div>
              <div className='text-blue-700 '>
              our Policy
              </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login