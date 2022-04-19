import React, { useEffect, useState } from "react";
import Header from "../NavBar-Sidebar/Header";
import { hiding, selectHeader, showing } from "../features/HeaderSlice";
import { useSelector, useDispatch } from "react-redux";
import comp from "./CompPng.png";
import { AiFillStar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {RiShareForwardFill} from "react-icons/ri"
import {AiOutlineEdit} from "react-icons/ai"
import axios from "axios";
import Cookies from "universal-cookie";


const cookies = new Cookies();

const CompanyProfile = () => {

    const [name,setName] =useState("")
    const [founder,setFounder] =useState("")
    const [ceo,setCoe] =useState("")
    const [number,setNumber] =useState("")
    const [location,setLocation] =useState("")
    const [logo,setLogo] =useState("")
    const [sector,setSector] =useState("")
    const [data,setData] =useState([])
        
    
    async function getData(){
        await axios
          .get("hri_company/company", {
            headers: {
              Authorization: "Token " + cookies.get("token"),
            },
          })
          .then((resp) => {
            
            console.log(resp.data);
            setData(resp.data)
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
      useEffect(()=>{
        getData();
      },[])

  const currentState = useSelector(selectHeader);
  return (
    <>
      <Header />
        {data.map((items) =>
        
        
        {
            return (
       
      <div key={items.id} className="pt-5 pb-20  bg-gray-100 px-4  md:px-10   w-full h-auto">
        <div
          className={
            !currentState?.show
              ? " lg:ml-72 ease-in duration-300 "
              : " ease-in  duration-300  ml-0 "
          }
        >
          <div className="bg-white px-4 md:px-12 pb-20 pt-8 w-full rounded-lg h-auto">
            <div className="md:flex  justify-between">
            <div className=" md:flex">
              <div className="w-12">
                <img src={items.company_logo} alt="" />
              </div>
              <div className="md:ml-5">
                <div className="font-semibold mt-2 md:mt-0 text-lg md:text-2xl">{items.name}</div>
                <div className="flex text-sm mt-1">
                  <div className="flex text-yellow-400 ">
                    <AiFillStar />
                    <AiFillStar /> <AiFillStar /> <AiFillStar />
                    <AiFillStar className="text-gray-400" />
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">
                    4.0 (321 Ratings)
                  </div>
                </div>
              </div>
            </div>
            <div className="">
                <div className="lg:flex mt-2 lg:mt-0 lg:space-x-4 lg:space-y-0 space-y-2">
                    <div className=" flex justify-center bg-slate-100 px-4 py-2 rounded-lg font-semibold text-blue-600 text-sm">Share company profile <RiShareForwardFill className="ml-2 text-lg "/> </div>
                    <div className="flex justify-center bg-slate-100 px-4 py-2 rounded-lg font-semibold text-blue-600 text-sm">Edit <AiOutlineEdit className="ml-2 text-lg "/></div>
                </div>
                <div></div>
            </div>
            </div>
            <div className="flex mt-5 text-sm font-semibold ml-2 md:ml-20">
              <div className="grid gap-y-5">
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">CEO</div>
                  <div>{items.company_ceo}</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Human Resources (HR)</div>
                  <div>{items.contact_person}</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Established In</div>
                  <div>{items.established_in.slice(0,4)}</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Working Sector</div>
                  <div>{items.working_sector}</div>
                </div>
              </div>
              <div className="grid gap-y-5 ml-20 md:ml-40">
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Founder</div>
                  <div>{items.company_founder}</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">HR Office contact</div>
                  <div>{items.contact_number}</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Employees</div>
                  <div>200 - 500</div>
                </div>
                <div className="grid gap-y-2">
                  <div className="text-gray-400 ">Location</div>
                  <div className="flex">
                    <GoLocation className="text-gray-400 text-2xl md:text-xl  mr-2" />{" "}
                    <div className="w-2/3">
                      {items.address}  {items.city}, {items.state}, {items.country}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:ml-20 mt-5 font-semibold text-sm  ">
              <div className="text-gray-400 ">Company Description</div>
              <div className="md:w-1/2 mt-3">
                ABC company works for clients in USA, England, Iceland and many
                more company around the world, ABC Company never loss his
                promise that to satisfice clients all the time. Join ABC Company
                now to build next great things that change the way we live.
              </div>
            </div>
            <div className="md:ml-20 mt-5 font-semibold text-sm  ">
              <div className="text-gray-400 ">Company Social media</div>
              <div className={!currentState?.show?"grid xl:grid-cols-2 lg:w-4/5 xl:w-3/5 mt-3 gap-3":"grid lg:grid-cols-2 lg:w-4/5 xl:w-3/5 mt-3 gap-3"}>
                <div className="flex border-2 p-2 rounded-lg pl-4"><FcGoogle className="text-xl mr-2"/>www.soandsocompany.com</div>
                <div className="flex border-2 p-2 rounded-lg pl-4"><BsFacebook className="text-xl mr-2 text-blue-600"/>facebook.com/soandsocompany</div>
                <div className="flex border-2 p-2 rounded-lg pl-4"> <BsLinkedin className="text-xl mr-2 text-blue-600"/> linkedin.com/soandsocompany</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
         ) }
       )}
    </>
  );
};

export default CompanyProfile;
