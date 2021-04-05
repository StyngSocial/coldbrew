import { Modal, Button, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import HivesignerContext from "../../components/hivesigner/HivesignerContext";
import { useRouter } from "next/router";
import { comment } from "./broadcast";

const Post = ({ show, onHide }) => {
  const auth = useContext(HivesignerContext);
  console.log(auth);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };

  const post = () => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("cb_token");
    if (!token) {
      const url = auth.client.getLoginURL();
      router.push(url);
    } else {
      comment(auth, "", "hive-152197", title, body);
    }
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
