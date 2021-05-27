import Link from "next/link";

import { useCallback, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import TimeAgo from "react-timeago";

import { HivesignerContext } from "../../hooks/useAuth";
import usePostBody from "../../util/usePostBody";
import Engagement from "../Engagement";

const ColdBrewPost = ({ post }) => {
  const auth = useContext(HivesignerContext);
  const [isZoomed, setIsZoomed] = useState(false);
  const { brew, images } = usePostBody(post.body);
  let key = 0;
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  let voted = post.active_votes.some(
    (vote) => vote.voter === auth.activeUser.user
  );

  return (
    <>
      <Container fluid className="pt-3 pb-2 m-0 border-bottom">
        <Row className="m-0 align-items-center">
          <Col xs="auto" className="px-0">
            <Link href={`/beta/${post.author}`} passHref>
              <a>
                <img
                  src={`https://images.hive.blog/u/${post.author}/avatar`}
                  style={{ width: "35px" }}
                  height="35px"
                  className="p-0 rounded-circle"
                  alt="User"
                />
              </a>
            </Link>
          </Col>
          <Col
            className="px-2"
            style={({ paddingLeft: "5px" }, { fontSize: ".85rem" })}
          >
            <Link href={`/beta/${post.author}`} passHref>
              <a>
                <strong className="text-roast d-inline">@{post.author}</strong>
              </a>
            </Link>
            &nbsp;·&nbsp;
            <TimeAgo className="text-muted d-inline" date={post.created} />
            <br />
          </Col>
        </Row>

        <Link href={`/beta/${post.author}/${post.permlink}`} passHref>
          <a className="text-roast text-decoration-none">
            <strong className="m-0 pt-2 text-roast">{post.title}</strong>

            {brew.map((pint) => {
              key++;
              return (
                <p
                  key={key}
                  className="m-0 mb-2 mw-100"
                  style={{ overflow: "hidden" }}
                >
                  {pint}
                </p>
              );
            })}
          </a>
        </Link>

        {images && (
          <>
            <Row className="m-0 p-0 pb-2 justify-content-center">
              <ControlledZoom
                isZoomed={isZoomed}
                onZoomChange={handleZoomChange}
                zoomMargin={15}
                closeText="Close image"
                openText="Open image"
              >
                <img
                  alt={post.author + " Brew Image"}
                  src={images[0]}
                  className={`img-fluid rounded d-inline`}
                  style={{ height: "200px" }}
                />
              </ControlledZoom>
            </Row>
          </>
        )}
        <Engagement
          voted={voted}
          author={post.author}
          permlink={post.permlink}
          votes={post.active_votes.length}
          comments={post.children}
          payout={post.pending_payout_value}
        />
      </Container>
    </>
  );
};

export default ColdBrewPost;
