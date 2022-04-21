import React, {useEffect, useState} from "react";
import MeetModal from "./MeetModal";
import moment from "moment";
// import Modal from "../../components/Modal";
import AddIcon from "@mui/icons-material/Add";
import Spinner from "./Spinner";
import axios from "axios";
import Cookies from "universal-cookie";
import Header from "../NavBar-Sidebar/Header";
import { useSelector } from 'react-redux';
import {  selectHeader } from '../features/HeaderSlice';

const cookies = new Cookies();

const Meeting = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [active1, setActive1] = useState("");
    const [type, setType] = useState("upcoming");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const currentState = useSelector(selectHeader);

    async function getData(){
        await axios
          .get(`hri_company/meeting?schedule_type=${type}`, {
            headers: {
              Authorization: "Token " + cookies.get("token"),
            },
          })
          .then((resp) => {
            setData(resp.data);
            console.log(resp.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
      

    useEffect(() => {
        getData();
    }, [type]);
    
    const meetingId = (id) => {
        setId(id)
    }

    return (
        <>
            
          <Header/>
          <div className='bg-gray-100 w-full '>
    <div className={!currentState?.show?' lg:ml-72 ease-in h-full duration-300 ' : ' ease-in  duration-300 h-full ml-0'}>
            <div className="items-center  justify-start space-x-10 flex bg-white px-5 py-2  rounded-md z-10">
                <span
                    id="Message From"
                    className={`font-lighter px-4 py-2 rounded-md duration-300`}
                >
                  Scheduled Meetings:
                </span>
                <span
                    id="upcoming"
                    className={`${
                        active1 === "upcoming" && "bg-gray-100  text-default-blue"
                    } tab_span cursor-pointer p-3 px-4 rounded`}
                    onClick={(e) => {
                        setActive1(e.currentTarget.id);
                        setType(e.currentTarget.id);
                    }}
                >
                    Upcoming
                </span>
                <span
                    id="previous"
                    className={`${
                        active1 === "previous" && "bg-gray-100 text-default-blue"
                    } tab_span cursor-pointer  p-3 px-4  rounded`}
                    onClick={(e) => {
                        setActive1(e.currentTarget.id);
                        setType(e.currentTarget.id);
                    }}
                >
                  Previous
                </span>
            </div>
                    <div className="h-full">
            {data.length ? (
                <div className="grid grid-1 pb-60 mt-6  md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 relative">
                    {data
                        .sort(function (a, b) {
                            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                        })
                        .map((item, i) => (
                            <MeetModal
                                className="bg-gray-100 mt-20"
                                key={item.id}
                                title={item.title}
                                link={item.meeting_link}
                                date={item.date}
                                time={item.start_time}
                                duration={item.duration}
                                note={item.note}
                                meeting_password={item.meeting_password}
                                day={moment(item.date).format("dddd")}
                                onClick={() => {
                                    handleOpen();
                                    meetingId(item.id);
                                }}
                                clock={`${moment(item?.date).format("LL")} ${item?.start_time}`}
                            />
                        ))}
                </div>
            ) : (
                <Spinner/>
            )}
            {/*<div*/}
            {/*    className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center absolute bottom-10 right-10 hover:cursor-pointer hover:opacity-50 active:opacity-70 duration-300"*/}
            {/*    onClick={handleOpen}*/}
            {/*>*/}
            {/*    <span>*/}
            {/*      <AddIcon/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            </div>
        </div>
        </div>
       
        </>
    )

}

export default Meeting;