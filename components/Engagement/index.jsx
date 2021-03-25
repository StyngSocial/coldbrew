import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faMoneyBillWaveAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const Engagement = ({ votes, payout = "Ƀ 🚀", comments, reblogs }) => {
  return (
    <Container className="p-0 bg-light" fluid>
      <Row className="m-0 pt-1">
        <Col className="p-0 align-items-center justify-content-start">
          <span className="px-2">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-roast"
              style={{ marginRight: "10px" }}
            />
            <span>{votes}</span>
          </span>
          <span className="px-2">
            <FontAwesomeIcon
              icon={faComment}
              className="text-roast"
              style={{ marginRight: "10px" }}
            />

            <span>{comments}</span>
          </span>
          {/*  Reblogs, but how?
            <span className="px-2">
              <FontAwesomeIcon
                icon={faRetweet}
                className="text-roast"
                style={{ marginRight: "5px" }}
              />
              <span>{reblogs}</span>
            </span> 
            */}
        </Col>
        <Col className="p-0 d-flex align-items-center justify-content-end">
          <span className="px-2">
            <FontAwesomeIcon
              icon={faMoneyBillWaveAlt}
              className="text-primary"
              style={{ marginRight: "10px" }}
            />
            <span className="">{payout}</span>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Engagement;
