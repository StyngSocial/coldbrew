import { Modal, Button, FormControl } from "react-bootstrap";
import { useState, useContext } from "react";
import HivesignerContext from "../../components/hivesigner/HivesignerContext";
import { useRouter } from "next/router";
import Loading from "../Loading";
import SendConfirmation from "../animations/SendConfirmation";

const Post = ({ show, onHide }) => {
  const auth = useContext(HivesignerContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [posted, setPosted] = useState(false);
  const router = useRouter();

  const post = () => {
    let coldbrew_meta = {
      tags: ["coldbrew-dev"],
      app: "Cold Brew",
      format: "UTF-8",
    };
    let date = new Date();
    let perm_link = `cb-${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    auth.client.comment(
      "",
      "hive-152197",
      auth.activeUser,
      perm_link,
      title,
      body,
      coldbrew_meta,
      (err, result) => {
        if (result) {
          setLoading(false);
          setPosted(true);
          setTitle("");
          setBody("");
          setTimeout(() => {
            setPosted(false);
          }, 5000);
          return;
        } else {
          setLoading(false);
          if (err.error_description.includes("HIVE_MIN_ROOT_COMMENT")) {
            return alert("You can only post every five minutes.");
          }
          return alert("Cannot post right now.");
        }
      }
    );
  };
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ƀrew</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "350px" }}>
        {loading && <Loading />}
        {posted && <SendConfirmation message="Ƀrew posted!" />}
        {!posted && !loading && (
          <>
            <FormControl
              placeholder="Title"
              aria-label="Post Title"
              aria-describedby="Post Title"
              className="mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <FormControl
              as="textarea"
              aria-label="Post to Brew"
              placeholder="Your Ƀrew, your money"
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <Modal.Footer>
              <Button
                variant="primary"
                className="text-light"
                onClick={() => {
                  setLoading(true);
                  post();
                }}
              >
                Ƀrew
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Post;
