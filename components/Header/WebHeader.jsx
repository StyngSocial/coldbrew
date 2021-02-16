import styles from "./WebHeader.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import BBC from "../../public/images/bennyblockchain.jpg";
import styng from "../../public/images/avatar black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const WebHeader = () => {
  return (
    <>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-none d-lg-flex ${styles.navBar}`}
      >
        <Row
          className={`w-100 justify-content-between align-items-center ${styles.navBar}`}
        >
          <Col className={`text-center ${styles.navBar}`}>
            <Link href="/" passHref>
              <Navbar.Brand
                className={`${styles.cortado} ${styles.styngBrand}`}
              >
                cold brew
              </Navbar.Brand>
            </Link>
          </Col>
          <Col className={`d-none d-lg-block`}>
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
              <Nav className="d-flex">
                <Link href="/messages" passHref>
                  <Nav.Link className={styles.link}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className={styles.icon}
                    />
                  </Nav.Link>
                </Link>
                <Link href="/notifications" passHref>
                  <Nav.Link className={styles.link}>
                    <FontAwesomeIcon
                      icon={faBell}
                      size="2x"
                      className={styles.icon}
                    />
                  </Nav.Link>
                </Link>

                <Link href="/profile" passHref>
                  <Nav.Link className={styles.link}>
                    <Image
                      height={40}
                      width={40}
                      src={styng}
                      className={styles.profile}
                    />
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};

export default WebHeader;
