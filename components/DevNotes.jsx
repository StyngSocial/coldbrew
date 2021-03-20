import { Modal, Badge } from "react-bootstrap";
import { version } from "../package.json";

const DevNotes = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <div className="row m-0 p-0 justify-content-center align-items-center">
        <h3
          className="m-0 mb-1 mt-2 pt-1 text-align-center"
          style={{
            fontFamily: "Dancing Script",
            fontWeight: "700",
            height: "50px",
            fontSize: "2rem",
          }}
        >
          Cold Brew
        </h3>
        <Badge className="p-1 mx-3" variant="primary">
          v{version}
        </Badge>
      </div>
      <Modal.Body className="text-center">
        <h3 className="">👋 Hello, welcome to Cold Ƀrew!</h3>
        <p className="">
          <span className="text-muted">Yes, this is still Styng Social.</span>
          <br /> This is just an Alpha release for feedback on the app side of
          things. There is nothing special about the name Cold Brew. When I made
          to folder for the project I named it afer the coffee in front of me
          ¯\_(ツ)_/¯.{" "}
          <i>
            For any devs, check out the{" "}
            <a href="https://github.com/BennyBlockchain/coldbrew.git">repo</a>!
          </i>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default DevNotes;
