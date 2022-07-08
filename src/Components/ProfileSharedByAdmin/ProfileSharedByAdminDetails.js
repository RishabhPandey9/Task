import React, { useEffect, useState } from "react";
import Header from "../NavBar-Sidebar/Header";
import { selectHeader } from "../features/HeaderSlice";
import { useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logo from "../NavBar-Sidebar/HRI_Company_logo.png";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import { Disclosure, Transition } from '@headlessui/react';

const cookies = new Cookies();

const ProfileSharedByAdminDetails = () => {
  const navigate = useNavigate();
  const currentState = useSelector(selectHeader);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
const handleView =(e) => {
  
}
  async function getData() {
    await axios
      .get(
        `hri_company/profileshare/${cookies.get("profileSharedByAdminID")}`,
        {
          headers: {
            Authorization: "Token " + cookies.get("token"),
          },
        }
      )
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    cookies.get("profileSharedByAdminID");
    getData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div className="pt-5 pb-20 mt-[68px]  bg-gray-100 px-4  md:px-10   w-full h-auto">
          <div
            className={
              !currentState?.show
                ? " lg:ml-72 ease-in duration-300 "
                : " ease-in  duration-300  ml-0 "
            }
          >
            <div className="bg-white px-4 md:px-10 pb-20 pt-8 w-full rounded-lg h-auto">
              <div
                onClick={() => navigate("/ProfileShearedByAdmin")}
                className="text-gray-400 text-lg font-semibold flex items-center space-x-1 button_effect w-28 hover:text-blue-700  px-3 py-2 rounded-lg cursor-pointer"
              >
                <ArrowBackIosNewIcon style={{ height: 20 }} />
                <span>Back</span>
              </div>
              <div>
                {data.map((user) => {
                  const date = new Date(user.user_dob.slice(0, 10));

                  const month = date.toLocaleString("default", {
                    month: "long",
                  });
                  return (
                    <div key={user.id} className="">
                      <div className="md:flex  mx-4 md:mx-24 mt-5">
                        <div className="flex justify-center ">
                          <div className="w-20 h-20 rounded-full">
                            <img
                              className="rounded-full w-20 h-20 "
                              src={user.user_pic}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="text-xl flex justify-center font-semibold ml-4 md:ml-6 flex mt-4">
                          {user.user_fname}&nbsp;{user.user_lname}{" "}
                          {/* <VscCopy className="text-blue-700 ml-2 mt-1" /> */}
                        </div>
                      </div>
                      <div className="grid text-center md:text-left md:grid-cols-2 md:mx-24 gap-y-4 md:gap-x-10 lg:gap-x-5 mt-7">
                        <div className="text-gray-400 font-semibold">
                          Role Applied{" "}
                          <div className="text-black">{user.job_name} </div>
                        </div>

                        <div className="text-gray-400 font-semibold">
                          Marital Status{" "}
                          <div className="text-black">
                            {user.user_martial_status}{" "}
                          </div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          Gender{" "}
                          <div className="text-black">{user.user_gender} </div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          Permanent Address{" "}
                          <div className="text-black">
                            {user.user_address},&nbsp;{user.user_city},&nbsp;
                            {user.user_country}{" "}
                          </div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          Languages{" "}
                          <div className="text-black">English, Hindi</div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          Present Address{" "}
                          <div className="text-black">
                            {user.user_present_address}{" "}
                          </div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          DateofBirth{" "}
                          <div className="text-black">
                            {date.getDate()}&nbsp;
                            {month.slice(0, 3)}&nbsp;
                            {date.getFullYear()}
                          </div>
                        </div>
                        <div className="text-gray-400 font-semibold">
                          Country of Citizenship{" "}
                          <div className="text-black">{user.user_country} </div>
                        </div>
                      </div>
                      <div className="border-b-2 mt-10 border-gray-500" />
                      <div className="text-xl font-semibold text-center md:text-left md:mx-24 mt-10">
                        Work Experience
                      </div>
                      <div className="text-center md:text-left md:grid grid-cols-2 md:ml-24 gap-y-10 mt-8 ">
                        {user.work_exp.map((user) => {
                          const start = new Date(user.start_date.slice(0, 10));

                          const month1 = start.toLocaleString("default", {
                            month: "long",
                          });
                          const end = new Date(user.end_date.slice(0, 10));

                          const month2 = end.toLocaleString("default", {
                            month: "long",
                          });
                          return (
                            <div key={user.id} className=" mt-3 ">
                              <div className="text-lg font-semibold">
                                {user.position}{" "}
                              </div>
                              <div className="justify-center md:justify-start  flex">
                                <div className="font-semibold">From:</div>
                                &nbsp;{start.getDate()}&nbsp;
                                {month1.slice(0, 3)}&nbsp;
                                {start.getFullYear()}
                              </div>
                              <div className="justify-center md:justify-start flex  ">
                                <div className="font-semibold">To:</div> &nbsp;{" "}
                                {end.getDate()}&nbsp;
                                {month2.slice(0, 3)}&nbsp;
                                {end.getFullYear()}
                              </div>
                              <div className=" justify-center md:justify-start flex">
                                <div className="font-semibold ">
                                  {user.company_name}{" "}
                                </div>
                                <div className="text-gray-400">
                                  &nbsp; - {user.city}
                                </div>
                                <div className="text-gray-400">
                                  {" "}
                                  , {user.country}
                                </div>
                              </div>
                              <div className="text-gray-400">
                                {/* {!view ? (
                                  <div className="">
                                    {user.description.slice(0, 50)}...
                                    <div
                                      onClick={() => setView(!view)}
                                      className="text-blue-700 cursor-pointer"
                                    >
                                      view more
                                    </div>
                                  </div>
                                ) : (
                                  <div className="">
                                   ...
                                    <div
                                      onClick={() => setView(!view)}
                                      className="text-blue-700 cursor-pointer"
                                    >
                                      view less
                                    </div>
                                  </div>
                                )} */}
                                 <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='text-regular flex w-full justify-between rounded-lg py-2  text-right font-medium text-[#4f46e5] underline '>
                          <span>Read More</span>
                        </Disclosure.Button>
                        <Transition
                          leave='transition duration-100 ease-out'
                          leaveFrom='transform scale-100 opacity-100'
                          leaveTo='transform scale-100 opacity-0'
                        >
                          <Disclosure.Panel className='px-2  pb-2 text-sm text-gray-500'>
                          {user.description}
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-b-2 mt-10 border-gray-500" />
                      <div className="text-xl font-semibold text-center md:text-left md:mx-24 mt-10">
                        Skills / Strengths
                      </div>
                      <div className="md:grid grid-cols-2 ">
                        {user.user_skills.map((user) => {
                          return (
                            <div key={user.id} className="ml-1 md:ml-24 mt-8">
                              <div className="text-lg font-semibold">
                                {user.skills}
                              </div>
                              <div className="w-full mt-2 bg-gray-200 h-2 rounded-full mb-6">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${user.rating}0%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-b-2 mt-10 border-gray-500" />
                      <div className="text-xl font-semibold text-center md:text-left md:mx-24 mt-10">
                        Education / Certifications
                      </div>
                      <div className="md:grid grid-cols-2 ">
                        {user.education_certificate.map((user) => {
                          
                          return (
                            <div key={user.id}  data-bs-toggle="modal" data-bs-target="#exampleModalScrollable" className="ml-1 cursor-pointer md:ml-24 mt-8">
                              <div
                                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                                id="exampleModalScrollable"
                                tabindex="-1"
                                aria-labelledby="exampleModalScrollableLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                      <h5
                                        class="text-xl font-medium leading-normal text-gray-800"
                                        id="exampleModalScrollableLabel"
                                      >
                                        {user.certificate_name}.pdf
                                      </h5>
                                    </div>
                                    <div class="modal-body relative p-4">
                                      <iframe src={user.certificate} width="100%" className="h-96"  title="some"></iframe>
                                    </div>
                                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                      <button
                                        type="button"
                                        class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-lg font-semibold">
                                {user.degree_name}
                              </div>
                              <div className="flex">
                                <div className="font-semibold ">
                                  {user.university_name}{" "}
                                </div>
                                <div className="text-gray-400">
                                  &nbsp; - {user.city}
                                </div>
                                <div className="text-gray-400">
                                  , {user.country}
                                </div>
                              </div>
                              <div className="bg-slate-100  md:w-80 flex justify-center rounded py-10 mt-2">
                                {" "}
                               
                                <div className="text-center">
                                  <BsFillFileEarmarkPdfFill className="text-blue-600  ml-12 md:ml-12 mb-2  text-6xl" />{" "}
                                  <div className="text-center  text-blue-500">
                                    {user.degree_name} certificate.pdf
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="border-b-2 mt-10 border-gray-500" />
                      <div className="text-lg text-gray-400 font-semibold text-center md:text-left md:mx-24 mt-10">
                        Social Media
                      </div>
                      <div className="md:ml-24  mt-8 flex justify-center md:justify-start font-semibold space-x-7 text-4xl">
                        <BsFacebook className="text-blue-600" />
                        <BsLinkedin className="text-blue-700" />
                        <BsGithub />
                      </div>
                      <div className="flex rounded px-4 md:px-10 py-2 mt-6 bg-slate-100">
                        <div className="mt-5 md:my-3 mr-2">By</div>
                        <img
                          className="w-10 h-10 mt-2 md:mt-1"
                          src={logo}
                          alt=""
                        />
                        <div>
                          <div className="text-xl">Infinity HR Consultants</div>
                          <div className="text-gray-500">
                            Filter diamonds on road
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSharedByAdminDetails;
