import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Badge } from "react-bootstrap";
import LikeBtn from "../animations/LikeBtn";
import CommentBtn from "../animations/CommentBtn";
import HivesignerContext from "../hivesigner/HivesignerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import Post from "../hivesigner/Post";

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
  const [show, showReply] = useState(false);

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

  const reply = () => {
    let coldbrew_meta = {
      tags: ["coldbrew-dev"],
      app: "Cold Brew",
      format: "UTF-8",
    };
    let date = new Date();
    let perm_link = `cb-${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    auth.client.comment(
      author,
      "hive-152197",
      auth.activeUser,
      perm_link,
      title,
      body,
      coldbrew_meta,
      (err, result) => {
        if (result) {
          setLoading(false);
          setPosted(true);
          setTitle("");
          setBody("");
          setTimeout(() => {
            setPosted(false);
          }, 5000);
          return;
        } else {
          setLoading(false);
          if (err.error_description.includes("HIVE_MIN_ROOT_COMMENT")) {
            return alert("You can only post every five minutes.");
          }
          return alert("Cannot post right now.");
        }
      }
    );
  };
  const userPost = auth.activeUser === author ? "d-none" : "";
  return (
    <>
      <Container className="p-0 bg-light" fluid>
        <Row className="m-0 pt-1">
          <Col className="p-0 align-items-center justify-content-start">
            <span className={`px-2 text-creamer ${userPost}`}>
              <a
                onClick={() => {
                  showReply(true);
                }}
              >
                <FontAwesomeIcon icon={faReply} />
              </a>
            </span>
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
              <Link href={`${author}/${permlink}`} passHref>
                <a>
                  <CommentBtn commented={false} />
                </a>
              </Link>
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
      <Post
        show={show}
        onHide={() => showReply(!show)}
        parent_author={author}
        parent_permlink={permlink}
        header={`Replying to, @${author}`}
      />
    </>
  );
};

export default Engagement;
