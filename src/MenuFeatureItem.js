import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuScenarioItem from "./MenuScenarioItem";

const MenuFeatureItem = ({name, id, index, scenarios, testSelected, changeTestSelection}) => {

    let scenariosToBeShown;
    if (testSelected.f === id) {
        scenariosToBeShown = (
            <ul className="scenario-menu">
                {scenarios.map((s, index) => <MenuScenarioItem
                    key={s.id}
                    index={index}
                    scenario={s}
                    testSelected={testSelected}
                    changeTestSelection={changeTestSelection}
                />)}
            </ul>
        )
    } else {
        scenariosToBeShown = null
    }

    function handleVisibility(event) {
        event.preventDefault();
        changeTestSelection({
            t: testSelected.t,
            f: id
        })
    }

    return (
        <li>
            <a id={id} href="/" onClick={handleVisibility}>Feature {(index + 1) + ": " + name}</a>
            {scenariosToBeShown}
        </li>
    );
};

export default MenuFeatureItem;