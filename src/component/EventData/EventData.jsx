import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./EventData.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const EventData = (props) => {
    console.log(props.type);
    return (
        <div className="eventData">
            <div className="eventData-icon">
                {props.type === "location" ? <LocationOnIcon /> : <CalendarMonthIcon />}
            </div>
            <div className="eventData-data">
                <div className="eventData-mainData">{props.mainData}</div>
                <div className="eventData-secondaryData">{props.secondaryData}</div>
            </div>
            <div className="eventData-arrow-end">
                <ArrowForwardIosIcon fontSize="small" />
            </div>
        </div>
    );
};

export default EventData;
