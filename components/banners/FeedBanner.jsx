import { Container } from "react-bootstrap";
import logo from "../../public/logo.png";
const FeedBanner = ({ title, about }) => {
  return (
    <Container fluid className="py-2 bg-greenlight border-bottom">
      <h3 className="">{title}</h3>
      <p className="">{about}</p>
    </Container>
  );
};

export default FeedBanner;
