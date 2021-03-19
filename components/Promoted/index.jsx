import styles from "./Promoted.module.scss";
import Image from "next/image";
import { Container, Card, Row, Col } from "react-bootstrap";
import geohot from "../../../public/promoted/geohot.jpg";

const Promoted = () => {
  return (
    <Container className={`mt-4 p-0 d-flex flex-column ${styles.container}`}>
      <Card border="milk" className="w-100">
        <Card.Header className="rounded-3 py-1">Promoted</Card.Header>
        <Container>
          <a href="#">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image
                  src={geohot}
                  width={100}
                  height={65}
                  className="rounded"
                  alt="the goat"
                />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">geohot | Programming...</p>
                <p className="text-muted m-0">geohot</p>
              </Col>
            </Row>
          </a>
        </Container>
        <Card.Footer></Card.Footer>
      </Card>
    </Container>
  );
};

export default Promoted;
