import { useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import LikeBtn from "../animations/LikeBtn";
import CommentBtn from "../animations/CommentBtn";

const Engagement = ({ votes, payout, comments, reblogs }) => {
  const usdPayout = parseFloat(payout).toFixed(2);
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
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
            <span className="text-muted" style={{ paddingLeft: "5px" }}>
              {voted}
            </span>
          </span>
          <span className="px-2">
            <a
              onClick={() => {
                votes++;
                setCommented(!commented);
              }}
            >
              <CommentBtn commented={commented} />
            </a>
            <span className="text-muted" style={{ paddingLeft: "5px" }}>
              {comments}
            </span>
          </span>
        </Col>
        <Col className="p-0 d-flex align-items-center justify-content-end">
          <Badge
            variant="primary"
            className="text-greenlight"
            style={{ fontSize: "1rem" }}
          >
            {`Ƀ ${usdPayout}`}
          </Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default Engagement;
