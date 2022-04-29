import React, {useEffect, useState} from "react";
import MeetModal from "./MeetModal";
import moment from "moment";
import {getRequest} from "./Request";

const Upcoming = () => {

    const [data, setData] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        getRequest(`hri_company/meeting?schedule_type=upcoming`, setData);
    }, []);

    const meetingId = (id) => {
        setId(id)
    }

    return (
        <div>
            {data.length ? (
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 relative">
                    {data
                        .sort(function (a, b) {
                            return new Date(b.date).valueOf() - new Date(a.date).valueOf();
                        })
                        .map((item, i) => (
                            <MeetModal
                                key={item.id}
                                title={item.title}
                                link={item.meeting_link}
                                date={item?.date}
                                time={item.start_time}
                                duration={item.duration}
                                note={item.note}
                                meeting_password={item.meeting_password}
                                start_time={item.start_time}
                                end_time={item.end_time}
                                day={moment(item.date).format("dddd")}
                                onClick={() => {
                                    // handleOpen();
                                    meetingId(item.id);
                                }}
                                clock={`${moment(item?.date).format("LL")} ${item?.start_time}`}
                            />
                        ))}
                </div>
            ) : (
                <p className="flex justify-center text-xl">No Meeting scheduled</p>
            )}
        </div>
    )
}

export default Upcoming;