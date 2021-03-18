import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "./Post.module.scss";
import { Container, Row, Col } from "react-bootstrap";

import { Observer } from "../../util/constants";
import useMarkddown from "../../util/useMarkdown";

const Post = ({ post }) => {
  let title = post.title;
  let body = useMarkddown(post.body);

  if (title.length > 50) {
    title = post.title.slice(0, 50) + "...";
  } else {
    title = post.title;
  }

  const date = post.created.slice(0, 10);
  return (
    <>
      <Head>
        <title>{post.author}</title>
      </Head>
      <Link
        href={`/post/${post.permlink}?author=${post.author}&observer=${Observer}`}
        passHref
      >
        <a className={`text-roast ${styles.link}`}>
          <Container fluid className={`p-0 m-0 border-bottom ${styles.post}`}>
            <Row className="pt-3 m-0 align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Image
                  src={`https://images.hive.blog/u/${post.author}/avatar`}
                  width={30}
                  height={30}
                  className="rounded-circle d-inline"
                />
                <p className="m-0 px-2 d-inline">
                  <strong>{title}</strong>
                </p>
              </div>
              <p className="text-muted m-0">
                &nbsp;@{post.author} · {date}
              </p>
            </Row>
            <Row className="pb-3 m-0 border-bottom">
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </Row>
          </Container>
        </a>
      </Link>
    </>
  );
};

export default Post;
