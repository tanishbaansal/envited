import React from "react";
import { useLocation } from "react-router-dom";
import defaultImage from "./assets/img/Birthday cake.png";
import EventData from "./component/EventData/EventData";
import "./Event.css";
function formatDate(date, utcRequired) {
    var d = date,
        month = "" + d.toLocaleString("default", { month: "long" }),
        day = "" + d.getDate(),
        time = "" + d.toLocaleString("en-US", { hour: "numeric", hour12: true }),
        utc =
            "" +
            d
                .toLocaleDateString("en-US", {
                    day: "2-digit",
                    timeZoneName: "short",
                })
                .slice(4);

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (utcRequired) {
        return [day, month, time, utc].join(" ");
    }
    return [day, month, time].join(" ");
}

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
                        mainData={formatDate(new Date(location.state[1]), false)}
                        secondaryDate={formatDate(new Date(location.state[2]))}
                        dateFormat={new Date(location.state[2])
                            .toLocaleDateString("en-US", {
                                day: "2-digit",
                                timeZoneName: "short",
                            })
                            .slice(4)}
                    />
                    <EventData
                        type="location"
                        mainData="Street name"
                        location={location.state[0].location}
                    />
                </div>
            </div>
        </>
    );
};

export default Event;
