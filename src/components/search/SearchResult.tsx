import React, {JSX} from 'react';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import {Stack} from "react-bootstrap";
import ScreenshotCoordinates = SearchLauncherUtils.ScreenshotCoordinates;

export interface SearchResultProps {
    changeTestSelection: (testSelection: SearchResultTestSelection) => void
    screenshotCoordinatesFound: ScreenshotCoordinates[]
    testsReportResult: TestsReportResult
    handleParentClose: () => void
}

function SearchResult({
                          changeTestSelection,
                          testsReportResult,
                          screenshotCoordinatesFound,
                          handleParentClose
                      }: SearchResultProps): JSX.Element {

    function handleOnclick(value: SearchLauncherUtils.ScreenshotCoordinates) {
        handleParentClose()
        changeTestSelection({
            type: "screenshot",
            t: value.testId,
            f: value.featureId,
            s: value.scenarioId,
            ss: value.ss.id
        })
    }

    if (screenshotCoordinatesFound.length === 0) {
        return <div/>
    } else {
        const innerResult = screenshotCoordinatesFound.map((value: SearchLauncherUtils.ScreenshotCoordinates, index: number) => {
            return (
                <div className="d-flex flex-column border border-dark" onClick={() => handleOnclick(value)}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bolder">Result: {index + 1} of {screenshotCoordinatesFound.length}</div>
                        <div className="fw-bolder">Test: {value.testDesc}</div>
                        <div className="fw-bolder">Feature: {value.featureDesc}</div>
                        <div className="fw-bolder">scenario: {value.scenarioDesc}</div>
                        <div className="fw-bolder">Url: {value.ss.pageUrl}</div>
                        <div className="fw-bolder">Title:{value.ss.pageTitle}</div>
                        <div className="fw-bolder">Index:{value.ss.id}</div>
                    </div>
                    <div style={{overflow: "scroll", height: "400px"}}>
                        <img className="p-1" width={"40%"}
                             src={testsReportResult.screenshotsLocationPrefix + value.ss.originalLocation}/>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="p-2">
                    Results: {screenshotCoordinatesFound.length} screenshots found
                </div>
                <div className="p-2" style={{overflow: "scroll", height: "600px"}}>
                    <Stack gap={2}>
                        {innerResult}
                    </Stack>
                </div>
            </div>

        )
    }
}

export default SearchResult;