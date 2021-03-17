import SyncLoader from "react-spinners/SyncLoader";
import Container from "react-bootstrap/Container";

const Loading = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <SyncLoader size={10} color={"#50c878"} />
    </Container>
  );
};

export default Loading;
