import { Col, Row, Container } from "react-bootstrap";

import Explore from "../components/Explore/Explore";
import Promoted from "../components/Promoted/Promoted";
import Nav from "../components/Nav/Nav";

const AppWrapper = ({ children }) => {
  return (
    <>
      <Nav />
      <Container className="mw-100 p-0 mt-5">
        <Row className="m-0">
          <Col lg={3} className="p-0 d-none d-lg-flex">
            <Explore />
          </Col>
          <Col lg={6} md={12} className="p-0">
            {children}
          </Col>
          <Col lg={3} className="p-0 d-none d-lg-flex">
            <Promoted />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppWrapper;
