import { Modal, Button, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
// import useHivesigner from "../../components/hivesigner/useHivesigner";
import HivesignerContext from "../../components/hivesigner/HivesignerContext";

const Post = ({ show, onHide }) => {
  const auth = useContext(HivesignerContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const post = () => {
    console.log(auth);
    auth.client.comment(
      "",
      "hive-152197",
      "benny.blockchain",
      "postisnew",
      title,
      body,
      {},
      (result, err) => {
        console.log("posted", err, result);
      }
    );
  };
  return (
    <Modal show={show} onHide={onHide} className="modal-fullscreen" centered>
      <Modal.Header closeButton>
        <Modal.Title>Ƀrew</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormControl
          placeholder="Title"
          aria-label="Post Title"
          aria-describedby="Post Title"
          className="mb-2"
          value={title}
          onChange={handleTitle}
        />

        <FormControl
          as="textarea"
          aria-label="Post to Brew"
          placeholder="Your Ƀrew, your money"
          rows={8}
          value={body}
          onChange={handleBody}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" className="text-light" onClick={() => post()}>
          Ƀrew
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Post;
