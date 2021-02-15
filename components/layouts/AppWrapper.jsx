import { Col, Row, Container } from "react-bootstrap";

import Header from "../Header/Header";
import Explore from "../Explore/Explore";
import Promoted from "../Promoted/Promoted";

const AppWrapper = ({ children }) => {
  return (
    <>
      <Header />
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
