import React from 'react'
import { hiding, selectHeader, showing } from '../features/HeaderSlice';
import { useSelector,useDispatch } from 'react-redux';
import Header from '../NavBar-Sidebar/Header';

import {BsFillDiamondFill} from "react-icons/bs"
import {RiArrowDropDownLine} from "react-icons/ri"
import {IoBriefcaseOutline} from "react-icons/io5"
import {RiMoneyDollarBoxLine} from "react-icons/ri"
import {HiOutlineOfficeBuilding} from "react-icons/hi"
import {BsFileEarmarkText} from "react-icons/bs"
import {VscGraph} from "react-icons/vsc"
import {ImLocation2} from "react-icons/im"

const LiveJobs = () => {
  
  const currentState = useSelector(selectHeader);

  const dispatch = useDispatch();
 

  return (
    <>  
       
        <div className='pt-10 bg-gray-100 px-10   w-full h-auto'>
        <div className={!currentState?.show?' md:ml-72 ease-in duration-300 ' : ' ease-in  duration-300  ml-0 '}>
            <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>
            <div className='bg-white pt-5 px-5 rounded-lg'>
              <div className='flex justify-between'>
                <div className='text-lg font-semibold '>Jr. React Developer</div>
                <div className='flex text-green-400'><BsFillDiamondFill className='mt-1 mr-1'/> <div className='font-semibold'>Active </div><RiArrowDropDownLine className='text-black text-2xl'/></div>
              </div>
              <div className='flex text-sm space-x-4 mt-5'>
                <div className='flex'><IoBriefcaseOutline className='text-lg mr-2 text-gray-400'/> 0-2 Yrs</div>
                <div className='flex'><RiMoneyDollarBoxLine className='text-lg mr-2 text-gray-400'/>Non Discloser</div>
                <div className='flex'><HiOutlineOfficeBuilding className='text-lg mr-2 text-gray-400'/>Full Time - In Office</div>
              </div>
              <div className='flex mt-3 text-sm'><ImLocation2 className='text-lg mr-2 text-gray-400'/> Big Hall, MacTone, Bangalore, Karnataka, India...</div>
              <div className='flex  mt-3 text-sm space-x-8'>
                <div className='flex'> <BsFileEarmarkText className='text-lg mr-2 text-gray-400'/> Any Degree </div>
                <div className='flex'> <VscGraph className='text-lg mr-2 text-gray-400'/> React, Java Script, Blablabla </div>
              </div>
              <div className='mt-3 mb-4 text-sm text-gray-400'> 10 days ago</div>
            </div>


            </div>
          </div>
          </div>
          
    </>
  )
}

export default LiveJobs