export interface StepReport {
    message: string
    timestamp: number
    id: string
}

export interface ScreenshotReport {
    originalLocation: string,
    sourceLocation: string,
    pageUrl: string,
    index: number,
    pageTitle: string,
    screenshotMoment: string
}

export interface ScenarioReport {
    id: string,
    description: string,
    startedTimestamp: number,
    finishedTimestamp: number,
    screenshots: ScreenshotReport[],
    steps: StepReport[],
    testOutcome: string

}

export interface FeatureReport {
    id: string,
    description: string,
    scenarios: ScenarioReport[]
}

export interface TestReport {
    id: string,
    name: string,
    features: FeatureReport[]
}

export interface TestsReportResult {
    testsReport: TestReport[]
    screenshotsLocationPrefix: string
}

export interface TestSelected {
    type: "test"
    t: string
}

export interface FeatureSelected {
    type: "feature"
    t: string;
    f: string;

}

export interface ScenarioSearchResult {
    type: "scenario"
    t: string;
    f: string;
    s: string;
}

export interface ScreenshotSearchResult {
    type: "screenshot"
    t: string
    f: string
    s: string
    ss: number
}

export type SearchResultTestSelection = | TestSelected | FeatureSelected | ScenarioSearchResult | ScreenshotSearchResult

