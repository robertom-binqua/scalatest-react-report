import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import ScenarioItem from "./ScenarioItem";

const FeatureItem = (props) => {
    const [areScenariosShown, setAreScenariosShown] = useState(false);

    let scenarios;
    if (areScenariosShown) {
        scenarios = (
            <ul className="scenario-menu">
                {props.scenarios.map(s => <ScenarioItem key={s.ordinal} name={s.description}/>)}
            </ul>
        )
    } else {
        scenarios = null
    }

    function handleVisibility(event) {
        setAreScenariosShown(visibility => !visibility)
        event.preventDefault();
    }

    return (
        <li>
            <a id={props.id} href="/" onClick={handleVisibility}>{props.name}</a>
            {scenarios}
        </li>
    );
};

export default FeatureItem;