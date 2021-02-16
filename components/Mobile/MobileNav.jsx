import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MobileNav.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUserCheck,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  return (
    <Navbar
      variant="light"
      bg="light"
      fixed="bottom"
      className={`border-top p-0 d-flex d-lg-none justify-content-between align-items-center ${styles.mobilenav}`}
    >
      <Link href="/#" passHref active>
        <a className={styles.link}>
          <FontAwesomeIcon icon={faHouseUser} />
        </a>
      </Link>
      <Link href="/#" passHref>
        <a className={styles.link}>
          <FontAwesomeIcon icon={faUserFriends} />
        </a>
      </Link>

      <Link href="/#" passHref>
        <a className={styles.link}>
          <FontAwesomeIcon icon={faUserCheck} />
        </a>
      </Link>
      <Link href="/#" passHref>
        <a className={styles.link}>
          <FontAwesomeIcon icon={faUsers} />
        </a>
      </Link>
    </Navbar>
  );
};

export default MobileNav;
