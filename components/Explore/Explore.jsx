import { Container, Button } from "react-bootstrap";

const Explore = () => {
  return (
    <Container className="p-0 h-100 w-25 position-fixed">
      <Button className="w-100" variant="primary" size="lg">
        Home
      </Button>
      <Button className="w-100" variant="primary" size="lg">
        Friends
      </Button>
      <Button className="w-100" variant="primary" size="lg">
        Communities
      </Button>
    </Container>
  );
};

export default Explore;
