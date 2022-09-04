
import React from 'react';

import { useNavigate } from "react-router-dom";
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

const useStyles = makeStyles({
  header: {
      backgroundColor: '#212121',
  },
  spacing :{
      paddingLeft: 20,
      color: '#fff',
      fontSize: '18px',
      textDecoration: 'none',
  }
});

const Home = () => {
    const navigate = useNavigate();
    const classes = useStyles();
   
  return (
    <>
   <Navbar/>
   <div className='grid grid-cols-2  container mt-10 mx-auto'>
   <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
   
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Page</h5>

<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jump to About Page</p>
<div onClick={() => navigate('/about')} class="inline-flex cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   About Page
   <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</div>
</div>
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
   
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Head & Tail Page</h5>

<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jump to Head & Tail Page</p>
<div onClick={() => navigate('/head')}  class="inline-flex cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Head & Tail Page
   <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</div>
</div>
   </div>
   
    </>
  )  
}

export default Home