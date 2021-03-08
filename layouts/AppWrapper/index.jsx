import { Col, Row, Container } from "react-bootstrap";
import ContentNav from "./ContentNav";
import Nav from "./Nav";
/**
 * Wrapper for the UI of the App. Split in 3 columns. Explore nav on left,
 * feed in center, pormoted/ads on the right.
 * ? Feels a bit over engineered.
 * @param children Can be any object, feed is passed in pages/index.js
 * TODO: Refactor for feeds and promoted. Less CSS on this page to?
 */
export default function AppWrapper({ children }) {
  return (
    <>
      <Container fluid>
        <Nav />
        <Row className="mt-5 justify-content-center">
          <Col lg={3} className="d-none d-lg-flex px-4">
            <ContentNav />
          </Col>
          <Col lg={6} md={12} className="bg-milk">
            {children}
          </Col>
          <Col lg={3} className="d-flex bg-creamer">
            karma
          </Col>
        </Row>
      </Container>
    </>
  );
}
