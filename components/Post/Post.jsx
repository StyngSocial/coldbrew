import Image from "next/image";
import styles from "./Post.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Post = ({ username, avatar, title, body }) => {
  return (
    <Container>
      <Row className="py-2 bg-light border-bottom">
        <Col className="col-auto py-1">
          <a href="#">
            <Image
              src={avatar}
              width={40}
              height={40}
              className="rounded-circle"
            />
          </a>
        </Col>
        <Col className="col-8 p-0 " style={{ marginRight: "20px" }}>
          <p className="m-0 d-inline">
            <strong>{title}</strong>
          </p>
          <p className={`d-inline float-right text-muted ${styles.tweet}`}>
            &nbsp;@{username} · Feb 19
          </p>

          <p className="m-0 pt-2 mw-100">{body}</p>
          {/* {media && (
            <Container fluid className="text-center">
              <Image
                src={media}
                height={500}
                width={250}
                className="rounded text-center"
              />
            </Container>
          )} */}
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
