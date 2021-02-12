import styles from "./Feed.module.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Container from "react-bootstrap/Container";

import Header from "../Header/Header";

const Feed = () => {
  return (
    <>
      <Row className={`${styles.sidebar} mw-100 mx-0`}>
        <Col lg={3} className={`${styles.links} h-100`}>
          ben
        </Col>
        <Col lg={6} className={`${styles.feed} align-self-start`}>
          karma
        </Col>
        <Col lg={3} className={`${styles.ads} h-100`}>
          karma
        </Col>
      </Row>
    </>
  );
};

export default Feed;
