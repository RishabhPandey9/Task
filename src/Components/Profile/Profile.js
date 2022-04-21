import React, { useEffect, useState } from "react";
import Header from "../NavBar-Sidebar/Header";
import { selectHeader } from "../features/HeaderSlice";
import { useSelector } from "react-redux";
import comp from "./profile.jpeg";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import Cookies from "universal-cookie";
import logo from "../NavBar-Sidebar/HRI_Company_logo.png"

const cookies = new Cookies();

const Profile = () => {
  const [email,setEmail]= useState("")
  const [id,setId]= useState("")
  const [name,setName]= useState("")


  async function getData() {
    await axios
      .get("auth/user/profile", {
        headers: {
          Authorization: "Token " + cookies.get("token"),
        },
      })
      .then((resp) => {
        setEmail(resp.data.user.email)
        setId(resp.data.user.id)
        setName(resp.data.user.profile.name)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const currentState = useSelector(selectHeader);
  return (
    <>
      <Header />
      <div>
      <div className="pt-5 pb-20  bg-gray-100 px-4  md:px-10   w-full h-auto">
        <div
          className={
            !currentState?.show
              ? " lg:ml-72 ease-in duration-300 "
              : " ease-in  duration-300  ml-0 "
          }
        >
          <div className="bg-white px-4 md:px-20 pb-20 pt-8 w-full rounded-lg h-auto">
          <div>
            <div className="md:flex  justify-between">
              <div className="flex justify-center ">
                <div className="w-20">
                  <img
                    className="w-40 border-2 border-gray-600 rounded-full mt-8"
                    src={comp}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="md:ml-10 text-center md:text-left text-xl font-bold mt-8">{name}</div>
                <div className="flex mt-5 text-xs md:text-sm font-semibold mx-2 justify-center md:justify-start md:ml-10">
                  <div className="grid gap-y-5">
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Email ID</div>
                      <div>{email}</div>
                    </div>
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Contact</div>
                      <div>+91 9876543210</div>
                    </div>
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">DateofBirth</div>
                      <div>11/22/2022</div>
                    </div>
                  </div>
                  <div className="grid gap-y-5 ml-5 md:ml-20 ">
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Employee ID</div>
                      <div>maromanu563</div>
                    </div>
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Designation</div>
                      <div>Admin</div>
                    </div>
                    <div className="grid gap-y-2">
                      <div className="text-gray-400 ">Gender</div>
                      <div>Male</div>
                    </div>
                  </div>
                </div>
                <div className="md:ml-10 mt-10  font-semibold text-sm  ">
                  <div className="text-gray-400 ">About me</div>
                  <div className="md:w-full lg:w-1/2 mt-3">
                    I am a Designer and Developer at karmmaa Lab, I have an
                    experience in designing web dashboards, admin dashboards and
                    mobile wireframes etc... Bla Bla Bla Bla...........
                  </div>
                </div>
                <div className="md:ml-10  mt-8 flex justify-center md:justify-start font-semibold space-x-7 text-4xl">
                  <BsFacebook className="text-blue-600"/>
                  <BsLinkedin className="text-blue-700"/>
                  <BsGithub />
                </div>
              </div>
              <div className="">
                <div className=" mt-8 ">
                  <div className="flex cursor-pointer justify-center bg-slate-100 px-4 py-2 rounded-lg font-semibold text-blue-600 ">
                    Edit <AiOutlineEdit className="ml-2  text-xl " />
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="border-b-2 mt-8 border-gray-500"/>
            <div>
              <div className="md:ml-[120px] text-center md:text-left  text-xl font-bold mt-8">Company details</div>
              <div className=" md:ml-[120px] text-center md:text-left  mt-5 md:flex md:space-x-16">
                <div >
                  <div className="text-gray-400 font-semibold ">Company Logo</div>
                  <div className="flex justify-center mt-2"><img src={logo} alt=""/></div>
                </div>
                <div>
                  <div className="text-gray-400 font-semibold mb-2 mt-6 md:mt-0">Company Name</div>
                  <div className="  text-xl">Company name</div>
                </div>
                <div>
                  <div className="text-gray-400 font-semibold mb-2 mt-6 md:mt-0">Company Name</div>
                  <div className="  text-xl">Company Tagline shown here</div>
                </div>
              </div>
            </div>
       </div>
          </div>
         </div>
      </div>
       </div>
    </>
  );
};

export default Profile;
