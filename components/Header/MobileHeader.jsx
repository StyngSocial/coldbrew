import styles from "./MobileHeader.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import styng from "../../public/images/avatar black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
const MobileHeader = () => {
  return (
    <>
      <Navbar
        variant="light"
        bg="light"
        fixed="top"
        className={`border-bottom d-flex d-lg-none ${styles.navBar}`}
      >
        <Link href="/" passHref>
          <Navbar.Brand className={`${styles.coldbrew}`}>
            <FontAwesomeIcon icon={faHourglassStart} color="#d0be9c" />
          </Navbar.Brand>
        </Link>
        <div className="h4 text-dark m-2">Home</div>

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
              <Nav.Link className={`p-0 ${styles.profile}`}>
                <Image
                  height={32}
                  width={32}
                  src={styng}
                  className="rounded-circle"
                />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MobileHeader;
