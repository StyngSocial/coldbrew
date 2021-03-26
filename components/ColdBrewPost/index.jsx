import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import styles from "./ColdBrewPost.module.scss";
import { Container, Row, Modal } from "react-bootstrap";

import usePostBody from "../../util/usePostBody.js";
import Engagement from "../Engagement";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const ColdBrewPost = ({ post }) => {
  const date = post.created.slice(0, 10);
  const { brew, images } = usePostBody(post.body);
  const { data, error } = useSWR(
    `api/hive/profile?account=${post.author}&observer=hiveio`,
    fetcher
  );
  if (images) console.log(images[0]);

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
            <p className="my-0" style={{ paddingLeft: "10px" }}>
              <strong>{data.metadata.profile.name}</strong>
              <div className="text-muted d-inline">&nbsp;@{post.author}</div>
            </p>
          )}
          <p className="text-muted m-0 d-none d-md-flex">&nbsp;· {date}</p>
        </Row>

        <p className="m-0 pt-2">
          <strong>{post.title}</strong>
        </p>

        {brew.map((pint) => {
          let key = pint.slice(0, 3);

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

        <Row className="m-0 p-0 pb-2 justify-content-center">
          {images && (
            <img
              src={images[0]}
              className={`img-fluid rounded d-inline`}
              style={{ height: "200px" }}
              alt="User Avatar"
            />
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
