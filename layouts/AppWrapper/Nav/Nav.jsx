import styles from "./Nav.module.scss";
import {
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Dropdown,
} from "react-bootstrap/";

import Image from "next/image";
import BBC from "../../../public/tweets/avatar-black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHouseUser,
  faCoffee,
  faUserFriends,
  faUserCheck,
  faUsers,
  faSearch,
  faWallet,
  faCog,
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

        <div className="container d-flex justify-content-evenly w-50 m-0">
          <Dropdown className="d-flex rounded">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className={`d-flex align-items-center bg-danger border ${styles.dropdown}`}
              style={{ width: "300px" }}
            >
              <p className="" style={{ margin: "0 190px 0 0" }}>{`¢ / Home`}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "300px" }}>
              <Dropdown.Item href="/">{`¢ / Browns`}</Dropdown.Item>
              <Dropdown.Item href="/">{`¢ / Bitcoin`}</Dropdown.Item>
              <Dropdown.Item href="/">{`¢ / Programming`}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form className="d-flex" style={{ width: "300px" }}>
            <InputGroup className="sm">
              <InputGroup.Prepend>
                <InputGroup.Text className={styles.formIcon}>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
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
              <FontAwesomeIcon icon={faWallet} className={styles.icon} />
            </Nav.Link>
          </Link>
          <Link href="/messages" passHref>
            <Nav.Link className={styles.link}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </Nav.Link>
          </Link>
          <Link href="/notifications" passHref>
            <Nav.Link className={styles.link}>
              <FontAwesomeIcon icon={faBell} className={styles.icon} />
            </Nav.Link>
          </Link>
          <Link href="/messages" passHref>
            <Nav.Link className={styles.link}>
              <FontAwesomeIcon icon={faCog} className={styles.icon} />
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
        className={`border-top p-0 d-flex d-lg-none justify-content-between align-items-start ${styles.navMobileBottom}`}
      >
        <Link href="/#" passHref active>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faHouseUser} className={styles.mobileIcon} />
          </a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon
              icon={faUserFriends}
              className={styles.mobileIcon}
            />
          </a>
        </Link>

        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faUserCheck} className={styles.mobileIcon} />
          </a>
        </Link>
        <Link href="/#" passHref>
          <a className={styles.bottomnav}>
            <FontAwesomeIcon icon={faUsers} className={styles.mobileIcon} />
          </a>
        </Link>
      </Navbar>
    </>
  );
};

export default WebHeader;
