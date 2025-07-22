import {SearchLauncherUtils} from "./SearchLauncherUtils";
import {TestReport} from "../../model";
import {ScreenshotByTitleAndUrl} from "./SearchLauncher";

test('SearchLauncherUtils.calculateDataList creates the right ScreenshotByTitleAndUrl[]', () => {

    let ss1_f1_s1 = {
        "originalLocation": "ol f_1 s_1 1",
        "sourceLocation": "sl f_1 s_1 1",
        "pageUrl": "url f_1 s_1 1",
        "id": "ss_1",
        "pageTitle": "title f_1 s_1 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss2_f1_s1_2 = {
        "originalLocation": "ol f_1 s_1 2",
        "sourceLocation": "sl f_1 s_1 2",
        "pageUrl": "url f_1 s_1 2",
        "id": "ss_2",
        "pageTitle": "title f_1 s_1 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss3_f2_s2_1 = {
        "originalLocation": "ol f_2 s_2 1",
        "sourceLocation": "sl f_2s_2 1",
        "pageUrl": "url f_2 s_2 1",
        "id": "ss_1",
        "pageTitle": "title f_2 s_2 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss4_f2_s2_2 = {
        "originalLocation": "ol f_2 s_2 2",
        "sourceLocation": "sl f_2s_2 2",
        "pageUrl": "url f_2 s_2 2",
        "id": "ss_2",
        "pageTitle": "title f_2 s_2 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss5_f3_s3_1 = {
        "originalLocation": "ol f_3 s_3 1",
        "sourceLocation": "sl f_3 s_3 1",
        "pageUrl": "url f_3 s_3 1",
        "id": "ss_1",
        "pageTitle": "title f_3 s_3 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss6_f4_s4_1 = {
        "originalLocation": "ol f_4 s_4 1",
        "sourceLocation": "sl f_4 s_4 1",
        "pageUrl": "url f_4 s_4 1",
        "id": "ss_1",
        "pageTitle": "title f_4 s_4 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss7_f4_s4_2 = {
        "originalLocation": "ol f_4 s_4 2",
        "sourceLocation": "sl f_4 s_4 2",
        "pageUrl": "url f_4 s_4 2",
        "id": "ss_2",
        "pageTitle": "title f_4 s_4 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };

    const testsReport: TestReport[] = [
        {
            "name": "t_1 desc",
            "id": "t_1",
            "features": [
                {
                    "description": "f_1 desc",
                    "id": "f_1",
                    "scenarios": [
                        {
                            "id": "s_1",
                            "description": "s_1 desc",
                            "startedTimestamp": 1746618902479,
                            "finishedTimestamp": 1746618904139,
                            "screenshots": [
                                ss1_f1_s1,
                                ss2_f1_s1_2,
                            ],
                            "steps": [
                                {
                                    "message": "Given we go to the home page",
                                    "timestamp": 1746618904138,
                                    "id": "st_1_4"
                                },
                                {
                                    "message": "When we click page 1",
                                    "timestamp": 1746618904138,
                                    "id": "st_1_5"
                                }
                            ],
                            "testOutcome": "succeeded"
                        }
                    ]
                },
                {
                    "description": "f_2 desc",
                    "id": "f_2",
                    "scenarios": [
                        {
                            "id": "s_2",
                            "description": "s_2 desc",
                            "startedTimestamp": 1746618902479,
                            "finishedTimestamp": 1746618904139,
                            "screenshots": [
                                ss3_f2_s2_1,
                                ss4_f2_s2_2,
                            ],
                            "steps": [
                                {
                                    "message": "Given we go to the home page",
                                    "timestamp": 1746618904138,
                                    "id": "st_2_4"
                                },
                                {
                                    "message": "When we click page 1",
                                    "timestamp": 1746618904138,
                                    "id": "st_2_5"
                                }
                            ],
                            "testOutcome": "succeeded"
                        }
                    ]
                }
            ]
        },
        {
            "name": "t_2 desc",
            "id": "t_2",
            "features": [
                {
                    "description": "f_3 desc",
                    "id": "f_3",
                    "scenarios": [
                        {
                            "id": "s_3",
                            "description": "s_3 desc",
                            "startedTimestamp": 1746618902479,
                            "finishedTimestamp": 1746618904139,
                            "screenshots": [
                                ss5_f3_s3_1,
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
                    ]
                },
                {
                    "description": "f_4 desc",
                    "id": "f_4",
                    "scenarios": [
                        {
                            "id": "s_4",
                            "description": "s_4 desc",
                            "startedTimestamp": 1746618902479,
                            "finishedTimestamp": 1746618904139,
                            "screenshots": [
                                ss6_f4_s4_1,
                                ss7_f4_s4_2,
                            ],
                            "steps": [
                                {
                                    "message": "Given we go to the home page",
                                    "timestamp": 1746618904138,
                                    "id": "st_2_4"
                                },
                                {
                                    "message": "When we click page 1",
                                    "timestamp": 1746618904138,
                                    "id": "st_2_5"
                                }
                            ],
                            "testOutcome": "succeeded"
                        }
                    ]
                }
            ]
        }
    ]

    expect(SearchLauncherUtils.calculateDataList(testsReport)).toStrictEqual(
        [
            {
                "id": 0,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_1 desc",
                        "featureId": "f_1",
                        "scenarioDesc": "s_1 desc",
                        "scenarioId": "s_1",
                        "ss": ss1_f1_s1,
                        "testDesc": "t_1 desc",
                        "testId": "t_1"
                    }
                ],
                "title": "title f_1 s_1 1",
                "url": "url f_1 s_1 1"
            },
            {
                "id": 1,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_1 desc",
                        "featureId": "f_1",
                        "scenarioDesc": "s_1 desc",
                        "scenarioId": "s_1",
                        "ss": ss2_f1_s1_2,
                        "testDesc": "t_1 desc",
                        "testId": "t_1"
                    }
                ],
                "title": "title f_1 s_1 2",
                "url": "url f_1 s_1 2"
            },
            {
                "id": 2,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_2 desc",
                        "featureId": "f_2",
                        "scenarioDesc": "s_2 desc",
                        "scenarioId": "s_2",
                        "ss": ss3_f2_s2_1,
                        "testDesc": "t_1 desc",
                        "testId": "t_1"
                    }
                ],
                "title": "title f_2 s_2 1",
                "url": "url f_2 s_2 1"
            },
            {
                "id": 3,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_2 desc",
                        "featureId": "f_2",
                        "scenarioDesc": "s_2 desc",
                        "scenarioId": "s_2",
                        "ss": {
                            "index": 2,
                            "originalLocation": "ol f_2 s_2 2",
                            "pageTitle": "title f_2 s_2 2",
                            "pageUrl": "url f_2 s_2 2",
                            "screenshotMoment": "ON_ENTER_PAGE",
                            "sourceLocation": "sl f_2s_2 2"
                        },
                        "testDesc": "t_1 desc",
                        "testId": "t_1"
                    }
                ],
                "title": "title f_2 s_2 2",
                "url": "url f_2 s_2 2"
            },
            {
                "id": 4,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_3 desc",
                        "featureId": "f_3",
                        "scenarioDesc": "s_3 desc",
                        "scenarioId": "s_3",
                        "ss": ss5_f3_s3_1,
                        "testDesc": "t_2 desc",
                        "testId": "t_2"
                    }
                ],
                "title": "title f_3 s_3 1",
                "url": "url f_3 s_3 1"
            },
            {
                "id": 5,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_4 desc",
                        "featureId": "f_4",
                        "scenarioDesc": "s_4 desc",
                        "scenarioId": "s_4",
                        "ss": ss6_f4_s4_1,
                        "testDesc": "t_2 desc",
                        "testId": "t_2"
                    }
                ],
                "title": "title f_4 s_4 1",
                "url": "url f_4 s_4 1"
            },
            {
                "id": 6,
                "screenshotCoordinates": [
                    {
                        "featureDesc": "f_4 desc",
                        "featureId": "f_4",
                        "scenarioDesc": "s_4 desc",
                        "scenarioId": "s_4",
                        "ss": ss7_f4_s4_2,
                        "testDesc": "t_2 desc",
                        "testId": "t_2"
                    }
                ],
                "title": "title f_4 s_4 2",
                "url": "url f_4 s_4 2"
            }
        ]
    )

})
test('SearchLauncherUtils.findScreenshotByTitleAndUrl returns the selected entry', () => {
    let ss1_f1_s1 = {
        "originalLocation": "ol f_1 s_1 1",
        "sourceLocation": "sl f_1 s_1 1",
        "pageUrl": "url f_1 s_1 1",
        "id": "ss_1",
        "pageTitle": "title f_1 s_1 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss2_f1_s1_2 = {
        "originalLocation": "ol f_1 s_1 2",
        "sourceLocation": "sl f_1 s_1 2",
        "pageUrl": "url f_1 s_1 2",
        "id": "ss_2",
        "pageTitle": "title f_1 s_1 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss3_f2_s2_1 = {
        "originalLocation": "ol f_2 s_2 1",
        "sourceLocation": "sl f_2s_2 1",
        "pageUrl": "url f_2 s_2 1",
        "id": "ss_1",
        "pageTitle": "title f_2 s_2 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss4_f2_s2_2 = {
        "originalLocation": "ol f_2 s_2 2",
        "sourceLocation": "sl f_2s_2 2",
        "pageUrl": "url f_2 s_2 2",
        "id": "ss_2",
        "pageTitle": "title f_2 s_2 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss5_f3_s3_1 = {
        "originalLocation": "ol f_3 s_3 1",
        "sourceLocation": "sl f_3 s_3 1",
        "pageUrl": "url f_3 s_3 1",
        "id": "ss_1",
        "pageTitle": "title f_3 s_3 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss6_f4_s4_1 = {
        "originalLocation": "ol f_4 s_4 1",
        "sourceLocation": "sl f_4 s_4 1",
        "pageUrl": "url f_4 s_4 1",
        "id": "ss_1",
        "pageTitle": "title f_4 s_4 1",
        "screenshotMoment": "ON_ENTER_PAGE"
    };
    let ss7_f4_s4_2 = {
        "originalLocation": "ol f_4 s_4 2",
        "sourceLocation": "sl f_4 s_4 2",
        "pageUrl": "url f_4 s_4 2",
        "id": "ss_2",
        "pageTitle": "title f_4 s_4 2",
        "screenshotMoment": "ON_ENTER_PAGE"
    };

    const data: ScreenshotByTitleAndUrl[] = [
        {
            "id": 0,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_1 desc",
                    "featureId": "f_1",
                    "scenarioDesc": "s_1 desc",
                    "scenarioId": "s_1",
                    "ss": ss1_f1_s1,
                    "testDesc": "t_1 desc",
                    "testId": "t_1"
                }
            ],
            "title": "title f_1 s_1 1",
            "url": "url f_1 s_1 1"
        },
        {
            "id": 1,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_1 desc",
                    "featureId": "f_1",
                    "scenarioDesc": "s_1 desc",
                    "scenarioId": "s_1",
                    "ss": ss2_f1_s1_2,
                    "testDesc": "t_1 desc",
                    "testId": "t_1"
                }
            ],
            "title": "title f_1 s_1 2",
            "url": "url f_1 s_1 2"
        },
        {
            "id": 2,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_2 desc",
                    "featureId": "f_2",
                    "scenarioDesc": "s_2 desc",
                    "scenarioId": "s_2",
                    "ss": ss3_f2_s2_1,
                    "testDesc": "t_1 desc",
                    "testId": "t_1"
                }
            ],
            "title": "title f_2 s_2 1",
            "url": "url f_2 s_2 1"
        },
        {
            "id": 3,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_2 desc",
                    "featureId": "f_2",
                    "scenarioDesc": "s_2 desc",
                    "scenarioId": "s_2",
                    "ss": {
                        "id": "ss_2",
                        "originalLocation": "ol f_2 s_2 2",
                        "pageTitle": "title f_2 s_2 2",
                        "pageUrl": "url f_2 s_2 2",
                        "screenshotMoment": "ON_ENTER_PAGE",
                        "sourceLocation": "sl f_2s_2 2"
                    },
                    "testDesc": "t_1 desc",
                    "testId": "t_1"
                }
            ],
            "title": "title f_2 s_2 2",
            "url": "url f_2 s_2 2"
        },
        {
            "id": 4,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_3 desc",
                    "featureId": "f_3",
                    "scenarioDesc": "s_3 desc",
                    "scenarioId": "s_3",
                    "ss": ss5_f3_s3_1,
                    "testDesc": "t_2 desc",
                    "testId": "t_2"
                }
            ],
            "title": "title f_3 s_3 1",
            "url": "url f_3 s_3 1"
        },
        {
            "id": 5,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_4 desc",
                    "featureId": "f_4",
                    "scenarioDesc": "s_4 desc",
                    "scenarioId": "s_4",
                    "ss": ss6_f4_s4_1,
                    "testDesc": "t_2 desc",
                    "testId": "t_2"
                }
            ],
            "title": "title f_4 s_4 1",
            "url": "url f_4 s_4 1"
        },
        {
            "id": 6,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_4 desc",
                    "featureId": "f_4",
                    "scenarioDesc": "s_4 desc",
                    "scenarioId": "s_4",
                    "ss": ss7_f4_s4_2,
                    "testDesc": "t_2 desc",
                    "testId": "t_2"
                }
            ],
            "title": "title f_4 s_4 2",
            "url": "url f_4 s_4 2"
        }
    ]

    expect(SearchLauncherUtils.findScreenshotCoordinates(data, "title f_3 s_3 1 - url f_3 s_3 1")).toStrictEqual(
        {
            "id": 4,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_3 desc",
                    "featureId": "f_3",
                    "scenarioDesc": "s_3 desc",
                    "scenarioId": "s_3",
                    "ss": {
                        "index": 1,
                        "originalLocation": "ol f_3 s_3 1",
                        "pageTitle": "title f_3 s_3 1",
                        "pageUrl": "url f_3 s_3 1",
                        "screenshotMoment": "ON_ENTER_PAGE",
                        "sourceLocation": "sl f_3 s_3 1"
                    },
                    "testDesc": "t_2 desc",
                    "testId": "t_2"
                }
            ],
            "title": "title f_3 s_3 1",
            "url": "url f_3 s_3 1"
        }
    )

})
test('SearchLauncherUtils.findScreenshotByTitleAndUrl throws an Error if there is no entry', () => {
    const data: ScreenshotByTitleAndUrl[] = [
        {
            "id": 0,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_1 desc",
                    "featureId": "f_1",
                    "scenarioDesc": "s_1 desc",
                    "scenarioId": "s_1",
                    "ss": {
                        "originalLocation": "ol f_1 s_1 1",
                        "sourceLocation": "sl f_1 s_1 1",
                        "pageUrl": "url f_1 s_1 1",
                        "id": "ss_1",
                        "pageTitle": "title f_1 s_1 1",
                        "screenshotMoment": "ON_ENTER_PAGE"
                    },
                    "testDesc": "t_1 desc",
                    "testId": "t_1"
                }
            ],
            "title": "title f_1 s_1 1",
            "url": "url f_1 s_1 1"
        }
    ]

    expect(SearchLauncherUtils.findScreenshotCoordinates(data, "I do not exist")).toStrictEqual(
        {
            "id": 4,
            "screenshotCoordinates": [
                {
                    "featureDesc": "f_3 desc",
                    "featureId": "f_3",
                    "scenarioDesc": "s_3 desc",
                    "scenarioId": "s_3",
                    "ss": {
                        "index": 1,
                        "originalLocation": "ol f_3 s_3 1",
                        "pageTitle": "title f_3 s_3 1",
                        "pageUrl": "url f_3 s_3 1",
                        "screenshotMoment": "ON_ENTER_PAGE",
                        "sourceLocation": "sl f_3 s_3 1"
                    },
                    "testDesc": "t_2 desc",
                    "testId": "t_2"
                }
            ],
            "title": "title f_3 s_3 1",
            "url": "url f_3 s_3 1"
        }
    )

})

test('SearchLauncherUtils.findScreenshotCoordinates returns the right 2 results given an array of refs and a ScreenshotCoordinates[]', () => {
    const coordinates: SearchLauncherUtils.ScreenshotCoordinates[] = [1, 2, 3].map(num => buildScreenshotCoordinates(num))

    const actualResult: SearchLauncherUtils.ScreenshotCoordinates[] = SearchLauncherUtils.filterScreenshotCoordinatesByIndexRef(
        ["t_1_3__f_1_3__s_1_3__ss_1", "t_3_3__f_3_3__s_3_3__ss_3"],
        coordinates
    )

    expect(actualResult).toStrictEqual([1, 3].map(num => buildScreenshotCoordinates(num)))

})
test('SearchLauncherUtils.findScreenshotCoordinates returns an empty array given no results are found', () => {
    const coordinates: SearchLauncherUtils.ScreenshotCoordinates[] = [1, 3].map(num => buildScreenshotCoordinates(num))

    const actualResult: SearchLauncherUtils.ScreenshotCoordinates[] = SearchLauncherUtils.filterScreenshotCoordinatesByIndexRef(
        ["t_2_3__f_2_3__s_2_3__ss_2"],
        coordinates
    )

    expect(actualResult).toStrictEqual([]);

})

function buildScreenshotCoordinates(id: number): SearchLauncherUtils.ScreenshotCoordinates {
    return {
        testId: `t_${id}_3`,
        testDesc: `t_${id}_3 desc`,
        featureId: `f_${id}_3`,
        featureDesc: `f_${id}_3 desc`,
        scenarioId: `s_${id}_3`,
        scenarioDesc: `s_${id}_3 desc`,
        ss: {
            originalLocation: `ol_${id}`,
            sourceLocation: `sl_${id}`,
            pageUrl: `purl_${id}`,
            id: `ss_${id}_3`,
            pageTitle: `p title_${id}`,
            screenshotMoment: `screenshot moment_${id}`,
        }
    }

}

