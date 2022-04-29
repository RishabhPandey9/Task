import React, { useEffect, useState } from "react";
import Header from "../NavBar-Sidebar/Header";
import { selectHeader } from "../features/HeaderSlice";
import { useSelector } from "react-redux";
import { RiCheckDoubleFill } from "react-icons/ri";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const AddNewPosition = () => {
  const navigate = useNavigate();
  const currentState = useSelector(selectHeader);
  const [positionName,setPositionName] = useState("")
  const [experience,setExperience] = useState("")
  const [employmentType,setEmploymentType] = useState("")
  const [location,setLocation] = useState("")
  const [stipend,setStipend] = useState("")
  const [education,setEducation] = useState("")
  const [fulctionalArea,setFunctionalArea] = useState("")
  const [jobDesc,setJobDesc] = useState("")
  const [skills,setSkills] = useState("")
  const [roleCat,setRoleCat] = useState([])
  const [roleSubCat,setRoleSubCat] = useState([])
  const [roleCatId,setRoleCatId] = useState('')
  const [roleSubCatId,setRoleSubCatId] = useState('')


  async function createJob(e) {
    e.preventDefault();
    axios
      .post("hri_company/newposition/add", {
        position_name: positionName,
        experience: experience,
        employment_type: employmentType,
        location: location,
        stipend: stipend,
        criteria: education,
         role_category:  roleSubCatId,
        functional_area: fulctionalArea,
        job_description: jobDesc,
        skills: skills,
        // company_details:"null",
        // company: "false",

      }, {
        headers: {
          Authorization: "Token " + cookies.get("token"),
        },
      })
      .then((resp) => {
        console.log(resp);

        navigate("/Jobs");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() =>{
    axios
        .get("hri_company/roles", {
          headers: {
            Authorization: "Token " + cookies.get("token"),
          },
        })
        .then((resp) => {
         console.log(resp.data)
         setRoleCat(resp.data)
        })
        .catch((err) => {
          console.log(err);
        });
        axios
        .get(`hri_company/sub_roles/${roleCatId}`, {
          headers: {
            Authorization: "Token " + cookies.get("token"),
          },
        })
        .then((resp) => {
         console.log(resp.data)
         setRoleSubCat(resp.data)
        })
        .catch((err) => {
          console.log(err);
        });
  },[roleCatId])
  const roleCatChange = (e) => {
    setRoleCatId(e.target.value);
  };
  const roleSubCatChange = (e) => {
    setRoleSubCatId(e.target.value);
  };
  return (
    <>
      <Header />

      <div className="pt-4 pb-20  bg-gray-100 px-4     w-full h-auto">
        <div
          className={
            !currentState?.show
              ? " lg:ml-72 ease-in duration-300 "
              : " ease-in  duration-300  ml-0 "
          }
        >
          <div className="bg-white px-4 md:px-28 pb-20 pt-8 w-full rounded-lg h-auto">
            <div className="md:flex justify-end mx-2">
              
              <div className="flex ">
                <Link to="/Jobs">
                <div className="w-full text-center px-6 hover:bg-red-100 hover:text-black mt-5 md:mt-0 ease rounded py-2  mr-10  text-gray-400">
                  X&nbsp; Cancle
                </div>
                </Link>
                <div onClick={createJob} className=" mt-5 cursor-pointer md:mt-0 w-40 md:px-10 ml-2  flex justify-center  bg-slate-100 rounded-lg">
                  <div className="  flex bg-slate-100 my-2 text-blue-700 ">
                    <div>Save</div>{" "}
                    <RiCheckDoubleFill className="ml-2 mt-[1px] text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:mr-28 gap-y-5 gap-x-4 md:gap-x-10 mt-8">
              <div>
                <div className="text-gray-400  text-sm md:text-basetext-sm md:text-base mb-2 font-semibold">Position Name</div>
                <TextField
                  className="w-full"
                  label="Enter role of the job"
                  //   className={
                  //     !currentState?.show
                  //       ?"w-full  "
                  //       : "w-full xl:w-80 "
                  //   }
                  //   value={name}

                  id="outlined-size-small"
                  onChange={(e) => setPositionName(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                  Experience
                </div>
                <div>
                <select
                  className="form-select   ml-1  appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  //   value={emp}
                   onChange={(e) => setExperience(e.target.value)}
                >
                  <option
                    className="h-20  dropdown-item flex text-sm  py-2 px-4 font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-400 pointer-events-none"
                  >
                    Select Experience 
                  </option>

                  <option className="h-20"><div>0-1 years  </div></option>
                  <option className="h-20">1-2 years</option>
                  <option className="h-20">2-3 years</option>
                  <option className="h-20">3-4 years</option>
                  <option className="h-20">4-5 years</option>
                  <option className="h-20">5+ years</option>
                </select>
                <span></span>
                </div>
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Employment Type 
                </div>
                <select
                  className="form-select   ml-1  appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  //   value={emp}
                   onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option
                    className="h-20  dropdown-item text-sm  py-2 px-4 font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-400 pointer-events-none"
                  >
                    Select employment type
                  </option>

                  <option className="h-20">Part-time</option>
                  <option className="h-20">Part-time(Work from home)</option>
                  <option className="h-20">Full-time</option>
                  <option className="h-20">Full-time(Work from home)</option>
                </select>
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold">Location</div>
                <TextField
                  className="w-full"
                  label="Enter Location of the job will play"
                  //   className={
                  //     !currentState?.show
                  //       ?"w-full  "
                  //       : "w-full xl:w-80 "
                  //   }
                  //   value={name}

                  id="outlined-size-small"
                   onChange={(e) => setLocation(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Stipend / Salary
                </div>
                <TextField
                  className="w-full"
                  label="Non Discloser"
                  //   className={
                  //     !currentState?.show
                  //       ?"w-full  "
                  //       : "w-full xl:w-80 "
                  //   }
                  //   value={name}

                  id="outlined-size-small"
                   onChange={(e) => setStipend(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Education 
                </div>
                <TextField
                  className="w-full"
                  label="Any Degree"
                  //   className={
                  //     !currentState?.show
                  //       ?"w-full  "
                  //       : "w-full xl:w-80 "
                  //   }
                  //   value={name}

                  id="outlined-size-small"
                   onChange={(e) => setEducation(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Role Category 
                </div>
                <select
                  className="form-select   ml-1  appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  //   value={emp}
                  onChange={roleCatChange}
                >
                  <option
                    className="h-20  dropdown-item text-sm  py-2 px-4 font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-400 pointer-events-none"
                  >
                   Select Role Category
                  </option>

                   {roleCat.map((user) => (
                <option className="h-20" key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))} 
                </select>
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Functional Area 
                </div>
                <TextField
                  className="w-full"
                  label="React Apps Develop and Deploy"
                  //   className={
                  //     !currentState?.show
                  //       ?"w-full  "
                  //       : "w-full xl:w-80 "
                  //   }
                  //   value={name}

                  id="outlined-size-small"
                   onChange={(e) => setFunctionalArea(e.target.value)}
                  size="small"
                />
              </div>
              <div>
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold ml-1">
                Role Sub-Category 
                </div>
                <select
                  className="form-select   ml-1  appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  //   value={emp}
                  onChange={roleSubCatChange}
                >
                  <option
                    className="h-20  dropdown-item text-sm  py-2 px-4 font-normal  block  w-full  whitespace-nowrap bg-transparent text-gray-400 pointer-events-none"
                  >
                  Enter Sub-category (If Any)
                  </option>

                  {roleSubCat.map((user) => (
                <option className="h-20" key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))} 
                </select>
              </div>
            </div>
            <div className="mt-4 md:mr-28">
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold">Job Description</div>
                <textarea
            
            className="h-28  mt-2   2xl:placeholder:pl-6 placeholder:text-xs md:placeholder:text-base xl:placeholder:text-lg 2xl:placeholder:text-3xl 2xl:mt-6 mt-1 rounded-lg block  w-full border border-slate-300  py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Please describe about in In-Detail"
            cols="10"
            rows="5"
        //    value={compDetails}
            onChange={(e) => setJobDesc(e.target.value)}
          />
              </div>
              <div className="mt-4 md:mr-28">
                <div className="text-gray-400  text-sm md:text-base mb-2 font-semibold">Skills</div>
                <textarea
            
            className="h-28  mt-2   2xl:placeholder:pl-6 placeholder:text-xs md:placeholder:text-base xl:placeholder:text-lg 2xl:placeholder:text-3xl 2xl:mt-6 mt-1 rounded-lg block  w-full border border-slate-300  py-2 pl-5 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Enter skills the job role required to give the best"
            cols="10"
            rows="5"
        //    value={compDetails}
            onChange={(e) => setSkills(e.target.value)}
          />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewPosition;
