import {FeatureReport, ScenarioReport, ScreenshotReport, TestReport} from "../../model";
import {ScreenshotByTitleAndUrl} from "./SearchLauncher";

export namespace SearchLauncherUtils {

    export function dataListVisibleString(screenshotByTitleAndUrl: ScreenshotByTitleAndUrl) {
        return screenshotByTitleAndUrl.title + " - " + screenshotByTitleAndUrl.url
    }

    export type ScreenshotCoordinates = {
        testId: string,
        testDesc: string,
        featureId: string,
        featureDesc: string,
        scenarioId: string,
        scenarioDesc: string,
        ss: ScreenshotReport;
    }

    export function calculateScreenshotCoordinates(testReports: TestReport[]): ScreenshotCoordinates[] {
        return Array.from(testReports).flatMap((test: TestReport) => {
            return Array.from(test.features).flatMap((feature: FeatureReport) => {
                    return Array.from(feature.scenarios).flatMap((s: ScenarioReport) => {
                            return Array.from(s.screenshots).flatMap((ss: ScreenshotReport) =>
                                [
                                    {
                                        testId: test.id,
                                        testDesc: test.name,
                                        featureId: feature.id,
                                        featureDesc: feature.description,
                                        scenarioId: s.id,
                                        scenarioDesc: s.description,
                                        ss: ss
                                    }
                                ]
                            )
                        }
                    )
                }
            )
        });
    }

    export function calculateDataList(testsReport: TestReport[]): ScreenshotByTitleAndUrl[] {

        type Key = String

        type GroupByEntry = {
            screenshotCoordinates: ScreenshotCoordinates
            key: Key
        }

        const keySeparator = `####`;

        const groupByEntries: GroupByEntry[] = calculateScreenshotCoordinates(testsReport).map((value: SearchLauncherUtils.ScreenshotCoordinates) => {
            return {
                screenshotCoordinates: value, key: `${value.ss.pageTitle}${keySeparator}${value.ss.pageUrl}`
            }
        })

        let grouped = groupByEntries.reduce(
            (result: any, currentValue: any) => {
                (result[currentValue['key']] = result[currentValue['key']] || []).push(currentValue);
                return result;
            }, {});

        let map: Map<Key, GroupByEntry[]> = new Map(Object.entries(grouped));

        return Array
            .from(map.entries())
            .map((value: [String, GroupByEntry[]], index: number) => {
                const titleAndUrl: string[] = value[0].split(keySeparator);
                const title = titleAndUrl[0]
                const url = titleAndUrl[1]
                const screenshotCoordinates: SearchLauncherUtils.ScreenshotCoordinates[] = value[1].map((x: GroupByEntry) => x.screenshotCoordinates)
                return {
                    id: index,
                    title: title,
                    url: url,
                    screenshotCoordinates: screenshotCoordinates
                }
            })
    }

    export function findScreenshotCoordinates(data: ScreenshotByTitleAndUrl[], titleAndUrl: String): ScreenshotCoordinates[] {
        return data.filter((value: ScreenshotByTitleAndUrl) => dataListVisibleString(value) === titleAndUrl)[0].screenshotCoordinates
    }

    export function filterScreenshotCoordinatesByIndexRef(refs: string[], coordinates: SearchLauncherUtils.ScreenshotCoordinates[]): SearchLauncherUtils.ScreenshotCoordinates[] {
        return refs.flatMap(ref => coordinates.filter(c => ref === `${c.testId}__${c.featureId}__${c.scenarioId}__${c.ss.id}`))
    }

}