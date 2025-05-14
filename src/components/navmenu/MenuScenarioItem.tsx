import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {ScenarioReport, TestSelection} from "../../model";

export interface MenuScenarioItemProps {
    scenarioReport: ScenarioReport;
    index: number;
    parent: { t: string, f: string };
    visibility?: boolean;
    changeTestSelection: (testSelection: TestSelection) => void
}

const MenuScenarioItem = ({
                              scenarioReport,
                              index,
                              parent,
                              visibility,
                              changeTestSelection
                          }: MenuScenarioItemProps) => {

    // @ts-ignore
    function onClickHandler(event) {
        event.preventDefault();
        changeTestSelection({
            type: "scenario",
            t: parent.t,
            f: parent.f,
            s: scenarioReport.id
        })
    }

    function calculateBackgroundColor(visible: boolean | undefined) {
        return visible ? {backgroundColor: "#AED6F1"} : {}
    }

    return (
        <li style={calculateBackgroundColor(visibility)}>
            <a id={scenarioReport.id}
               href="/"
               onClick={onClickHandler}
            >Scenario {(index + 1) + ": " + scenarioReport.description}</a>
        </li>
    );
};

export default MenuScenarioItem;