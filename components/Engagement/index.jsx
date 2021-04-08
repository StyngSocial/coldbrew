import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Badge } from "react-bootstrap";
import LikeBtn from "../animations/LikeBtn";
import CommentBtn from "../animations/CommentBtn";
import { vote } from "../../components/hivesigner/broadcast";
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
  console.log(voted);
  const usdPayout = parseFloat(payout).toFixed(2);
  const auth = useContext(HivesignerContext);
  const router = useRouter();
  const [liked, setLiked] = useState(voted);
  const [commented, setCommented] = useState(false);

  const likePost = () => {
    if (voted) {
      alert("Already liked post");
      return;
    }
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("sc_token");
    auth.client.setAccessToken(token);
    if (!token) {
      const url = auth.client.getLoginURL();
      router.push(url);
    } else {
      vote(auth, author, permlink, 10000, (result) => {
        if (!result) {
          setLiked(false);
          alert("Could not vote. Sorry.");
          return;
        }
        votes++;
        console.log(votes);
      });
    }
  };
  return (
    <Container className="p-0 bg-light" fluid>
      <Row className="m-0 pt-1">
        <Col className="p-0 align-items-center justify-content-start">
          <span className="px-2">
            <a
              onClick={() => {
                likePost();
                setLiked(true);
              }}
            >
              <LikeBtn clicked={liked} />
            </a>
            <span className="text-muted" style={{ paddingLeft: "5px" }}>
              {votes}
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
