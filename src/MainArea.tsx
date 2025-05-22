import React, {useRef, useState} from "react";
import ScenarioDetails, {ScenarioDetailsProps} from "./ScenarioDetailsData";
import {TestsReportResult} from "./model";
import {TestsVisibility} from "./testMapBuilder";
import TestsNavBar from "./components/navmenu/TestsNavBar";

export interface MainAreaProps {
    testsReportResult: TestsReportResult
    testsVisibility: TestsVisibility
    changeTestSelection: (i: any) => void
    scenarioDetailsProps: ScenarioDetailsProps
}

function MainArea({testsReportResult, testsVisibility, changeTestSelection, scenarioDetailsProps}: MainAreaProps) {
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(400);

    const startResizing = React.useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent: any) => {
            let ref: any = sidebarRef.current
            const newWidth = mouseMoveEvent.clientX - ref.getBoundingClientRect().left
            if (isResizing && newWidth >= 400) {
                console.log("diff is " + newWidth)
                setSidebarWidth(newWidth);
            }
        },
        [isResizing]
    );

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        <div className="app-container">
            <div
                ref={sidebarRef}
                className="app-sidebar"
                style={{width: sidebarWidth}}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => e.preventDefault()}
            >
                <div className="app-sidebar-content">
                    <TestsNavBar testsReportResult={testsReportResult}
                                 testsVisibility={testsVisibility}
                                 changeTestSelection={changeTestSelection}/>
                </div>
                <div className="app-sidebar-resizer" onMouseDown={startResizing}/>
            </div>
            <div className="app-frame">
                <ScenarioDetails scenarioDetails={scenarioDetailsProps.scenarioDetails}/>
            </div>
        </div>
    );
}

export default MainArea;
