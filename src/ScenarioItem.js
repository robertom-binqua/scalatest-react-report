import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ScenarioItem = (props) => {

    console.log(props.scenario)

    function onClickHandler(event) {
        event.preventDefault();
        props.onChangeContent(props.scenario)
    }

    return (
        <li>
            <a id={props.scenario.ordinal} href="/" onClick={onClickHandler}>{props.scenario.description}</a>
        </li>
    );
};

export default ScenarioItem;