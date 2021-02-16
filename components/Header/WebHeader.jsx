import styles from "./WebHeader.module.scss";
import {
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap/";

import Image from "next/image";
import BBC from "../../public/images/bennyblockchain.jpg";
import styng from "../../public/images/avatar black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const WebHeader = () => {
  return (
    <>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-none d-lg-flex justify-content-between ${styles.navBar}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand
            className={`d-flex ${styles.coldbrew} ${styles.cortado}`}
          >
            cold brew
          </Navbar.Brand>
        </Link>

        <div className="container d-flex justify-content-center w-50">
          <Dropdown className="d-flex ">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="d-flex align-items-center"
            >
              &cent;/Home
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/">&cent;/Browns</Dropdown.Item>
              <Dropdown.Item href="/">&cent;/Apple</Dropdown.Item>
              <Dropdown.Item href="/">&cent;/CallOfDuty</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form className="d-flex w-50">
            <InputGroup className="sm">
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search"
              />
            </InputGroup>
          </Form>
        </div>

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
                height={32}
                width={32}
                src={styng}
                className={styles.profile}
              />
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default WebHeader;
