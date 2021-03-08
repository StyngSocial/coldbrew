import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUserFriends,
  faUsers,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../public/logo.png";
import Feedback from "../../../components/Feedback";
import { Navbar, Nav, Button } from "react-bootstrap";

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
          <Nav.Link
            className="d-flex text-roast"
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
            className="btn-sm btn-coffee px-2 m-2 text-center d-flex align-items-center text-milk"
            onClick={() => setShow(true)}
          >
            Feedback
          </Nav.Link>
          <Nav.Link
            className="btn-sm btn-secondary px-2 my-2 text-center d-flex align-items-center text-milk"
            onClick={() => signOut()}
          >
            Signout
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
          <Nav.Link>
            <Image src={logo} height={45} width={45} />
          </Nav.Link>
        </Link>

        <Navbar.Collapse id="styng-nav" className="justify-content-end">
          <Nav className="d-flex">
            <Nav.Link
              className="btn-sm btn-coffee px-2 m-2 text-center d-flex align-items-center text-milk"
              onClick={() => setShow(true)}
            >
              Feedback
            </Nav.Link>
            <Nav.Link
              className="btn-sm btn-secondary px-2 my-2 text-center d-flex align-items-center text-milk"
              onClick={() => signOut()}
            >
              Signout
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
