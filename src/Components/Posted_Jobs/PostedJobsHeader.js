import React, { useEffect, useState } from 'react'
import Header from '../NavBar-Sidebar/Header'
import { hiding, selectHeader, showing } from '../features/HeaderSlice';
import { useSelector,useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LiveJobs from './Cards';





const PostedJobsHeader = () => {

    const currentState = useSelector(selectHeader);

    const dispatch = useDispatch();
   

   

  return (
    <>
      
      
        <div className='bg-gray-100 w-full h-auto'>
        <div className={!currentState?.show?' md:ml-72 ease-in duration-300 ' : ' ease-in  duration-300  ml-0 '}>
           <div className='flex bg-white   justify-between'>
           <div className={!currentState?.show?'bg-white flex  lg:space-x-4 text-xs md:text-xs lg:text-xl  font-semibold p-1 text-gray-600  md:p-2 ':"bg-white flex  lg:space-x-4 text-xs md:text-lg lg:text-xl  font-semibold p-1 text-gray-600  md:p-2 "}>
                <div className={!currentState?.show?'p-3 rounded-lg md:px-3 lg:px-8 hover:bg-slate-100 hover:text-blue-700':'p-3 rounded-lg md:px-8 hover:bg-slate-100 hover:text-blue-700'}>Live Jobs</div>
                <div className={!currentState?.show?'p-3 rounded-lg md:px-3 lg:px-8 hover:bg-slate-100 hover:text-blue-700':'p-3 rounded-lg md:px-8 hover:bg-slate-100 hover:text-blue-700'}>Requested to Admin</div>
                <div className={!currentState?.show?'p-3 rounded-lg md:px-3 lg:px-8 hover:bg-slate-100 hover:text-blue-700':'p-3 rounded-lg md:px-8 hover:bg-slate-100 hover:text-blue-700'}>Old Job Posts</div>    
            </div>
            <div className={!currentState?.show?'mt-1 mr-2 md:mt-3 lg:mt-4 md:mr-3 lg:mr-10':'mt-1 mr-2 md:mt-4 md:mr-10'} >
            <Button className='w-auto ' size="small" variant="contained">Add New Position</Button>
            </div>
            </div>    
        </div>
        </div>
    </>
  )
}

export default PostedJobsHeader