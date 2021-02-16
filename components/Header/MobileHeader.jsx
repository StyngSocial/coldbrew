import styles from "./MobileHeader.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import BBC from "../../public/images/bennyblockchain.jpg";
import styng from "../../public/images/avatar black.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <Navbar.Brand className={`${styles.cortado} ${styles.styngBrand}`}>
            cold brew
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

            <Link href="/profile" passHref>
              <Nav.Link className={`p-0 ${styles.profile}`}>
                <Image
                  height={34}
                  width={34}
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
