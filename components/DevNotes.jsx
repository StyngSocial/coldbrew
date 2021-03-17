import { Modal } from "react-bootstrap";

const DevNotes = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Sign up to receive updates from Styng Social</Modal.Title>
      </Modal.Header>
      <Modal.Body>hey</Modal.Body>
    </Modal>
  );
};

export default DevNotes;
