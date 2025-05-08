import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ScreenshotsCarousel from "./ScreenshotsCarousel";

const MainContent = ({tests,screenshotsLocationPrefix,testSelected}) => {

    let output
    if (scenarioSelected == null)
        output = null
    else {
        let steps = scenarioSelected.steps.map(step => <li key={step.ordinal} className="scenario-step-item">{step.message}</li>)
        output = (
            <>
                <div className="scenario-title">Scenario: {props.scenarioSelected.description}</div>
                <ul className="scenario-steps">
                    {steps}
                </ul>
            </>

        )
    }

    return (
        <div>
            {output}
            <ScreenshotsCarousel scenarioSelected={props.scenarioSelected} screenshotsLocationPrefix={props.screenshotsLocationPrefix}/>
        </div>
    )
};

export default MainContent;