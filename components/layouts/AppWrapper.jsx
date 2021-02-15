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
          <Col lg={3} className="p-0">
            <Explore />
          </Col>
          <Col lg={6} className="p-0">
            {children}
          </Col>
          <Col lg={3} className="p-0">
            <Promoted />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppWrapper;
