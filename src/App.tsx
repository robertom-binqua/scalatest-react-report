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
import {LunrDocumentEntry, SearchResultTestSelection, TestsReportResult} from "./model";
import {ScenarioDetailsProps} from "./ScenarioDetailsData";
import SearchLauncher, {ScreenshotByTitleAndUrl} from "./components/search/SearchLauncher";
import {SearchLauncherUtils} from "./components/search/SearchLauncherUtils";
import {defaultIndexSearch, IndexSearch, LunrIndexSearch} from "./IndexSearch";

function App() {

    const [testsReportResult, setTestsReportResult] = useState<TestsReportResult>({
        testsReport: [],
        screenshotsLocationPrefix: ""
    });

    const [testsVisibility, setTestsVisibility] = useState<TestsVisibility>(new Map());
    const [scenarioDetailsProps, setScenarioDetailsProps] = useState<ScenarioDetailsProps>({});
    const [screenshotsByTitleAndUrl, setScreenshotsByTitleAndUrl] = useState<ScreenshotByTitleAndUrl[]>([]);
    const [screenshotCoordinates, setScreenshotCoordinates] = useState<SearchLauncherUtils.ScreenshotCoordinates[]>([]);
    const [indexSearch, setIndexSearch] = useState<IndexSearch>(defaultIndexSearch);

    useEffect(() => {
        document.title = "Scalatest Report"
        let testReportFile = `${process.env.PUBLIC_URL}/report/testsReport.json`;
        fetch(testReportFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch JSON ${testReportFile}`);
                }
                return response.json();
            })
            .then((testsReportResult: TestsReportResult) => {
                setTestsVisibility(calculateTestsVisibility(testsReportResult.testsReport))
                setScreenshotCoordinates(SearchLauncherUtils.calculateScreenshotCoordinates(testsReportResult.testsReport))
                setScreenshotsByTitleAndUrl(SearchLauncherUtils.calculateDataList(testsReportResult.testsReport))
                setTestsReportResult(testsReportResult);
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
            });

        let lunrDocumentFile = `${process.env.PUBLIC_URL}/report/lunrDocument.json`;
        fetch(lunrDocumentFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch JSON ${lunrDocumentFile}`);
                }
                return response.json();
            })
            .then((lunrDocument: LunrDocumentEntry[]) => {
                setIndexSearch(new LunrIndexSearch(lunrDocument));
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
            });
    }, []);

    function changeTestSelection(testSelection: SearchResultTestSelection) {
        switch (testSelection.type) {
            case "test":
                setTestsVisibility(toggleTestVisibility(testsVisibility, testSelection.t))
                return
            case "feature":
                setTestsVisibility(toggleFeatureVisibility(testsVisibility, testSelection.t, testSelection.f))
                return
            case "scenario":
                setScenarioDetailsProps(extractScenarioDetails(testsReportResult, testSelection))
                setTestsVisibility(makeScenarioVisible(testsVisibility, testSelection.t, testSelection.f, testSelection.s))
                return
            case "screenshot":
                setScenarioDetailsProps(extractScenarioDetails(testsReportResult, testSelection))
                setTestsVisibility(makeScenarioVisible(testsVisibility, testSelection.t, testSelection.f, testSelection.s))
                return
        }
    }

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <div className="justify-content-end">
                    <SearchLauncher changeTestSelection={changeTestSelection}
                                    testsReportResult={testsReportResult}
                                    screenshotsByTitleAndUrl={screenshotsByTitleAndUrl}
                                    screenshotCoordinates={screenshotCoordinates}
                                    indexSearch={indexSearch}/>
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
