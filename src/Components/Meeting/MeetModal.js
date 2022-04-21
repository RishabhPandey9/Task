import React, {useEffect, useState} from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const MeetModal = ({title, company, time, date, link, day, onClick, duration, end_time, start_date, meeting_password, note, clock}) => {

    const [sum, setSum] = useState("");

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const countDown = (time) => {
        var countDownDate = new Date(time).getTime();

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setSum(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

            if (distance < 0) {
                clearInterval(x);
                setSum("Expired")
            }

        }, 1000);

    };

    useEffect(() => {
        countDown(clock);
    }, [clock])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="relative">
            <div className="bg-white px-3 pb-3 pt-16 rounded-lg space-y-3" onClick={handleOpen}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="space-y-2">
                        <Typography id="modal-modal-title" variant="h5" component="h2">
                            Title: {title}
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Company: {company}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Note: {note}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Date: {start_date}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            Time: {end_time}
                        </Typography>
                    </Box>
                </Modal>
                {/*<div className="flex item-center justify-end space-x-4">*/}
                {/*    <IconButton onClick={onClick}>*/}
                {/*        <EditIcon/>*/}
                {/*    </IconButton>*/}
                {/*    <p className="bg-gray-400 h-10 w-[1px]"></p>*/}
                {/*    <IconButton>*/}
                {/*        <DeleteSweepIcon/>*/}
                {/*    </IconButton>*/}
                {/*</div>*/}
                <div className="flex items-center space-x-3">
                    <EventNoteIcon/>
                    <div>
                        <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-semibold">{title}</p>
                        <p className="text-sm md:text-base lg:text-lg">{date}</p>
                    </div>
                </div>
                <div className="flex items-center text-sm md:text-base lg:text-lg space-x-3">
                    <AccessAlarmsIcon/>
                    <p>{time}</p>
                </div>
                <div className="flex items-center space-x-3">
                    {sum === "Expired" && (
                        <div className="flex items-center justify-end">
                            {/*<Button*/}
                            {/*    variant="contained"*/}
                            {/*    onClick={() => {*/}
                            {/*        window.open(*/}
                            {/*            link.substring(0, 8) === 'https://' ? link : `https://${link}`, '_blank'*/}
                            {/*        );*/}
                            {/*    }}*/}
                            {/*>*/}
                            {/*    Join Now*/}
                            {/*</Button>*/}
                        </div>
                    )}
                    <div className="flex items-center justify-end">
                        <Button variant="outlined">{sum ? sum : "Loading..."}</Button>
                    </div>
                </div>
            </div>
            <div
                className="flex items-center justify-center bg-blue-200 w-24 h-12 text-base font-semibold absolute top-0 left-0 rounded-br-lg">
                <span>{day}</span>
            </div>
        </div>
    );
};

export default MeetModal;