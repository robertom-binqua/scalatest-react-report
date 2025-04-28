import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import TestItem from "./TestItem";

const TestsNavBar = (props) => {

    return (
        <ul className="test-menu">Tests:
            {props.tests.map(t => <TestItem key={t.id} id={t.id} name={t.name} features={t.features} onChangeContent={props.onChangeContent}/>)}
        </ul>
    );
};

export default TestsNavBar;