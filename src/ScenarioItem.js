import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ScenarioItem = (props) => {

    function handleVisibility(event) {
        event.preventDefault();
    }

    return (
        <li>
            <a id={props.id} href="/" onClick={handleVisibility}>{props.name}</a>
        </li>
    );
};

export default ScenarioItem;