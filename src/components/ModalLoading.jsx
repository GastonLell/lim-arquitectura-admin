import {useState} from 'react';
import {Modal} from "react-bootstrap";
import Loading from "./Loading";
const ModalLoading = ({show, setShow}) => {

    const handleClose = () => setShow(false);
    return(
        <Modal className="modal-loading" show={show} onHide={handleClose}>
            <Modal.Body>
                <Loading/>
            </Modal.Body> 
        </Modal>
    )
}
export default ModalLoading;