import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const MenuScenarioItem = ({index, scenario, testSelected, changeTestSelection}) => {

    function onClickHandler(event) {
        event.preventDefault();
        changeTestSelection({
            t: testSelected.t,
            f: testSelected.f,
            s: scenario.id
        })
    }

    return (
        <li>
            <a id={scenario.ordinal}
               href="/"
               onClick={onClickHandler}
            >Scenario {(index + 1) + ": " + scenario.description}</a>
        </li>
    );
};

export default MenuScenarioItem;