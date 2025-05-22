import React, {JSX, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import SearchResult from "./SearchResult";
import {Col, Form, Row, Stack} from "react-bootstrap";
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
}

function SearchLauncher({
                            changeTestSelection,
                            testsReportResult,
                            screenshotsByTitleAndUrl
                        }: SearchLauncherProps): JSX.Element {
    const titleUrlRef: React.RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const [show, setShow] = useState(false);
    const [screenshotByTitleAndUrl, setScreenshotByTitleAndUrl] = useState<ScreenshotByTitleAndUrl | null>(null);

    const handleClose = () => {
        setShow(false);
        setScreenshotByTitleAndUrl(null)
    }

    const handleClear = () => {
        if (titleUrlRef.current) {
            titleUrlRef.current.value = ""
            setScreenshotByTitleAndUrl(null)
        }
    }


    const handleSearch = () => {
        if (titleUrlRef.current) {
            setScreenshotByTitleAndUrl(SearchLauncherUtils.findScreenshotByTitleAndUrl(screenshotsByTitleAndUrl, titleUrlRef.current.value))
        }
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Search Test
            </Button>

            <Modal show={show} onHide={handleClose} className={"modal-xl"}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={2}>
                        <div className="p-1">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Title - Url</Form.Label>
                                        <Form.Control ref={titleUrlRef}  type="text" placeholder="Enter Title - Url" list="list-url"/>
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

                                <Button variant="primary" onClick={handleSearch}> Search Test </Button>
                            </Form>
                        </div>
                        <div className="p-1">
                            <SearchResult changeTestSelection={changeTestSelection}
                                          screenshotSelected={screenshotByTitleAndUrl}
                                          testsReportResult={testsReportResult}
                                          handleParentClose={handleClose}
                            />
                        </div>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClear}>
                        Clear
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SearchLauncher;