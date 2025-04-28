import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Navbar from 'react-bootstrap/Navbar';
import MainArea from "./MainArea";

const MainComponent = (props) => {

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3">12 March 2025</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <MainArea tests={props.tests} screenshotsLocationPrefix={props.screenshotsLocationPrefix}/>
        </div>
    );
};

export default MainComponent;