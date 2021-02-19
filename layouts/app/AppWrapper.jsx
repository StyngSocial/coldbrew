import { Col, Row, Container } from "react-bootstrap";

import Explore from "../../components/Explore/Explore";
import Ads from "../../components/Promoted/Ads";
import Nav from "../../components/Nav/Nav";

const AppWrapper = ({ children }) => {
  return (
    <>
      <Nav />
      <Container className="mw-100 p-0 mt-5">
        <Row className="m-0 justify-content-center">
          <Col lg={2} className="vh-100 p-0 d-none d-lg-flex bg-light">
            <Explore />
          </Col>
          <Col lg={5} md={12} className="p-0 border-left border-right bg-light">
            {children}
          </Col>
          <Col lg={3} className="p-0 d-none d-lg-flex bg-light">
            <Ads />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppWrapper;
