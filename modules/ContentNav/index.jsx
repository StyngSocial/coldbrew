import Link from "next/link";
import styles from "./ContentNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCode,
  faCoffee,
  faFire,
  faHouseUser,
} from "@fortawesome/free-solid-svg-icons";

const ContentNav = () => {
  return (
    <>
      <nav className="nav nav-pills position-fixed flex-column mt-4 px-3 d-none d-lg-flex">
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
        <Link href="/cb" passHref>
          <li className="nav-item">
            <a
              className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
              aria-current="page"
              href="#"
            >
              <h5 className="d-inline">
                <FontAwesomeIcon icon={faCoffee} className="d-inline" />
                <span className="mx-3">Cold Brew</span>
              </h5>
            </a>
          </li>
        </Link>
        <Link href="/dev" passHref>
          <li className="nav-item">
            <a
              className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
              aria-current="page"
              href="#"
            >
              <h5 className="d-inline">
                <FontAwesomeIcon icon={faCode} className="d-inline" />
                <span className="mx-3">Dev</span>
              </h5>
            </a>
          </li>
        </Link>

        <Link href="/trending" passHref>
          <li className="nav-item">
            <a
              className={`nav-link py-3 rounded-pill ${styles.contentBtn}`}
              aria-current="page"
              href="#"
            >
              <h5 className="d-inline">
                <FontAwesomeIcon icon={faFire} className="d-inline" />
                <span className="mx-3">Trending</span>
              </h5>
            </a>
          </li>
        </Link>
      </nav>
    </>
  );
};

export default ContentNav;
