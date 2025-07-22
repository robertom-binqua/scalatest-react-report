import React, {JSX, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import SearchResult from "./SearchResult";
import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import ScreenshotCoordinates = SearchLauncherUtils.ScreenshotCoordinates;

export interface ScreenshotByTitleAndUrl {
    id: number,
    title: String,
    url: String,
    screenshotCoordinates: ScreenshotCoordinates[]
}

export interface SearchLauncherProps {
    changeTestSelection: (testSelection: SearchResultTestSelection) => void
    testsReportResult: TestsReportResult
    screenshotsByTitleAndUrl: ScreenshotByTitleAndUrl[]
    parentCloseHandler: () => void
}

function SearchByTitleUrl({
                              changeTestSelection,
                              testsReportResult,
                              screenshotsByTitleAndUrl,
                              parentCloseHandler
                          }: SearchLauncherProps): JSX.Element {
    const noResults: ScreenshotCoordinates[] = [];

    const titleUrlRef: React.RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const [screenshotCoordinatesResult, setScreenshotCoordinatesResultResult] = useState<ScreenshotCoordinates[]>(noResults);

    const handleClose = () => {
        setScreenshotCoordinatesResultResult(noResults)
        parentCloseHandler()
    }

    const handleClear = () => {
        setScreenshotCoordinatesResultResult(noResults)
        if (titleUrlRef.current) {
            titleUrlRef.current.value = ""
        }
    }

    const handleSearch = () => {
        if (titleUrlRef.current) {
            setScreenshotCoordinatesResultResult(SearchLauncherUtils.findScreenshotCoordinates(screenshotsByTitleAndUrl, titleUrlRef.current.value))
        }
    }

    return (
        <>
            <Stack gap={2}>
                <div className="p-1">
                    <Form>
                        <Container>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Title - Url</Form.Label>
                                    <Form.Control ref={titleUrlRef} type="text" placeholder="Enter Title - Url"
                                                  list="list-url"/>
                                    <datalist id="list-url">
                                        {
                                            screenshotsByTitleAndUrl.map((value: ScreenshotByTitleAndUrl, index) =>
                                                <option
                                                    key={index}
                                                    id={value.id.toString()}>{SearchLauncherUtils.dataListVisibleString(value)}</option>)
                                        }
                                    </datalist>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col xl="auto"> <Button variant="primary" onClick={handleSearch}> Search Test </Button></Col>
                                <Col xl="auto"> <Button variant="primary" onClick={handleClear}> Clear </Button></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </Form>
                </div>
                <div className="p-1">
                    <SearchResult changeTestSelection={changeTestSelection}
                                  screenshotCoordinatesFound={screenshotCoordinatesResult}
                                  testsReportResult={testsReportResult}
                                  handleParentClose={handleClose}
                    />
                </div>
            </Stack>
        </>
    );
}

export default SearchByTitleUrl;