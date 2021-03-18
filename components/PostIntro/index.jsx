import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";
import styles from "./PostIntro.module.scss";
import { Container, Row, Col } from "react-bootstrap";

import { Observer } from "../../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const PostIntro = ({ post }) => {
  const { data, error } = useSWR(
    `api/hive/profile?account=${post.author}&observer=hiveio`,
    fetcher
  );

  const body = post.body.slice(0, 776);
  const date = post.created.slice(0, 10);
  return (
    <>
      <Link
        href={`/post/${post.permlink}?author=${post.author}&observer=${Observer}`}
        passHref
      >
        <a className={`text-roast ${styles.link}`}>
          <Container fluid className={`p-0 m-0 border-bottom ${styles.post}`}>
            <Row className="pt-3 m-0 align-items-center">
              <Image
                src={`https://images.hive.blog/u/${post.author}/avatar`}
                width={35}
                height={35}
                className="rounded-circle"
              />
              {data && (
                <p className="my-0" style={{ paddingLeft: "10px" }}>
                  <strong>{data.metadata.profile.name}</strong>
                </p>
              )}
              <p className="text-muted m-0">
                &nbsp;@{post.author} · {date}
              </p>
            </Row>
            <Row className="m-0">
              <p className="m-0">
                <strong>{post.title}</strong>
              </p>
            </Row>
            <p className="mw-100" style={{ overflow: "hidden" }}>
              {body}
            </p>
          </Container>
        </a>
      </Link>
    </>
  );
};

export default PostIntro;
