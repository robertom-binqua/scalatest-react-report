import './App.css';
import Navbar from "react-bootstrap/Navbar";
import MainArea from "./MainArea";
import React, {useState} from "react";
import SearchLauncher from "./SearchLauncher";

function App() {
    const [testSelected, setTestSelected] = useState({});

    function changeTestSelection(testSelection) {
        console.log(testSelection)
        setTestSelected(testSelection)
    }

    const testReport = window.testsReport

    console.log(testSelected)

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <div className="justify-content-end">
                    <SearchLauncher className="p-3" changeTestSelection={changeTestSelection}></SearchLauncher>
                    <Navbar.Text className="p-3 me-3">12 March 2025</Navbar.Text>
                </div>
            </Navbar>
            <MainArea tests={testReport.testsReport}
                      screenshotsLocationPrefix={testReport.screenshotsLocationPrefix}
                      testSelected={testSelected}
                      changeTestSelection={changeTestSelection}/>
        </div>
    );
}

export default App;
