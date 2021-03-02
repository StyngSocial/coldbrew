import styles from "./Promoted.module.scss";
import Image from "next/image";
import { Container, Card, Row, Col } from "react-bootstrap";
import logan from "../../../public/promoted/DAVE.jpg";
import lex from "../../../public/promoted/lex.jpg";
import steve from "../../../public/promoted/steve.jpg";
import joe from "../../../public/promoted/joe.jpg";
import geohot from "../../../public/promoted/geohot.jpg";
import elon from "../../../public/promoted/elon.jpg";

const Promoted = () => {
  return (
    <Container className={`mt-4 p-0 d-flex flex-column ${styles.container}`}>
      <Card border="info" className="w-100">
        <Card.Header className="rounded-3 py-1">Promoted</Card.Header>
        <Container>
          <a href="#p">
            <Row className="align-items-center py-2">
              <Col className="col-auto">
                <Image src={lex} width={100} height={65} className="rounded" />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">Brendan Eich: Javacript...</p>
                <p className="text-muted m-0">Lex Fridman</p>
              </Col>
            </Row>
          </a>
          <a href="#pr">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image
                  src={steve}
                  width={100}
                  height={65}
                  className="rounded"
                />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">Attempting to Drink 12...</p>
                <p className="text-muted m-0">SteveWillDoIt</p>
              </Col>
            </Row>
          </a>
          <a href="#pro">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image src={joe} width={100} height={65} className="rounded" />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">Joe Rogan is Under Attack</p>
                <p className="text-muted m-0">Lex Fridman</p>
              </Col>
            </Row>
          </a>
          <a href="#prom">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image
                  src={logan}
                  width={100}
                  height={65}
                  className="rounded"
                />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">Dave Portnoy Calls Out...</p>
                <p className="text-muted m-0">IMPAULSIVE</p>
              </Col>
            </Row>
          </a>
          <a href="#promo">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image
                  src={geohot}
                  width={100}
                  height={65}
                  className="rounded"
                />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">geohot | Programming...</p>
                <p className="text-muted m-0">geohot</p>
              </Col>
            </Row>
          </a>
          <a href="#promot">
            <Row className="align-items-center py-2 border-top">
              <Col className="col-auto">
                <Image src={elon} width={100} height={65} className="rounded" />
              </Col>

              <Col className="px-0">
                <p className="m-0 text-dark">Elon Musk's Flame...</p>
                <p className="text-muted m-0">PowerfulJRE</p>
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
