export function buildTestsMap(testsReportData) {
    const testsMap = new Map();

    for (const test of testsReportData) {
        const featuresMap = new Map();

        for (const feature of test.features || []) {
            const scenariosMap = new Map();

            for (const scenario of feature.scenarios || []) {

                // Scenario with childrenVisibility and its maps
                const scenarioWithMaps = {
                    id: scenario.id,
                    childrenVisibility: false
                };

                scenariosMap.set(scenario.id, scenarioWithMaps);
            }

            // Feature with childrenVisibility and scenariosMap
            const featureWithMap = {
                id: feature.id,
                childrenVisibility: false,
                scenariosMap
            };

            featuresMap.set(feature.id, featureWithMap);
        }

        // Test with childrenVisibility and featuresMap
        const testEntry = {
            id: test.id,
            childrenVisibility: false,
            featuresMap
        };

        testsMap.set(test.id, testEntry);
    }

    return testsMap;
}

export function toggleFeatureVisibility(testsMap, testId, featureId) {
    const testEntry = testsMap.get(testId);
    if (!testEntry) return;

    const feature = testEntry.featuresMap.get(featureId);
    if (!feature) return;

    // Toggle childrenVisibility
    const newChildrenVisibility = !feature.childrenVisibility;
    feature.childrenVisibility = newChildrenVisibility;

    // If toggled OFF, also turn off all scenarios
    if (!newChildrenVisibility) {
        for (const scenario of feature.scenariosMap.values()) {
            scenario.childrenVisibility = false;
        }
    }
}

export function setScenarioVisibility(testsMap, testId, featureId, scenarioId) {
    const testEntry = testsMap.get(testId);
    if (!testEntry) return;

    const feature = testEntry.featuresMap.get(featureId);
    if (!feature) return;

    const scenario = feature.scenariosMap.get(scenarioId);
    if (!scenario) return;

    if (scenario.childrenVisibility) return;
    scenario.childrenVisibility = true;

}

export function toggleTestVisibility(testsMap, testId) {
    const testEntry = testsMap.get(testId);
    if (!testEntry) return;

    const newChildrenVisibility = !testEntry.childrenVisibility;
    testEntry.childrenVisibility = newChildrenVisibility;

    // If toggled OFF, propagate to features and scenarios
    if (!newChildrenVisibility) {
        for (const feature of testEntry.featuresMap.values()) {
            feature.childrenVisibility = false;
            for (const scenario of feature.scenariosMap.values()) {
                scenario.childrenVisibility = false;
            }
        }
    }
}

