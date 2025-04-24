import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import FeatureItem from "./FeatureItem";

const TestItem = (props) => {
    const [areFeaturesShown, setAreFeaturesShown] = useState(false);

    let features;
    if (areFeaturesShown) {
        features = (
            <ul className="feature-menu">
                {props.features.map(s => <FeatureItem key={s.id} id={s.id} name={s.description}
                                                     scenarios={s.scenarios} onChangeContent={props.onChangeContent}/> )}
            </ul>
        )
    } else {
        features = null
    }

    function handleVisibility(event) {
        setAreFeaturesShown(visibility => !visibility)
        event.preventDefault();
    }

    return (
        <li>
            <a id={props.id} href="/" onClick={handleVisibility}>{props.name}</a>
            {features}
        </li>
    );
};

export default TestItem;