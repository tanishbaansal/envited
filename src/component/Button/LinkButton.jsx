import React from "react";
import "./LinkButton.css";
import { Link } from "react-router-dom";
const LinkButton = (props) => {
    return (
        <button className="button center-align">
            <Link to={props.to} state={props.state}>
                {props.text}
            </Link>
        </button>
    );
};

export default LinkButton;
