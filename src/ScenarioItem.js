import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ScenarioItem = (props) => {

    function onClickHandler(event) {
        event.preventDefault();
        props.onChangeContent(props.scenario)
    }

    return (
        <li>
            <a id={props.scenario.ordinal} href="/" onClick={onClickHandler}>{(props.index + 1) + ". - " +props.scenario.description}</a>
        </li>
    );
};

export default ScenarioItem;