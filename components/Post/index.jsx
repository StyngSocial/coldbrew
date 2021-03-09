import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const Post = ({ username, avatar, title, body }) => {
  const brewBody = body.slice(0, 776);
  return (
    <Container fluid>
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
        <Col className="col-10 p-0 " style={{ marginRight: "20px" }}>
          <p className="m-0 d-inline">
            <strong>{title}</strong>
          </p>
          <p className="d-inline float-right text-muted">
            &nbsp;@{username} · Feb 19
          </p>

          <p className="m-0 pt-2">{brewBody}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
