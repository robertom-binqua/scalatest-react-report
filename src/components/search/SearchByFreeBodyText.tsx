import React, {JSX, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import SearchResult from "./SearchResult";
import {IndexSearch} from "../../IndexSearch";
import ScreenshotCoordinates = SearchLauncherUtils.ScreenshotCoordinates;

export interface SearchByFreeBodyTextProps {
    changeTestSelection: (testSelection: SearchResultTestSelection) => void
    testsReportResult: TestsReportResult
    allScreenshotCoordinates: ScreenshotCoordinates[]
    indexSearch: IndexSearch
    parentCloseHandler: () => void
}

function SearchByFreeBodyText({
                                  changeTestSelection,
                                  testsReportResult,
                                  allScreenshotCoordinates,
                                  indexSearch,
                                  parentCloseHandler
                              }: SearchByFreeBodyTextProps): JSX.Element {
    const noResults: ScreenshotCoordinates[] = [];
    const textToSearch: React.RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const [result, setResult] = useState<ScreenshotCoordinates[]>(noResults);

    const handleClose = () => {
        setResult(noResults)
        parentCloseHandler()
    }

    const handleSearch = () => {
        if (textToSearch.current) {
            let refs = indexSearch.search(textToSearch.current.value);
            setResult(SearchLauncherUtils.filterScreenshotCoordinatesByIndexRef(refs, allScreenshotCoordinates))
        }
    }

    const handleClear = () => {
        if (textToSearch.current) {
            textToSearch.current.value = ""
            setResult(noResults)
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
                                    <Form.Label>Text</Form.Label>
                                    <Form.Control ref={textToSearch} type="text" placeholder="Text to search"/>
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
                                  screenshotCoordinatesFound={result}
                                  testsReportResult={testsReportResult}
                                  handleParentClose={handleClose}
                    />
                </div>
            </Stack>
        </>
    );
}

export default SearchByFreeBodyText;