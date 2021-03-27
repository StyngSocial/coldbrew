import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import styles from "./ColdBrewPost.module.scss";
import { Container, Row } from "react-bootstrap";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import TimeAgo from "react-timeago";

import usePostBody from "../../util/usePostBody.js";
import Engagement from "../Engagement";
import { Observer } from "../../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const ColdBrewPost = ({ post, permlink }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const date = post.created.slice(0, 10);
  const { brew, images } = usePostBody(post.body);
  const { data, error } = useSWR(
    `/api/hive/profile?account=${post.author}&observer=${Observer}`,
    fetcher
  );
  let key = 0;
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);

  return (
    <>
      <Container fluid className={`pt-3 pb-2 m-0 border-bottom ${styles.post}`}>
        <Row className="m-0 align-items-center">
          <Image
            src={`https://images.hive.blog/u/${post.author}/avatar`}
            width={35}
            height={35}
            className="rounded-circle"
            alt="User Avatar"
          />
          {data && (
            <div className="my-0" style={{ paddingLeft: "10px" }}>
              <Link href={`/${post.author}`} passHref>
                <a>
                  <strong className="text-roast">
                    {data.metadata.profile.name}
                  </strong>
                </a>
              </Link>
              <div className="text-muted d-none d-md-inline">
                &nbsp;@{post.author}
              </div>
              &nbsp;·&nbsp;
              <TimeAgo className="text-muted m-0 d-inline" date={date} />
            </div>
          )}
        </Row>

        <Link href={`/${post.author}/${permlink}`} passHref>
          <a>
            <strong className="m-0 pt-2 text-roast">{post.title}</strong>
          </a>
        </Link>

        {brew.map((pint) => {
          key++;
          return (
            <p
              key={key}
              className="m-0 mb-3 mw-100"
              style={{ overflow: "hidden" }}
            >
              {pint}
            </p>
          );
        })}

        <Row className="m-0 p-0 pb-2 justify-content-center">
          {images && (
            <>
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
            </>
          )}
        </Row>
        <Engagement
          votes={post.active_votes.length}
          comments={post.children}
          payouts={post.payout}
        />
      </Container>
    </>
  );
};

export default ColdBrewPost;
