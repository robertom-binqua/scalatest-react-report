import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuFeatureItem from "./MenuFeatureItem";

const MenuTestItem = ({id, name, features, index, testSelected, changeTestSelection}) => {

    let featuresToBeShown;
    if (testSelected.t === id) {
        featuresToBeShown = (
            <ul className="feature-menu">
                {features.map((s, index) => <MenuFeatureItem key={s.id} id={s.id}
                                                             index={index}
                                                             name={s.description}
                                                             scenarios={s.scenarios}
                                                             testSelected={testSelected}
                                                             changeTestSelection={changeTestSelection}/>)}
            </ul>
        )
    } else {
        featuresToBeShown = null
    }

    function handleVisibility(event) {
        event.preventDefault();
        changeTestSelection({t: id})
    }

    return (
        <li>
            <a id={id} href="/" onClick={handleVisibility}>Test {(index + 1) + ": " + name}</a>
            {featuresToBeShown}
        </li>
    );
};

export default MenuTestItem;