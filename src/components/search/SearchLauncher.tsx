import React, {JSX, useRef, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SearchResultTestSelection, TestsReportResult} from "../../model";
import {SearchLauncherUtils} from "./SearchLauncherUtils";
import {Col, Container, Row} from "react-bootstrap";
import SearchByTitleUrl from "./SearchByTitleUrl";
import lunr from "lunr";
import ScreenshotCoordinates = SearchLauncherUtils.ScreenshotCoordinates;
import SearchByFreeBodyText from "./SearchByFreeBodyText";
import {IndexSearch} from "../../IndexSearch";

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
    screenshotCoordinates: ScreenshotCoordinates[]
    indexSearch: IndexSearch
}

enum SearchType {
    BY_TITLE_AND_URL,
    FREE_TEXT_SEARCH,
    NONE
}

function SearchLauncher({
                            changeTestSelection,
                            testsReportResult,
                            screenshotsByTitleAndUrl,
                            screenshotCoordinates,
                            indexSearch,
                        }: SearchLauncherProps): JSX.Element {

    const titleUrlRef: React.RefObject<HTMLInputElement | null> = useRef<HTMLInputElement | null>(null);
    const [searchContentForm, setSearchContentForm] = useState(<></>);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setSearchContentForm(<></>)
    }

    const handleSearchType = (searchType: SearchType) => {
        switch (searchType) {
            case SearchType.NONE:
                setSearchContentForm(<></>)
                break;
            case SearchType.FREE_TEXT_SEARCH:
                setSearchContentForm(<SearchByFreeBodyText
                    changeTestSelection={changeTestSelection}
                    testsReportResult={testsReportResult}
                    allScreenshotCoordinates={screenshotCoordinates}
                    indexSearch={indexSearch}
                    parentCloseHandler={handleClose}
                />);
                break;
            case SearchType.BY_TITLE_AND_URL:
                setSearchContentForm(<SearchByTitleUrl
                    changeTestSelection={changeTestSelection}
                    testsReportResult={testsReportResult}
                    screenshotsByTitleAndUrl={screenshotsByTitleAndUrl}
                    parentCloseHandler={handleClose}
                />);
                break;
        }

    };

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}> Search Test </Button>
            <Modal show={show} onHide={handleClose} className={"modal-xl"}>
                <Modal.Header closeButton>
                    <Modal.Title>Search Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xl="auto"><Button variant="primary"
                                                   onClick={() => handleSearchType(SearchType.BY_TITLE_AND_URL)}> By
                                title
                                /
                                url</Button></Col>
                            <Col xl="auto"> <Button variant="primary"
                                                    onClick={() => handleSearchType(SearchType.FREE_TEXT_SEARCH)}> By
                                free
                                text</Button></Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            {
                                searchContentForm
                            }
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default SearchLauncher;