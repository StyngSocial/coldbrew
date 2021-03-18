import { useState } from "react";
import { useSession } from "next-auth/client";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const Feedback = (prop) => {
  const { show, onHide } = prop;
  const [session] = useSession();
  const [feedback, setFeedback] = useState("");
  const handleFeedback = (e) => {
    e.preventDefault();
    setFeedback(e.target.value);
  };

  const sendFeedback = () => {
    axios
      .post("/api/transport", {
        name: session.user.name,
        email: session.user.email,
        message: feedback,
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <h5>Feedback</h5>
        <p className="d-block">
          Feedback gives Ben more shit to do. <br />
          "Please tell me how shitty this app is." - Ben
        </p>
        <InputGroup>
          <FormControl
            as="textarea"
            value={feedback}
            aria-label="Feedback textarea"
            onChange={handleFeedback}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => sendFeedback()}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Feedback;
