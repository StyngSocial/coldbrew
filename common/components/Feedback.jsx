import { useState, useContext } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import HivesignerContext from "../hooks/useAuth";
import SendConformation from "../components/animations/SendConfirmation";

const Feedback = (prop) => {
  let { show, onHide } = prop;
  const auth = useContext(HivesignerContext);
  const [sent, setSent] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedback(e.target.value);
  };

  const sendFeedback = () => {
    axios
      .post("/api/transport", {
        user: auth.activeUser.user,
        message: feedback,
      })
      .catch((err) => {
        alert("Didn't work. Try again later. Sorry!");
      });
    setSent(true);
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        {sent && (
          <SendConformation message="Thank you for providing feedback!" />
        )}
        {!sent && (
          <>
            <h5>Feedback</h5>
            <p className="d-block">
              Send the dev team feature requests, feedback, and any errors that
              you encounter. Please try to send feedback as much as possible. It
              helps a lot. :)
            </p>
            <InputGroup>
              <FormControl
                as="textarea"
                value={feedback}
                aria-label="Feedback textarea"
                onChange={handleFeedback}
              />
            </InputGroup>
          </>
        )}
      </Modal.Body>
      {!sent && (
        <Modal.Footer>
          <Button variant="primary" onClick={() => sendFeedback()}>
            Send
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default Feedback;
