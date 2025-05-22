import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuTestItem from "./MenuTestItem";
import {TestsVisibility} from "../../testMapBuilder";
import {TestReport, SearchResultTestSelection, TestsReportResult} from "../../model";

export interface TestsNavBarProps {
    testsReportResult: TestsReportResult
    testsVisibility: TestsVisibility
    changeTestSelection: (i: SearchResultTestSelection) => void
}

const TestsNavBar = ({testsReportResult, testsVisibility, changeTestSelection}: TestsNavBarProps) => {

    console.log("testsReportResult " + testsReportResult)
    return (
        <ul className="test-menu">
            {testsReportResult.testsReport.map((t: TestReport, index: number) => <MenuTestItem key={t.id}
                                                                                               testReport={t}
                                                                                               index={index}
                                                                                               testsVisibility={testsVisibility}
                                                                                               changeTestSelection={changeTestSelection}/>)}
        </ul>
    );
};

export default TestsNavBar;