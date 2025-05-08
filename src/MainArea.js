import React, {useRef, useState} from "react";
import MainContent from "./MainContent";
import TestsNavBar from "./TestsNavBar";

function MainArea({
                      tests,
                      screenshotsLocationPrefix,
                      testSelected,
                      changeTestSelection
                  }) {
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(1000);

    const startResizing = React.useCallback((mouseDownEvent) => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent) => {
            if (isResizing) {
                setSidebarWidth(
                    mouseMoveEvent.clientX -
                    sidebarRef.current.getBoundingClientRect().left
                );
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
                onMouseDown={(e) => e.preventDefault()}
            >
                <div className="app-sidebar-content">
                    <TestsNavBar tests={tests}
                                 testSelected={testSelected}
                                 changeTestSelection={changeTestSelection}/>
                </div>
                <div className="app-sidebar-resizer" onMouseDown={startResizing}/>
            </div>
            <div className="app-frame">
                <MainContent tests={tests}
                             screenshotsLocationPrefix={screenshotsLocationPrefix}
                             testSelected={testSelected}
                />
            </div>
        </div>
    );
}

export default MainArea;
