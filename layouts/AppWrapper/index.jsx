import { Col, Row, Container } from "react-bootstrap";

import Explore from "./Explore";
import Ads from "./Promoted/Ads";
import Nav from "./Nav";

export default function AppWrapper({ children }) {
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
            {/* <Ads /> */}
            <h1 className="text-center text-primary">Sup, Dylan!</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
