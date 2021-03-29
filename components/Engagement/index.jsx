import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faMoneyBillWaveAlt,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import LikeBtn from "../animations/LikeBtn";
const Engagement = ({ votes, payout, comments, reblogs }) => {
  const usdPayout = parseFloat(payout).toFixed(2);
  const [liked, setLiked] = useState(false);
  let voted = liked ? votes + 1 : votes;
  return (
    <Container className="p-0 bg-light" fluid>
      <Row className="m-0 pt-1">
        <Col className="p-0 align-items-center justify-content-start">
          <span className="px-2">
            <a
              onClick={() => {
                votes++;
                setLiked(true);
              }}
            >
              <LikeBtn clicked={liked} />
            </a>
            <span className="px-2">{voted}</span>
          </span>
          <span className="px-2">
            <FontAwesomeIcon
              icon={faComment}
              className="text-roast"
              style={{ marginRight: "10px" }}
            />
            <span>{comments}</span>
          </span>
        </Col>
        <Col className="p-0 d-flex align-items-center justify-content-end">
          <span className="px-2">
            <FontAwesomeIcon
              icon={faMoneyBillWaveAlt}
              className="text-primary"
              style={{ marginRight: "10px" }}
            />
            <span className="">${usdPayout}</span>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Engagement;
