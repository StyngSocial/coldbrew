import Image from "next/image";
import Link from "next/link";
import styles from "./Post.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Post = ({ post }) => {
  const title = post.title.slice(0, 50);
  const date = post.created.slice(0, 9);
  return (
    <Link
      href={`/post/${post.permlink}?author=${post.author}&observer=benny.blockchain`}
      passHref
    >
      <a className={`text-roast ${styles.link}`}>
        <Container fluid className={styles.post}>
          <Row className="py-2 border-bottom">
            <Col className="col-auto py-1">
              <a href="#">
                <Image
                  src={`https://images.hive.blog/u/${post.author}/avatar`}
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
              </a>
            </Col>
            <Col className="col-10 p-0 " style={{ marginRight: "20px" }}>
              <p className="m-0 d-inline">
                <strong>{title + "..."}</strong>
              </p>
              <p className="d-inline float-right text-muted">
                &nbsp;@{post.author} · {date}
              </p>

              <p className="m-0 pt-2">{post.body}</p>
            </Col>
          </Row>
        </Container>
      </a>
    </Link>
  );
};

export default Post;
