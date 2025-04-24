import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Navbar from 'react-bootstrap/Navbar';
import MainContent from "./MainContent";
import TestsNavBar from "./TestsNavBar";

const MainComponent = (props) => {

    const [selectedScenario, setSelectedScenario] = useState(null);

    function changeSelectedScenario(scenario) {
        console.log("scenario is " +scenario)
        setSelectedScenario(scenario)
    }

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3">12 March 2025</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col md={4} className="bg-dark text-white p-3">
                        <TestsNavBar tests={props.tests} onChangeContent={changeSelectedScenario}/>
                    </Col>
                    <Col md={8} className="p-4">
                        <MainContent scenarioSelected={selectedScenario} tests={props.tests}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainComponent;