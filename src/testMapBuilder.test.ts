import {
    calculateTestsVisibility,
    extractScenarioDetails,
    FeatureVisibility,
    makeScenarioVisible,
    ScenarioVisibility,
    TestsVisibility,
    TestVisibility,
    toggleFeatureVisibility
} from "./testMapBuilder";
import {ScenarioReport} from "./model";
import {ScenarioDetailsProps} from "./ScenarioDetailsData";
import TestsReferences from "./testsReferences";
import testsReport = TestsReferences.testsReport;

function extractMenuVisibility(map: Map<string, TestVisibility>) {
    return Array.from(map.values()).flatMap((test: TestVisibility) => {
        return Array.from(test.featuresMap.values()).flatMap((feature: FeatureVisibility) => Array.from(feature.scenariosMap.values()).flatMap((s: ScenarioVisibility) =>
            [
                {id: test.id, t: test.childrenVisibility},
                {id: feature.id, f: feature.childrenVisibility,},
                {id: s.id, s: s.childrenVisibility}
            ]
        ))
    });
}

test('as soon as it is created, a TestsVisibility has all visibility to false', () => {

    expect(extractMenuVisibility(calculateTestsVisibility(TestsReferences.testsReport))).toStrictEqual([
        {"id": "t_1", "t": false}, {"id": "f_1", "f": false}, {"id": "s_1", "s": false},
        {"id": "t_1", "t": false}, {"id": "f_2", "f": false}, {"id": "s_2", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

})

test('toggleFeatureVisibility set to true also the visibility of the parent test. ' +
    'If you see a feature of a test T in the menù, you will also see all the features of that test T', () => {

    let actualTestsVisibility: TestsVisibility = calculateTestsVisibility(TestsReferences.testsReport);

    actualTestsVisibility = toggleFeatureVisibility(actualTestsVisibility, "t_1", "f_1")

    expect(extractMenuVisibility(actualTestsVisibility)).toStrictEqual([
        {"id": "t_1", "t": true}, {"id": "f_1", "f": true}, {"id": "s_1", "s": false},
        {"id": "t_1", "t": true}, {"id": "f_2", "f": false}, {"id": "s_2", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

    actualTestsVisibility = toggleFeatureVisibility(actualTestsVisibility, "t_1", "f_1")

    expect(extractMenuVisibility(actualTestsVisibility)).toStrictEqual([
        {"id": "t_1", "t": true}, {"id": "f_1", "f": false}, {"id": "s_1", "s": false},
        {"id": "t_1", "t": true}, {"id": "f_2", "f": false}, {"id": "s_2", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

    actualTestsVisibility = toggleFeatureVisibility(actualTestsVisibility, "t_1", "f_1")

    expect(extractMenuVisibility(actualTestsVisibility)).toStrictEqual([
        {"id": "t_1", "t": true}, {"id": "f_1", "f": true}, {"id": "s_1", "s": false},
        {"id": "t_1", "t": true}, {"id": "f_2", "f": false}, {"id": "s_2", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

})

test('we can have only one scenario with childrenVisibility to true, because we show only 1 scenario details at the time', () => {

    let actualVisibility: TestsVisibility = calculateTestsVisibility(testsReport);

    actualVisibility = makeScenarioVisible(actualVisibility, "t_1", "f_1", "s_1")

    expect(extractMenuVisibility(actualVisibility)).toStrictEqual([
        {"id": "t_1", "t": true}, {"id": "f_1", "f": true}, {"id": "s_1", "s": true},
        {"id": "t_1", "t": true}, {"id": "f_2", "f": false}, {"id": "s_2", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

    actualVisibility = makeScenarioVisible(actualVisibility, "t_1", "f_2", "s_2")

    expect(extractMenuVisibility(actualVisibility)).toStrictEqual([
        {"id": "t_1", "t": true}, {"id": "f_1", "f": true}, {"id": "s_1", "s": false},
        {"id": "t_1", "t": true}, {"id": "f_2", "f": true}, {"id": "s_2", "s": true},
        {"id": "t_2", "t": false}, {"id": "f_3", "f": false}, {"id": "s_3", "s": false},
        {"id": "t_2", "t": false}, {"id": "f_4", "f": false}, {"id": "s_4", "s": false}
    ])

})

test('extractScenarioDetails extracts the correct details', () => {

    const scenarioReport: ScenarioReport = {
        "id": "s_3",
        "description": "we can go from home page to last page - scenario 1",
        "startedTimestamp": 1746618902479,
        "finishedTimestamp": 1746618904139,
        "screenshots": [
            {
                "originalLocation": "scenario_ordinal_1_3/original/1_ON_ENTER_PAGE.png",
                "sourceLocation": "scenario_ordinal_1_3/sources/1_ON_ENTER_PAGE.txt",
                "pageUrl": "http://localhost:8081/home.html",
                "id": "ss_1",
                "pageTitle": "Home",
                "screenshotMoment": "ON_ENTER_PAGE"
            }
        ],
        "steps": [
            {
                "message": "Given we go to the home page",
                "timestamp": 1746618904138,
                "id": "st_1_4"
            }
        ],
        "testOutcome": "succeeded"
    }

    const expScenarioDetailsProps: ScenarioDetailsProps = {
        scenarioDetails: {
            scenarioReport: scenarioReport,
            screenshotsLocationPrefix: "this is a test",
            screenshotSelected: undefined
        }
    }

    const testsReportResult = {
        testsReport: testsReport,
        screenshotsLocationPrefix: "this is a test"
    }

    expect(extractScenarioDetails(testsReportResult, {
        type: "scenario",
        t: "t_2",
        f: "f_3",
        s: "s_3",
    })).toStrictEqual(expScenarioDetailsProps)

})

