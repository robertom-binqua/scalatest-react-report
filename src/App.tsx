import './App.css';
import Navbar from "react-bootstrap/Navbar";
import MainArea from "./MainArea";
import React, {useEffect, useState} from "react";
import {
    calculateTestsVisibility,
    extractScenarioDetails,
    makeScenarioVisible,
    TestsVisibility,
    toggleFeatureVisibility,
    toggleTestVisibility
} from "./testMapBuilder";
import {TestSelection, TestsReportResult} from "./model";
import SearchLauncher from "./SearchLauncher";
import {ScenarioDetailsProps} from "./ScenarioDetailsData";

function App() {

    const [testsReportResult, setTestsReportResult] = useState<TestsReportResult>({
        testsReport: [],
        screenshotsLocationPrefix: ""
    });
    const [testsVisibility, setTestsVisibility] = useState<TestsVisibility>(new Map());

    const [scenarioDetailsProps, setScenarioDetailsProps] = useState<ScenarioDetailsProps>({});

    useEffect(() => {
        document.title = "Scalatest Report"
        fetch(`${process.env.PUBLIC_URL}/report/testsReport.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch JSON");
                }
                return response.json();
            })
            .then((testsReportResult: TestsReportResult) => {
                setTestsVisibility(calculateTestsVisibility(testsReportResult.testsReport))
                setTestsReportResult(testsReportResult);
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
            });
    }, []);

    function changeTestSelection(testSelection: TestSelection) {
        switch (testSelection.type) {
            case "test":
                setTestsVisibility(toggleTestVisibility(testsVisibility, testSelection.t))
                return
            case "feature":
                setTestsVisibility(toggleFeatureVisibility(testsVisibility, testSelection.t, testSelection.f))
                return
            case "scenario":
                let newTestVisibility: TestsVisibility = makeScenarioVisible(testsVisibility, testSelection.t, testSelection.f, testSelection.s);
                const newScenarioDetailsProps: ScenarioDetailsProps = extractScenarioDetails(testsReportResult, testSelection.t, testSelection.f, testSelection.s)
                setScenarioDetailsProps(newScenarioDetailsProps)
                setTestsVisibility(newTestVisibility)
                return
        }
    }

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <div className="justify-content-end">
                    <SearchLauncher changeTestSelection={changeTestSelection}></SearchLauncher>
                    <Navbar.Text className="p-3 me-3">12 March 2025</Navbar.Text>
                </div>
            </Navbar>

            <MainArea
                testsReportResult={testsReportResult}
                testsVisibility={testsVisibility}
                changeTestSelection={changeTestSelection}
                scenarioDetailsProps={scenarioDetailsProps}
            ></MainArea>
        </div>
    )
}

export default App;
