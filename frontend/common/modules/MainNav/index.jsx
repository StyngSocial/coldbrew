// import HomeButton from "../../components/icons/HomeButton";
// import ColdbrewButton from "../../components/icons/ColdbrewButton";
// import DevButton from "../../components/icons/DevButton";
// import ChartButton from "../../components/icons/ChartButton";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./MainNav.module.scss";
import {
  faQuestion,
  faPlus,
  faUsers,
  faCode,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";
import Feedback from "../../components/Feedback.jsx";
import { Navbar, Nav, Button, OverlayTrigger, Popover } from "react-bootstrap";
import DevNotes from "../../components/DevNotes";
import logo from "../../../public/brew.png";
import { HivesignerContext, login, logout } from "../../hooks/useAuth";
import Post from "../../components/hivesigner/Post";

const MainNav = () => {
  const [show, setShow] = useState(false);
  const [dev, setDev] = useState(false);
  const [post, setPost] = useState(false);
  // const auth = useContext(HivesignerContext);

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
        <Link href="/beta" passHref>
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
        <Link href="/beta" passHref>
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
          {/* <Nav.Link
            className="px-3 my-2 text-center d-flex align-items-center text-roast intro"
            onClick={() => setDev(true)}
          >
            <FontAwesomeIcon icon={faInfo} style={{ fontSize: "1.25rem" }} />
          </Nav.Link> */}
          <Nav.Link
            className="px-3 my-2  text-center d-flex align-items-center text-roast"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              style={{ fontSize: "1.25rem" }}
            />
          </Nav.Link>
          {/* {auth.activeUser && (
            <Nav.Link className="px-2 my-2 text-center d-flex align-items-center text-primary">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Title as="p">Come back again! 👋</Popover.Title>
                    <Popover.Content className="text-center">
                      <Button
                        size="sm"
                        variant="creamer"
                        className="text-greenlight"
                        onClick={() => logout(auth.client)}
                      >
                        Sign out
                      </Button>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Image
                  src={auth.activeUser.user_metadata.profile.profile_image}
                  alt="Profile photo"
                  className="rounded-circle"
                  height={35}
                  width={35}
                />
              </OverlayTrigger>
            </Nav.Link>
          )} */}
          {/* {!auth.activeUser && (
            <Nav.Link
              className="px-2 my-2 text-center d-flex align-items-center text-primary"
              onClick={() => login(auth.client)}
            >
              <Button
                size="sm"
                variant="primary"
                className="text-light rounded-pill"
              >
                Log in
              </Button>
            </Nav.Link>
          )} */}
        </Nav>
      </Navbar>
      <Navbar
        variant="light"
        bg="light"
        fixed="bottom"
        className="border-top p-0 pb-2 d-flex d-lg-none"
      >
        <Link href="/beta" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <FontAwesomeIcon
              icon={faHouseUser}
              style={{ fontSize: "1.5rem" }}
            />
          </Nav.Link>
        </Link>

        <Link href="/beta/dev" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <FontAwesomeIcon icon={faCode} style={{ fontSize: "1.5rem" }} />
          </Nav.Link>
        </Link>

        <Nav.Link
          className={`w-25 py-3 text-center`}
          onClick={() => setPost(true)}
        >
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "1.5rem" }} />
        </Nav.Link>

        <Link href="/beta/cb" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <FontAwesomeIcon icon={faQuestion} style={{ fontSize: "1.5rem" }} />
          </Nav.Link>
        </Link>

        <Link href="/beta/cb-users" passHref>
          <Nav.Link className={`w-25 py-3 text-center`}>
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: "1.5rem" }} />
          </Nav.Link>
        </Link>
      </Navbar>
      <Feedback show={show} onHide={() => setShow(false)} />
      <DevNotes show={dev} onHide={() => setDev(false)} />
      <Post
        show={post}
        onHide={() => setPost(false)}
        parent_author=""
        parent_permlink="hive-152197"
        header="Post a Ƀrew"
      />
    </>
  );
};

export default MainNav;
