import Link from "next/link";
import styles from "./ContentNav.module.scss";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faSearch,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const ContentNav = () => {
  return (
    <nav
      className="nav nav-pills position-fixed flex-column mt-4 px-3"
      style={{ width: "" }}
    >
      <Link href="/" passHref>
        <li className="nav-item">
          <a
            className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
            aria-current="page"
            href="#"
          >
            <h5 className="d-inline">
              <FontAwesomeIcon icon={faHouseUser} className="d-inline" />
              <span className="mx-3">Home</span>
            </h5>
          </a>
        </li>
      </Link>
      <Link href="/following" passHref>
        <li className="nav-item">
          <a
            className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
            aria-current="page"
            href="#"
          >
            <h5 className="d-inline">
              <FontAwesomeIcon icon={faUserFriends} className="d-inline" />
              <span className="mx-3">Following</span>
            </h5>
          </a>
        </li>
      </Link>
      <Link href="/c" passHref>
        <li className="nav-item">
          <a
            className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
            aria-current="page"
            href="#"
          >
            <h5 className="d-inline">
              <FontAwesomeIcon icon={faUsers} className="d-inline" />
              <span className="mx-3">Communities</span>
            </h5>
          </a>
        </li>
      </Link>
      <Link href="/explore" passHref>
        <li className="nav-item">
          <a
            className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
            aria-current="page"
            href="#"
          >
            <h5 className="d-inline">
              <FontAwesomeIcon icon={faSearch} className="d-inline" />
              <span className="mx-3">Explore</span>
            </h5>
          </a>
        </li>
      </Link>
    </nav>
  );
};

export default ContentNav;
