import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ScreenshotsCarousel from "./ScreenshotsCarousel";
import {ScenarioReport} from "./model";

export type ScenarioDetailsData = {
    scenarioReport: ScenarioReport,
    screenshotsLocationPrefix: string
    screenshotSelected: string | undefined
}

export interface ScenarioDetailsProps {
    scenarioDetails?: ScenarioDetailsData,
}

const ScenarioDetails: (scenarioDetailsProps: ScenarioDetailsProps) => React.JSX.Element = ({scenarioDetails}: ScenarioDetailsProps) => {

    if (!scenarioDetails)
        return <></>
    else {
        let steps = scenarioDetails.scenarioReport.steps.map(step => <li key={step.id}
                                                                         className="scenario-step-item">{step.message}</li>)
        return (
            <>
                <div
                    className="scenario-title">Scenario: {scenarioDetails.scenarioReport.description}</div>
                <ul className="scenario-steps">
                    {steps}
                </ul>
                <ScreenshotsCarousel scenarioReport={scenarioDetails.scenarioReport}
                                     screenshotsLocationPrefix={scenarioDetails.screenshotsLocationPrefix}
                                     maybeAScreenshotIndex={scenarioDetails.screenshotSelected}
                />
            </>

        )
    }
};

export default ScenarioDetails;