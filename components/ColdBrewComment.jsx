import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { Container, Row, Col } from "react-bootstrap";
import { useCallback, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Link from "next/link";
import TimeAgo from "react-timeago";

import usePostBody from "../util/usePostBody.js";
import Engagement from "./Engagement";

const ColdBrewComment = ({ post }) => {
  console.log(post);
  const [isZoomed, setIsZoomed] = useState(false);
  const { brew, images } = usePostBody(post.body);
  let key = 0;
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <>
      <Container
        fluid
        className="pb-2 m-0 border-bottom"
        style={{ paddingLeft: "25px" }}
      >
        <div
          className="position-absolute h-100 bg-secondary"
          style={{ width: "1px" }}
        ></div>
        <Container className="pt-3">
          <Row className="m-0 align-items-center">
            <Col xs="auto" className="px-0">
              <img
                src={`https://images.hive.blog/u/${post.author}/avatar`}
                style={{ width: "35px" }}
                height="35px"
                className="p-0 rounded-circle"
                alt="User"
              />
            </Col>
            <Col
              className="px-2"
              style={({ paddingLeft: "5px" }, { fontSize: ".85rem" })}
            >
              <Link href={`/${post.author}`} passHref>
                <a>
                  <strong className="text-roast d-inline">
                    @{post.author}
                  </strong>
                </a>
              </Link>
              &nbsp;·&nbsp;
              <TimeAgo className="text-muted d-inline" date={post.created} />
              <br />
            </Col>
          </Row>

          <Link href={`/${post.author}/${post.permlink}`} passHref>
            <a>
              <strong
                className="m-0 pt-2 text-muted"
                style={{ fontSize: ".6rem" }}
              >
                Replying to @{post.parent_author}
              </strong>
            </a>
          </Link>

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
            votes={post.active_votes.length}
            comments={post.children}
            payout={post.pending_payout_value}
          />
        </Container>
      </Container>
    </>
  );
};

export default ColdBrewComment;
