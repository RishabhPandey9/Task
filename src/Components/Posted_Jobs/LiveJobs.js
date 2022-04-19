import React from 'react'
import Header from '../NavBar-Sidebar/Header'
import Cards from './Cards'
import PostedJobsHeader from './PostedJobsHeader'
import { hiding, selectHeader, showing } from '../features/HeaderSlice';
import { useSelector,useDispatch } from 'react-redux';

const LiveJobs = () => {
    const currentState = useSelector(selectHeader);

    const dispatch = useDispatch();

  return (
    <>
        <Header/>
        
        <PostedJobsHeader/>
        <Cards/>
        
    </>
  )
}

export default LiveJobs