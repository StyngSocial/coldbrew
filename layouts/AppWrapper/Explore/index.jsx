import Link from "next/link";
import styles from "./Explore.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUserCheck,
  faUserFriends,
  faAddressCard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Explore = () => {
  return (
    <Container
      className={`p-0 mt-4 d-flex flex-column position-fixed align-items-start`}
    >
      <Link href="/" passHref>
        <a className={`${styles.button} d-flex align-items-center`}>
          <FontAwesomeIcon icon={faHouseUser} className="d-inline" />
          <div className="d-inline mx-3">Home</div>
        </a>
      </Link>
      <Link href="/communities" passHref>
        <a className={`${styles.button} d-flex align-items-center`}>
          <FontAwesomeIcon icon={faUserFriends} className="d-inline" />
          <div className="d-inline mx-3">Friends</div>
        </a>
      </Link>
      <Link to="/" href="#">
        <a className={`${styles.button} d-flex align-items-center`}>
          <FontAwesomeIcon icon={faUserCheck} className="d-inline" />
          <div className="d-inline mx-3">Subscriptions</div>
        </a>
      </Link>
      <Link to="/" href="#">
        <a className={`${styles.button} d-flex align-items-center`}>
          <FontAwesomeIcon icon={faUsers} className="d-inline" />
          <div className="d-inline mx-3">Communities</div>
        </a>
      </Link>
      <Link to="/" href="#">
        <a className={`${styles.button} d-flex align-items-center`}>
          <FontAwesomeIcon icon={faAddressCard} className="d-inline" />
          <div className="d-inline mx-3">Preferences</div>
        </a>
      </Link>
    </Container>
  );
};

export default Explore;
