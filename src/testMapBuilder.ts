import {ScenarioReport, ScenarioSearchResult, ScreenshotSearchResult, TestReport, TestsReportResult} from "./model";
import {ScenarioDetailsProps} from "./ScenarioDetailsData";

export interface ScenarioVisibility {
    id: string,
    childrenVisibility: boolean,
}

export interface FeatureVisibility {
    id: string,
    childrenVisibility: boolean,
    scenariosMap: Map<string, ScenarioVisibility>
}

export interface TestVisibility {
    id: string,
    childrenVisibility: boolean,
    featuresMap: Map<string, FeatureVisibility>
}

export type TestsVisibility = Map<string, TestVisibility>

export type ScenarioSelected = undefined | { t: string; f: string; s: string; }

export function calculateTestsVisibility(testsReport: TestReport[]): TestsVisibility {
    const testsMap = new Map<string, TestVisibility>();

    for (const test of testsReport) {
        const featuresMap = new Map<string, FeatureVisibility>();

        for (const feature of test.features || []) {
            const scenariosMap: Map<string, ScenarioVisibility> = new Map<string, ScenarioVisibility>();

            for (const scenario of feature.scenarios || []) {

                // Scenario with childrenVisibility and its maps
                const scenarioWithMaps: ScenarioVisibility = {
                    id: scenario.id,
                    childrenVisibility: false
                };

                scenariosMap.set(scenario.id, scenarioWithMaps);
            }

            const featureWithMap: FeatureVisibility = {
                id: feature.id,
                childrenVisibility: false,
                scenariosMap
            };

            featuresMap.set(feature.id, featureWithMap);
        }

        const testEntry: TestVisibility = {
            id: test.id,
            childrenVisibility: false,
            featuresMap
        };

        testsMap.set(test.id, testEntry);
    }

    return testsMap;
}

export function toggleFeatureVisibility(
    testsVisibility: TestsVisibility,
    testId: string,
    featureId: string
): TestsVisibility {
    const test = testsVisibility.get(testId);
    if (!test) return testsVisibility;

    const feature = test.featuresMap.get(featureId);
    if (!feature) return testsVisibility;

    const newChildrenVisibility = !feature.childrenVisibility;

    const newScenariosMap: Map<string, ScenarioVisibility> = new Map(feature.scenariosMap);
    if (!newChildrenVisibility) {
        for (const [id, scenario] of newScenariosMap) {
            newScenariosMap.set(id, {...scenario, childrenVisibility: false});
        }
    }

    const newFeature: FeatureVisibility = {
        ...feature,
        childrenVisibility: newChildrenVisibility,
        scenariosMap: newScenariosMap,
    };

    const newFeaturesMap: Map<string, FeatureVisibility> = new Map(test.featuresMap);
    newFeaturesMap.set(featureId, newFeature);

    const newTest: TestVisibility = {
        ...test,
        childrenVisibility: true,
        featuresMap: newFeaturesMap,
    };

    const newTestsMap = new Map(testsVisibility);
    newTestsMap.set(testId, newTest);

    return newTestsMap;
}

export function findScenarioSelected(testsVisibility: TestsVisibility): ScenarioSelected {

    function extractScenarioSelected(testsVisibility: TestsVisibility): ScenarioSelected[] {
        return Array.from(testsVisibility.values()).flatMap((test: TestVisibility) => {
            return Array.from(test.featuresMap.values()).flatMap((feature: FeatureVisibility) => {
                return Array.from(feature.scenariosMap.values()).flatMap((s: ScenarioVisibility) => {
                    if (!s.childrenVisibility) return []
                    else
                        return [
                            {
                                t: test.id,
                                f: feature.id,
                                s: s.id,
                            }
                        ]

                })
            })
        });
    }

    const result: ScenarioSelected[] = extractScenarioSelected(testsVisibility)
    switch (result.length) {
        case 0 :
            return undefined
        case 1 :
            return extractScenarioSelected(testsVisibility)[0]
        default :
            throw new Error(`We cannot have more than 1 scenario selected but we had ${result.length}`)
    }
}

export function setScenarioVisibility(testsVisibility: TestsVisibility, testId: string, featureId: string, scenarioId: string, scenarioVisibility: boolean): TestsVisibility {
    const testToBeModified = testsVisibility.get(testId);
    if (!testToBeModified) return testsVisibility;

    const featureToBeModified = testToBeModified.featuresMap.get(featureId);
    if (!featureToBeModified) return testsVisibility;

    const scenarioToBeModified = featureToBeModified.scenariosMap.get(scenarioId);
    if (!scenarioToBeModified) return testsVisibility;

    const newScenario: ScenarioVisibility = {...scenarioToBeModified, childrenVisibility: scenarioVisibility}

    const newScenariosMap = new Map(featureToBeModified.scenariosMap);
    newScenariosMap.set(scenarioId, newScenario);

    const newFeature = {...featureToBeModified, childrenVisibility: true, scenariosMap: newScenariosMap};
    const newFeaturesMap = new Map(testToBeModified.featuresMap);
    newFeaturesMap.set(featureId, newFeature);

    const newTest = {...testToBeModified, childrenVisibility: true, featuresMap: newFeaturesMap};
    const newTestsMap = new Map(testsVisibility);
    newTestsMap.set(testId, newTest);

    return newTestsMap
}

export function makeScenarioVisible(testsVisibility: TestsVisibility, testId: string, featureId: string, scenarioId: string): TestsVisibility {
    const scenarioSelected = findScenarioSelected(testsVisibility)
    if (scenarioSelected) {
        const newVisibility: Map<string, TestVisibility> = setScenarioVisibility(testsVisibility,
            scenarioSelected.t,
            scenarioSelected.f,
            scenarioSelected.s,
            false)
        return setScenarioVisibility(newVisibility, testId, featureId, scenarioId, true)
    }
    return setScenarioVisibility(testsVisibility, testId, featureId, scenarioId, true)

}

export function toggleTestVisibility(
    testsVisibility: TestsVisibility,
    testId: string
): TestsVisibility {
    const test = testsVisibility.get(testId);
    if (!test) return testsVisibility;

    const newChildrenVisibility: boolean = !test.childrenVisibility;
    const newFeaturesMap = new Map<string, FeatureVisibility>();

    for (const [featureId, feature] of test.featuresMap) {
        let newScenariosMap = feature.scenariosMap;

        if (!newChildrenVisibility) {
            newScenariosMap = new Map<string, ScenarioVisibility>();
            for (const [scenarioId, scenario] of feature.scenariosMap) {
                newScenariosMap.set(scenarioId, {...scenario, childrenVisibility: false});
            }
        }

        newFeaturesMap.set(featureId, {
            ...feature,
            childrenVisibility: newChildrenVisibility ? feature.childrenVisibility : false,
            scenariosMap: newScenariosMap,
        });
    }

    const newTest = {
        ...test,
        childrenVisibility: newChildrenVisibility,
        featuresMap: newFeaturesMap,
    };

    const newTestsVisibility = new Map(testsVisibility);
    newTestsVisibility.set(testId, newTest);

    return newTestsVisibility;
}

export function extractScenarioDetails(testsReportResult: TestsReportResult, selection: ScenarioSearchResult | ScreenshotSearchResult): ScenarioDetailsProps {
    const testsReport = testsReportResult.testsReport
    const maybeATest = testsReport.find((element) => element.id === selection.t);
    if (!maybeATest) throw new Error(`test id ${selection.t} missing`);

    const maybeAFeature = maybeATest.features.find((element) => element.id === selection.f);
    if (!maybeAFeature) throw new Error(`feature id ${selection.f} missing`);

    let maybeAScenario: ScenarioReport | undefined = maybeAFeature.scenarios.find(element => element.id === selection.s);
    if (!maybeAScenario) throw new Error(`test id ${selection.s} missing`);

    return {
        scenarioDetails: {
            scenarioReport: maybeAScenario,
            screenshotsLocationPrefix: testsReportResult.screenshotsLocationPrefix,
            screenshotSelected: ((selection.type === "screenshot") ? selection.ss : undefined)
        }
    }
}

