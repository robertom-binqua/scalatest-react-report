import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TestSelection} from "./model";


export interface SearchLauncherProps {
    changeTestSelection: (testSelection: TestSelection) => void
}

function SearchLauncher({changeTestSelection}: SearchLauncherProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        changeTestSelection({type: "scenario", t: "t_3_3", f: "f_3_3", s: "s_3_3"})
        setShow(false);
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Search Test
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Search Test
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SearchLauncher;