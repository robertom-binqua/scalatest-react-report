import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ScreenshotsCarousel from "./ScreenshotsCarousel";

const MainContent = (props) => {

    console.log("tes " + props.scenarioSelected)

    let output
    if (props.scenarioSelected == null)
        output = null
    else {
        let steps = props.scenarioSelected.steps.map(step =>  <li className="scenario-step-item">{step.message}</li>)
        output = (
            <>
                <div className="scenario-title">Scenario: {props.scenarioSelected.ordinal}</div>
                <ul className="scenario-steps">
                    {steps}
                </ul>
            </>

        )
    }

    return (
        <div>
            {output}
            <ScreenshotsCarousel/>
        </div>
    )
};

export default MainContent;