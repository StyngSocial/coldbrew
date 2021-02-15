import styles from "./Promoted.module.scss";
import { Container, Card } from "react-bootstrap";

const Promoted = () => {
  return (
    <Container
      className={`d-flex flex-column align-items-start h-100 w-25 position-fixed ${styles.container}`}
    >
      <h2>Promoted</h2>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Promoted;
