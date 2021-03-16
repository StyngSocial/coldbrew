import Link from "next/link";
import { signOut } from "next-auth/client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";
import {
  faHouseUser,
  faUserFriends,
  faUsers,
  faQuestion,
  faSignOutAlt,
  faSearch,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import Feedback from "../../components/Feedback.jsx";
import { Navbar, Nav, Button } from "react-bootstrap";

const Appbar = () => {
  const [show, setShow] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <>
      <Navbar
        fixed="top"
        bg="light"
        className={`border-bottom my-0 d-flex justify-content-between ${styles.mobile}`}
        style={{
          height: "50px",
        }}
      >
        <Link href="/" passHref>
          <Nav.Link
            className="d-flex text-roast pt-1"
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "700",
              height: "50px",
              fontSize: "2rem",
            }}
          >
            Cold Brew
          </Nav.Link>
        </Link>

        <Nav className="d-flex">
          <Nav.Link
            className="px-2 m-2 text-center d-flex align-items-center text-roast intro"
            onClick={() => setIntro(!intro)}
          >
            <FontAwesomeIcon icon={faInfo} style={{ fontSize: "1.25rem" }} />
          </Nav.Link>
          <Nav.Link
            className="px-2 m-2 text-center d-flex align-items-center text-roast"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              style={{ fontSize: "1.25rem" }}
            />
          </Nav.Link>
          <Nav.Link
            className="px-2 my-2 text-center d-flex align-items-center text-primary"
            onClick={() => signOut()}
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              style={{ fontSize: "1.25rem" }}
            />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="bottom"
        className="border-top p-0 d-flex d-lg-none justify-content-between align-items-start"
      >
        <Link href="/" passHref>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faHouseUser}
              className="w-25 text-roast text-center"
              style={{ fontSize: "2rem" }}
            />
          </Nav.Link>
        </Link>

        <Link href="/explore" passHref>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faSearch}
              className="w-25 text-roast text-center"
              style={{ fontSize: "2rem" }}
            />
          </Nav.Link>
        </Link>

        <Link href="/following" passHref>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faUserFriends}
              className="w-25 text-roast text-center"
              style={{ fontSize: "2rem" }}
            />
          </Nav.Link>
        </Link>
        <Link href="/c" passHref>
          <Nav.Link>
            <FontAwesomeIcon
              icon={faUsers}
              className="w-25 text-roast text-center"
              style={{ fontSize: "2rem" }}
            />
          </Nav.Link>
        </Link>
      </Navbar>
      <Feedback show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Appbar;
