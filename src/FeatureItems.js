import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import ScenarioItem from "./ScenarioItem";

const FeatureItems = (props) => {
    const [areScenariosShown, setAreScenariosShown] = useState(false);

    let scenarios;
    if (areScenariosShown) {
        scenarios = (
            <ul className="scenario-menu">
                Scenarios:
                {props.scenarios.map((s,index) => <ScenarioItem key={s.ordinal} index={index} scenario={s}
                                                        onChangeContent={props.onChangeContent}/>)}
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
            <a id={props.id} href="/" onClick={handleVisibility}>{(props.index + 1) + ". - " + props.name}</a>
            {scenarios}
        </li>
    );
};

export default FeatureItems;