import React, {JSX} from 'react';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {ScreenshotByTitleAndUrl} from "./SearchLauncher";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import {Stack} from "react-bootstrap";


export interface SearchResult {
    test: (testSelection: SearchResult) => void
    testsReportResult: TestsReportResult
    screenshotByTitleAndUrl: ScreenshotByTitleAndUrl | null
}

export interface SearchResultProps {
    changeTestSelection: (testSelection: SearchResultTestSelection) => void
    screenshotSelected: ScreenshotByTitleAndUrl | null
    testsReportResult: TestsReportResult
    handleParentClose: () => void
}

function SearchResult({
                          changeTestSelection,
                          screenshotSelected,
                          testsReportResult,
                          handleParentClose
                      }: SearchResultProps): JSX.Element {

    function handleOnclick(value: SearchLauncherUtils.ScreenshotCoordinates) {
        changeTestSelection({
            type: "screenshot",
            t: value.testId,
            f: value.featureId,
            s: value.scenarioId,
            ss: value.ss.index
        })
        handleParentClose()
    }

    if (!screenshotSelected || screenshotSelected.screenshotCoordinates.length === 0) {
        return <div/>
    } else {
        const innerResult = screenshotSelected.screenshotCoordinates.map((value: SearchLauncherUtils.ScreenshotCoordinates, index: number) => {
            return (
                <div className="d-flex flex-column border border-dark" onClick={() => handleOnclick(value)}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bolder">Result: {index + 1} of {screenshotSelected.screenshotCoordinates.length}</div>
                        <div className="fw-bolder">Test: {value.testDesc}</div>
                        <div className="fw-bolder">Feature: {value.featureDesc}</div>
                        <div className="fw-bolder">scenario: {value.scenarioDesc}</div>
                        <div className="fw-bolder">Url: {value.ss.pageUrl}</div>
                        <div className="fw-bolder">Title:{value.ss.pageTitle}</div>
                        <div className="fw-bolder">Index:{value.ss.index}</div>
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
                    Results: {screenshotSelected.screenshotCoordinates.length} screenshots found
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