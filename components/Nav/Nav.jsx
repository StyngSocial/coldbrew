import styles from "./Nav.module.scss";
import { signOut } from "next-auth/client";
import {
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap/";

import Image from "next/image";
import BBC from "../../public/images/bennyblockchain.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHouseUser,
  faCoffee,
  faUserFriends,
  faUserCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const WebHeader = () => {
  return (
    <>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-none d-lg-flex justify-content-between ${styles.navWeb}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`d-flex ${styles.brand}`}>
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

          <Nav.Link
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            <Image
              height={32}
              width={32}
              src={BBC}
              className={styles.profile}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-flex d-lg-none ${styles.navMobileTop}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`${styles.brand}`}>
            <FontAwesomeIcon icon={faCoffee} color="#362d26" />
          </Navbar.Brand>
        </Link>

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

            <Nav.Link
              className={`p-0 ${styles.profile}`}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <Image
                height={32}
                width={32}
                src={BBC}
                className="rounded-circle"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="bottom"
        className={`border-top p-0 d-flex d-lg-none justify-content-between align-items-center ${styles.navMobileBottom}`}
      >
        <Link href="/#" passHref active>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faHouseUser} />
          </a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faUserFriends} />
          </a>
        </Link>

        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faUserCheck} />
          </a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faUsers} />
          </a>
        </Link>
      </Navbar>
    </>
  );
};

export default WebHeader;
