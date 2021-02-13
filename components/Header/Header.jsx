import styles from "./Header.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import BBC from "../../public/images/bennyblockchain.jpg";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const Header = () => {
  return (
    <>
      <header>
        <Navbar
          variant="dark"
          bg="dark"
          expand="lg"
          fixed="top"
          className={styles.navBar}
        >
          <Container fluid>
            <Row className={`w-100 justify-content-between align-items-center`}>
              <Col>
                <Link href="/" passHref>
                  <Navbar.Brand
                    className={`${styles.cortado} ${styles.styngBrand}`}
                  >
                    cold brew
                  </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="styng-nav" />
              </Col>
              <Col>
                <Form>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="search">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Order cold brew..."
                      aria-label="Search"
                      aria-describedby="search"
                    />
                  </InputGroup>
                </Form>
              </Col>
              <Col>
                <Navbar.Collapse id="styng-nav" className="justify-content-end">
                  <Nav className=" d-flex align-items-center">
                    <Link href="/messages" passHref>
                      <Nav.Link>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                      </Nav.Link>
                    </Link>
                    <Link href="/notifications" passHref>
                      <Nav.Link>
                        <FontAwesomeIcon icon={faBell} size="2x" />
                      </Nav.Link>
                    </Link>

                    <Link href="/profile" passHref>
                      <Nav.Link>
                        <Image
                          height={40}
                          width={40}
                          src={BBC}
                          className={styles.profile}
                        />
                      </Nav.Link>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
