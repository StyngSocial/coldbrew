import { Container, Button } from "react-bootstrap";

const Promoted = () => {
  return (
    <Container className="p-0 h-100 w-25 position-fixed">
      <Button className="w-100" variant="primary" size="lg">
        Ad
      </Button>
      <Button className="w-100" variant="primary" size="lg">
        cold brew
      </Button>
      <Button className="w-100" variant="primary" size="lg">
        Influencer
      </Button>
    </Container>
  );
};

export default Promoted;
