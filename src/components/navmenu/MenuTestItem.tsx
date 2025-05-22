import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import MenuFeatureItem from "./MenuFeatureItem";
import {FeatureVisibility, TestsVisibility, TestVisibility} from "../../testMapBuilder";
import {FeatureReport, SearchResultTestSelection, TestReport} from "../../model";

export interface MenuTestItemProps {
    testReport: TestReport;
    index: number;
    testsVisibility: TestsVisibility;
    changeTestSelection: (i: SearchResultTestSelection) => void
}

function getFeatureVisibility(featureVisibility: Map<string, FeatureVisibility>, feature: FeatureReport): FeatureVisibility {
    const existingFeature = featureVisibility.get(feature.id);
    if (!existingFeature) {
        throw new Error(`Feature with id "${feature.id}" not found in featureVisibility map.`);
    }
    return existingFeature;
}

const MenuTestItem = ({testReport, index, testsVisibility, changeTestSelection}: MenuTestItemProps) => {

    let featuresToBeShown;

    let test: TestVisibility = testsVisibility.get(testReport.id) as TestVisibility;

    if (test.childrenVisibility) {
        const featureVisibility: Map<string, FeatureVisibility> = test.featuresMap
        featuresToBeShown = (
            <ul className="feature-menu">
                {testReport.features.map((feature: FeatureReport, index: number) => <MenuFeatureItem
                    key={feature.id}
                    featureReport={feature}
                    index={index}
                    featureVisibility={getFeatureVisibility(featureVisibility, feature)}
                    parent={{t: testReport.id}}
                    changeTestSelection={changeTestSelection}/>)}
            </ul>
        )
    } else {
        featuresToBeShown = null
    }

    // @ts-ignore
    function handleVisibility(event) {
        event.preventDefault();
        changeTestSelection({type: "test", t: testReport.id})
    }

    return (
        <li>
            <a id={testReport.id} href="/"
               onClick={handleVisibility}>Test {(index + 1) + ": " + testReport.name}</a>
            {featuresToBeShown}
        </li>
    );
};

export default MenuTestItem;