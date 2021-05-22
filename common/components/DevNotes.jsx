import { Modal, Badge } from "react-bootstrap";
import { version } from "../../package.json";

const DevNotes = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} className="p-0" centered>
      <Modal.Header className="py-0 px-2 border-0" closeButton></Modal.Header>
      <Modal.Body className="pt-0">
        <div className="text-center">
          <h2
            className="m-0"
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "700",
              fontSize: "1.75rem",
            }}
          >
            Welcome to Cold Brew!
          </h2>
          <Badge
            className="px-2 py-1 my-2 text-center"
            variant="primary"
            style={{ fontSize: "1rem" }}
          >
            v{version}
          </Badge>
          <i className="text-muted d-block">Yes, this is Styng Social.</i>
        </div>
        <p className="pt-2 m-0">
          &nbsp;&nbsp;First, I want to say thank you for testing out Cold Brew!
          I've spent the last three years studying crypto and blockchain with
          the idea of fixing monopolistic tech. I'm proud to release Cold Brew
          as a culmination of that research. Even though it doesn't do much
          right now 😆.
          <br />
          <br />
          &nbsp;&nbsp;This page serves as information regarding the current
          release (v{version}). Information about new features, bug fixes, and
          future plans will be updated here.
          <br />
          <br />
          <strong>
            Please leave feedback by pressing the question mark on the top bar.
            It helps immensely and roasts about Cold Brew are encouraged.&nbsp;
            <i className="mx-auto">
              For any devs, check out the{" "}
              <a href="https://github.com/BennyBlockchain/coldbrew.git">repo</a>
              !
            </i>
          </strong>
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default DevNotes;

// There is nothing special about the name Cold Brew. When I
//           made the folder for the project on my computer I named it afer the
//           coffee in front of me ¯\_(ツ)_/¯
