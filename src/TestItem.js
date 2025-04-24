import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import FeatureItem from "./FeatureItem";

const TestItem = (prop) => {
    const [areFeaturesShown, setAreFeaturesShown] = useState(false);

    let features;
    if (areFeaturesShown) {
        features = (
            <ul className="feature-menu">
                {prop.features.map(s => <FeatureItem key={s.id} id={s.id} name={s.description}
                                                     scenarios={s.scenarios}/>)}
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
            <a id={prop.id} href="/" onClick={handleVisibility}>{prop.name}</a>
            {features}
        </li>
    );
};

export default TestItem;