import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainNav.module.scss";
import {
  faQuestion,
  faSignOutAlt,
  faInfo,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Feedback from "../../components/Feedback.jsx";
import { Navbar, Nav } from "react-bootstrap";
import DevNotes from "../../components/DevNotes";
import logo from "../../public/brew.png";

import HomeButton from "../../components/icons/HomeButton";
import ColdbrewButton from "../../components/icons/ColdbrewButton";
import DevButton from "../../components/icons/DevButton";
import ChartButton from "../../components/icons/ChartButton";
import Post from "../../components/hivesigner/Post";

import HivesignerContext from "../../components/hivesigner/HivesignerContext";

const MainNav = () => {
  const [show, setShow] = useState(false);
  const [dev, setDev] = useState(false);
  const [post, setPost] = useState(false);
  const auth = useContext(HivesignerContext);
  const login = () => {
    auth.client.login({ username: "benny.blockchain" });
  };
  return (
    <>
      <Navbar
        fixed="top"
        bg="light"
        className={`border-bottom my-0 d-flex justify-content-between ${styles.mobileTop}`}
        style={{
          height: "50px",
        }}
      >
        <Link href="/" passHref>
          <Nav.Link
            className="text-roast pt-1 d-none d-md-flex"
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
        <Link href="/" passHref>
          <Nav.Link
            className="text-roast py-1 px-3 d-flex d-md-none"
            style={{
              fontFamily: "Dancing Script",
              fontWeight: "700",
              fontSize: "2rem",
            }}
          >
            <Image src={logo} height={35} width={35} alt="Cold Brew logo" />
          </Nav.Link>
        </Link>

        <Nav className="d-flex">
          <Nav.Link
            className="px-2 m-2 text-center d-flex align-items-center text-roast intro"
            onClick={() => setDev(true)}
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
            onClick={() => login()}
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
        className="border-top p-0 pb-2 d-flex d-lg-none"
      >
        <Link href="/" passHref>
          <Nav.Link className={`w-25 py-3 text-center `}>
            <HomeButton active={false} />
          </Nav.Link>
        </Link>

        <Link href="/dev" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <DevButton active={false} />
          </Nav.Link>
        </Link>

        <Nav.Link
          className={`w-25 py-3 text-center`}
          onClick={() => setPost(true)}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </Nav.Link>

        <Link href="/cb" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <ColdbrewButton active={false} />
          </Nav.Link>
        </Link>

        <Link href="/trending" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <ChartButton active={false} />
          </Nav.Link>
        </Link>
      </Navbar>
      <Feedback show={show} onHide={() => setShow(false)} />
      <DevNotes show={dev} onHide={() => setDev(false)} />
      <Post show={post} onHide={() => setPost(false)} />
    </>
  );
};

export default MainNav;
