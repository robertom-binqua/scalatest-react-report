import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ScreenshotsCarousel from "./ScreenshotsCarousel";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import Navbar from 'react-bootstrap/Navbar';
import TestItem from "./TestItem";

const SidebarLayout = (props) => {

    let tests = (
        <ul className="test-menu">
            {props.tests.map(t => <TestItem key={t.id} id={t.id} name={t.name} features={t.features}/>)}
        </ul>
    )

    return (
        <div>
            <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
                <Navbar.Brand href="#home" className="ms-3">Test Report</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3"> 12 March 2025 </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col md={4} className="bg-dark text-white p-3">
                        {tests}
                    </Col>
                    {/* Main Content */}
                    <Col md={8} className="p-4">
                        <h2>Main Content</h2>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <div><p>This is the main page content area2.</p></div>
                        <ScreenshotsCarousel/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SidebarLayout;