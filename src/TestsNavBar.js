import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuTestItem from "./MenuTestItem";

const TestsNavBar = ({tests, testSelected, changeTestSelection}) => {

    return (
        <ul className="test-menu">
            {tests.map((t, index) => <MenuTestItem key={t.id}
                                                   id={t.id}
                                                   name={t.name}
                                                   features={t.features}
                                                   index={index}
                                                   testSelected={testSelected}
                                                   changeTestSelection={changeTestSelection}/>)}
        </ul>
    );
};

export default TestsNavBar;