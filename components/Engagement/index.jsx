import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Badge } from "react-bootstrap";
import LikeBtn from "../animations/LikeBtn";
import CommentBtn from "../animations/CommentBtn";
import HivesignerContext from "../hivesigner/HivesignerContext";

const Engagement = ({
  voted,
  author,
  permlink,
  votes,
  payout,
  comments,
  reblogs,
}) => {
  const auth = useContext(HivesignerContext);
  const usdPayout = parseFloat(payout).toFixed(2);
  const router = useRouter();
  const [liked, setLiked] = useState(voted);
  const [likes, setLikes] = useState(votes);
  const [commented, setCommented] = useState(false);

  const likePost = () => {
    if (voted) {
      alert("You have already liked this Ƀrew");
      return;
    }
    if (!auth.activeUser) {
      let loginUrl = auth.client.getLoginURL();
      router.push(loginUrl);
    }
    auth.client.vote(auth.activeUser, author, permlink, 1000, (err, result) => {
      setLiked(true);
      if (result) {
        let liked = likes + 1;
        setLikes(liked);
      } else if (err) {
        alert(err.error_description);
      }
    });
  };

  return (
    <Container className="p-0 bg-light" fluid>
      <Row className="m-0 pt-1">
        <Col className="p-0 align-items-center justify-content-start">
          <span className="px-2">
            <a
              onClick={() => {
                likePost();
              }}
            >
              <LikeBtn clicked={liked} />
            </a>
            <span className="text-muted" style={{ paddingLeft: "5px" }}>
              {likes}
            </span>
          </span>
          <span className="px-2">
            <a
              onClick={() => {
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
