import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "./HRI_Company_logo.png";
import profile from "./profile.png";
import { NavLink } from "react-router-dom";

import { AiOutlineUserAdd } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { hiding, selectHeader, showing } from "../features/HeaderSlice";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const Header = () => {
  const dispatch = useDispatch();
  const currentState = useSelector(selectHeader);

  const [nav, setNav] = useState(true);
  const [active,setActive] = useState("Posted Jobs")

  const visible = () => {
    setNav(!nav);

    dispatch(
      showing({
        show: true,
      })
    );

    if (currentState?.show === true) {
      dispatch(hiding());
    }
  };
  let activeStyle = {
    backgroundColor: "rgb(241,245,249)",
    color: "#1B77AA",
    borderRadius: "5px",
  };

  useEffect(() => {}, [nav,active]);
  return (
    <>
      <div  className=" z-10 bg-white flex justify-between border-b-4  w-full h-auto fixed  top-0 ">
        <div className=" md:space-x-1  mx-4 md:mx-5 mb-2 flex  ">
          <div className="header_nav_icon_div my-4 cursor-pointer ">
            {nav ? (
              <MdOutlineClose
                onClick={visible}
                className="ease-in duration-300 text-2xl overflow-auto font-extralight header_nav_icon"
              />
            ) : (
              <HiOutlineMenu
                onClick={visible}
                className="ease-in   overflow-auto duration-300 header_nav_icon text-2xl font-extralight"
              />
            )}
          </div>

          <div className="logo-container w-full flex mt-3 md:mt-2 md:space-x-2 text-sm sm:text-md md:text-xl lg:text-xl px-2">
            <div>
              <img
                src={logo}
                alt=""
                className="h-7 md:h-9 lg:h-10   p-[2px] rounded-full"
              />
            </div>
            <p className="font-semibold text-xs md:text-lg text-blue-700  mt-3 ">
              HR Intelligent Company
            </p>
          </div>
        </div>
        <div className="space-x-3  ">
          <div className="space-x-2 flex justify-end mt-3  w-full">
            <div className="">
              {" "}
              <Avatar
                src={cookies.get("profileImage")}
                className=" mr-4 md:mr-0 border-2 border-slate-500"
              />
            </div>
            <div className="hidden md:flex">
              <div>
                {" "}
                <div className="text-xs font-semibold   md:text-base lg:text-lg w-full mt-2">
                  {cookies.get("profileName")}
                </div>
              </div>
              <div>
                <ArrowDropDownIcon className="arrow_icon mt-3 cursor-pointer mr-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={
          nav
            ? " z-10 overflow-y-auto w-72 bg-white fixed sidebar_parent_div  pl-5 pr-5 pt-2  border-r-4  h-full  ease-in duration-300 "
            : " z-10 w-72 bg-white overflow-y-auto fixed  h-full  transform -translate-x-full space-y-4 ease-in duration-300"
        }
      >
        <div className="flex flex-col sidebar_options_div hover:rounded text-sm text-gray-600 space-y-1 mx-3 ">
          <div>
          <NavLink to="/Jobs" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700">
              <RiDashboardFill className=" text-xl option_icon"/>
              <div className="option_title">
                <div className="single_option_anchor hover:text-sky-700">
                  Posted Jobs
                </div>
              </div>
            </div>
          </NavLink>
          </div>
          <NavLink to="/ProfileShearedByAdmin" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
          <div
             className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
          >
            <AiOutlineUserAdd className=" text-xl option_icon" />
            <div className="option_title ">
              <div className="single_option_anchor hover:text-sky-700">
                Profiles shared by admins
              </div>
            </div>
          </div>
          </NavLink>
          
          <NavLink to="/CompanyProfile" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div
               className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
            >
              <RiProfileLine className="text-xl option_icon" />
              <div className="option_title">
                <div className="single_option_anchor hover:text-sky-700">
                  Company Profile
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/Profile" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div
               className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
            >
              <IoMdPerson className="text-xl option_icon" />
              <div className="option_title">
                <div className="single_option_anchor hover:text-sky-700">
                  My Profile
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/Message" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div
               className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
            >
              <MdMessage className="text-xl option_icon" />
              <div className="option_title">
                <div className="single_option_anchor hover:text-sky-700">
                  Message
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/schedule_meets/upcoming" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
          <div
            className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
          >
            <BiNotepad className="text-xl option_icon" />
            <div className="option_title">
              <div className="single_option_anchor hover:text-sky-700">
                Schedule meets
              </div>
            </div>
          </div>
          </NavLink>
          <NavLink to="/Settings" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
          <div
           className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
          >
            <AiTwotoneSetting className="text-xl option_icon" />
            <div className="option_title">
              <div className="single_option_anchor hover:text-sky-700">
                Setting
              </div>
            </div>
          </div>
          </NavLink>
          <NavLink to="/HelpFaq" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
          <div
           className="single_option_div p-3 cursor-pointer font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
          >
            <FiHelpCircle className="text-xl option_icon" />
            <div className="option_title">
              <div className="single_option_anchor hover:text-sky-700">
                Help
              </div>
            </div>
          </div>
          </NavLink>
          <NavLink to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            <div
               className="single_option_div p-3 cursor-pointer mt-8 font-semibold flex space-x-2 hover:bg-slate-100 hover:rounded hover:text-sky-700"
            >
              <BiLogOut className="text-xl option_icon" />
              <div className="option_title">
                <div className="single_option_anchor ">
                  Logout
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
