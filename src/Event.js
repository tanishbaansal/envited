import React from "react";
import { useLocation } from "react-router-dom";
import defaultImage from "./assets/img/Birthday cake.png";
import EventData from "./component/EventData/EventData";
import "./Event.css";
const Event = () => {
    const location = useLocation();
    console.log(`State is ${JSON.stringify(location.state)}`);
    return (
        <>
            <div className="event-image">
                <img
                    src={location.state[0].image ? location.state[0].image : defaultImage}
                    alt="Event"
                />
            </div>
            <div className="container">
                <div className="container-text event-text">{location.state[0].eventName}</div>
                <div className="container-subtext event-subtext">
                    Hosted by
                    <strong> {location.state[0].hostName}</strong>
                </div>
                <div className="event-dataContainer">
                    <EventData
                        type="date"
                        mainData={new Date(location.state[1]).toDateString()}
                        secondaryData={`to ${new Date(location.state[2]).toDateString()}`}
                    />
                    <EventData
                        type="location"
                        mainData="Street name"
                        secondaryData={location.state[0].location}
                    />
                </div>
            </div>
        </>
    );
};

export default Event;
