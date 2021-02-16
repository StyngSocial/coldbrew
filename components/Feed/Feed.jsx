import { Container } from "react-bootstrap";
import Image from "next/image";
import pio from "../../public/images/pio.jpeg";

const Feed = () => {
  return (
    <Container className="px-4 py-2 w-100 text-center">
      <h1 className="text-warning">DANGER!</h1>
      <Image src={pio} height={400} width={225} />
      <h4>Local horny man spotted in Alliance, OH</h4>
      <p className="text-muted">
        Last seen wearing a band aid on his swipe thumb.
      </p>
      <h6 className="text-warning">SEEK SHELTER</h6>
    </Container>
  );
};

export default Feed;
