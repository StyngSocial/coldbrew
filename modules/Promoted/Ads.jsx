import Container from "react-bootstrap/Container";

import Promoted from "./Promotes";
import Sponsored from "./Sponsored";

const Ads = () => {
  return (
    <Container fluid className="mb-5">
      <Promoted />
      <Sponsored />
    </Container>
  );
};

export default Ads;
