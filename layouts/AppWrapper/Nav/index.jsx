import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/client";
import BBC from "../../../public/posts-tmp/avatar-black.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";
import Feedback from "../../../components/Feedback";
import { Navbar, Nav } from "react-bootstrap";
import {
  faHouseUser,
  faCoffee,
  faUserFriends,
  faUserCheck,
  faUsers,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Appbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar
        fixed="top"
        bg="light"
        className="py-0 px-5 my-0 d-none d-lg-flex justify-content-between"
        style={{
          height: "50px",
        }}
      >
        <Link href="/" passHref>
          <Navbar.Brand
            className={`d-flex ${styles.brand}`}
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "700",
              height: "50px",
            }}
          >
            Cold Brew
          </Navbar.Brand>
        </Link>
        <Nav className="d-flex">
          <Nav.Link
            className={styles.link}
            onClick={() => {
              setShow(!show);
            }}
          >
            <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
          </Nav.Link>

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
              className={styles.link}
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon icon={faQuestion} className={styles.icon} />
            </Nav.Link>
            <Nav.Link
              className={`p-0 ${styles.profile}`}
              onClick={(e) => {
                e.preventDefault();
                signIn("auth0");
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
      <Feedback show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Appbar;
