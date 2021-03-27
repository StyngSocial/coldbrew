import { Col, Row, Container } from "react-bootstrap";
import ContentNav from "./ContentNav";
import MainNav from "./MainNav";
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
        <MainNav />
        <Row className="d-flex mt-5 justify-content-center">
          <Col lg={3} className="px-4">
            <ContentNav />
          </Col>
          <Col lg={5} className="p-0 pb-5 mb-2">
            {children}
          </Col>
          <Col lg={3} className="d-none d-lg-flex">
            <></>
          </Col>
        </Row>
      </Container>
    </>
  );
}
