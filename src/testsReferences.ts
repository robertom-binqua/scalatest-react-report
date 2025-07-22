import {TestReport} from "./model";

namespace TestsReferences {
    export const testsReport: TestReport[] = [
        {
            "name": "org.binqua.scalatest.integration.ReactAppUsagePurpose",
            "id": "t_1",
            "features": [
                {
                    "description": "We can go through all the page of our app from home to page 4",
                    "id": "f_1",
                    "scenarios": [
                        {
                            "id": "s_1",
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
                                },
                                {
                                    "originalLocation": "scenario_ordinal_1_3/original/2_ON_EXIT_PAGE.png",
                                    "sourceLocation": "scenario_ordinal_1_3/sources/2_ON_EXIT_PAGE.txt",
                                    "pageUrl": "http://localhost:8081/page1.html",
                                    "id": "ss_2",
                                    "pageTitle": "Page 1",
                                    "screenshotMoment": "ON_EXIT_PAGE"
                                }
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
                    "description": "We can go through all the page of our app from home to page 4 - feature 2",
                    "id": "f_2",
                    "scenarios": [
                        {
                            "id": "s_2",
                            "description": "this is another example - we can go from home page to last page - scenario 2",
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
                                },
                                {
                                    "originalLocation": "scenario_ordinal_1_3/original/2_ON_EXIT_PAGE.png",
                                    "sourceLocation": "scenario_ordinal_1_3/sources/2_ON_EXIT_PAGE.txt",
                                    "pageUrl": "http://localhost:8081/page1.html",
                                    "id": "ss_2",
                                    "pageTitle": "Page 1",
                                    "screenshotMoment": "ON_EXIT_PAGE"
                                }
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
            "name": "org.binqua.scalatest.integration.ReactAppUsagePurpose",
            "id": "t_2",
            "features": [
                {
                    "description": "We can go through all the page of our app from home to page 4",
                    "id": "f_3",
                    "scenarios": [
                        {
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
                    ]
                },
                {
                    "description": "We can go through all the page of our app from home to page 4 - feature 2",
                    "id": "f_4",
                    "scenarios": [
                        {
                            "id": "s_4",
                            "description": "this is another example - we can go from home page to last page - scenario 2",
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
                                },
                                {
                                    "originalLocation": "scenario_ordinal_1_3/original/2_ON_EXIT_PAGE.png",
                                    "sourceLocation": "scenario_ordinal_1_3/sources/2_ON_EXIT_PAGE.txt",
                                    "pageUrl": "http://localhost:8081/page1.html",
                                    "id": "ss_2",
                                    "pageTitle": "Page 1",
                                    "screenshotMoment": "ON_EXIT_PAGE"
                                }
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
}

export default TestsReferences