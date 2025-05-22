import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuScenarioItem from "./MenuScenarioItem";
import {FeatureVisibility} from "../../testMapBuilder";
import {FeatureReport, ScenarioReport, SearchResultTestSelection} from "../../model";
export interface MenuFeatureItemProps {
    featureReport: FeatureReport;
    index: number;
    featureVisibility: FeatureVisibility;
    parent: { t: string };
    changeTestSelection: (i: SearchResultTestSelection) => void
}


const MenuFeatureItem = ({
                             featureReport,
                             index,
                             featureVisibility,
                             parent,
                             changeTestSelection
                         }: MenuFeatureItemProps) => {

    let scenariosToBeShown;
    if (featureVisibility.childrenVisibility) {
        scenariosToBeShown = (
            <ul className="scenario-menu">
                {featureReport.scenarios.map((s: ScenarioReport, index: number) => <MenuScenarioItem
                    key={s.id}
                    scenarioReport={s}
                    index={index}
                    parent={{t: parent.t, f: featureReport.id}}
                    visibility={featureVisibility.scenariosMap.get(s.id)?.childrenVisibility}
                    changeTestSelection={changeTestSelection}
                />)}
            </ul>
        )
    } else {
        scenariosToBeShown = null
    }

    // @ts-ignore
    function handleVisibility(event) {
        event.preventDefault();
        changeTestSelection({
            type: "feature",
            t: parent.t,
            f: featureReport.id
        })
    }

    return (
        <li>
            <a id={featureReport.id} href="/"
               onClick={handleVisibility}>Feature {(index + 1) + ": " + featureReport.description}</a>
            {scenariosToBeShown}
        </li>
    );
};

export default MenuFeatureItem;