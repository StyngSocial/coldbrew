import { Container } from "react-bootstrap";
import Image from "next/image";
import ah from "../../public/images/ah.png";
import baker from "../../public/images/baker.png";
import cle from "../../public/images/cle.png";
import creole from "../../public/images/creole.png";
import elon from "../../public/images/elon.png";
import lindor from "../../public/images/lindor.png";
import miracle from "../../public/images/miracle.png";
import moon from "../../public/images/moon.png";
import pres from "../../public/images/pres.png";
import poh from "../../public/images/poh.png";
import post from "../../public/images/post.png";
import whit from "../../public/images/whit.png";

const Feed = () => {
  return (
    <Container className="px-4 w-100 text-center">
      <Image src={ah} height={500} width={500} />
      <Image src={baker} height={500} width={500} />
      <Image src={cle} height={500} width={500} />
      <Image src={creole} height={500} width={500} />
      <Image src={elon} height={500} width={500} />
      <Image src={lindor} height={500} width={500} />
      <Image src={miracle} height={500} width={500} />
      <Image src={moon} height={500} width={500} />
      <Image src={pres} height={500} width={500} />
      <Image src={poh} height={500} width={500} />
      <Image src={post} height={500} width={500} />
      <Image src={whit} height={500} width={500} />
    </Container>
  );
};

export default Feed;
