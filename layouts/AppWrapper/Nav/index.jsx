import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { signOut, useSession } from "next-auth/client";
import BBC from "../../../public/posts-tmp/avatar-black.png";
import logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";
import Feedback from "../../../components/Feedback";
import { Navbar, Nav, Button } from "react-bootstrap";
import {
  faHouseUser,
  faUserFriends,
  faUsers,
  faQuestion,
  faSearch,
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
            className="d-flex text-roast"
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "700",
              height: "50px",
              fontSize: "2rem",
            }}
          >
            Cold Brew
          </Navbar.Brand>
        </Link>
        <Nav className="d-flex">
          <Nav.Link>
            <Button
              variant="coffee"
              size="sm"
              onClick={() => {
                setShow(!show);
              }}
            >
              Feedback
            </Button>
          </Nav.Link>
          <Nav.Link className="px-0">
            <Button variant="secondary" size="sm" onClick={() => signOut}>
              Sign Out
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className="py-0 border-bottom d-flex d-lg-none"
      >
        <Link href="/" passHref>
          <Image src={logo} height={45} width={45} />
        </Link>

        <Navbar.Collapse id="styng-nav" className="justify-content-end">
          <Nav className="d-flex">
            <Nav.Link>
              <Button
                variant="coffee"
                size="sm"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Feedback
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="secondary" size="sm" onClick={() => signOut}>
                Sign Out
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="bottom"
        className="border-top p-0 d-flex d-lg-none justify-content-between align-items-start"
      >
        <Link href="/" passHref active>
          <a
            className="w-25 text-roast text-center"
            style={{ fontSize: "2rem" }}
          >
            <FontAwesomeIcon icon={faHouseUser} />
          </a>
        </Link>
        <Link href="/explore" passHref>
          <a
            className="w-25 text-roast text-center"
            style={{ fontSize: "2rem" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </Link>

        <Link href="/following" passHref>
          <a
            className="w-25 text-roast text-center"
            style={{ fontSize: "2rem" }}
          >
            <FontAwesomeIcon icon={faUserFriends} />
          </a>
        </Link>
        <Link href="/c" passHref>
          <a
            className="w-25 text-roast text-center"
            style={{ fontSize: "2rem" }}
          >
            <FontAwesomeIcon icon={faUsers} />
          </a>
        </Link>
      </Navbar>
      <Feedback show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Appbar;
