import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
// import styng from "../../public/posts-tmp/avatar-black.png";

const Post = ({post}) => {
  return (
    <Container fluid>
      <Row className="py-2 bg-light border-bottom">
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
            <strong>{post.title}</strong>
          </p>
          <p className="d-inline float-right text-muted">
            &nbsp;@{post.author} · Feb 19
          </p>

          <p className="m-0 pt-2">{post.body}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;

// `u/${account}/avatar${size}