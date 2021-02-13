import { Col, Row, Container } from "react-bootstrap";

import Header from "../Header/Header";
import Explore from "../Explore/Explore";
import Promoted from "../Promoted/Promoted";
import Feed from "../Feed/Feed";

const AppWrapper = () => {
  return (
    <>
      <Header />
      <Container className="mw-100 p-0">
        <Row>
          <Col lg={3} className="p-0">
            <Explore />
          </Col>
          <Col lg={6} className="p-0">
            <Feed />
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
