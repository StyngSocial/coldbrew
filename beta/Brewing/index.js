import Image from "next/image";
import coldbrew from "../../public/logo.png";

const Brewing = () => {
  return (
    <div>
      <Image src={coldbrew} width={250} height={250} />
      <h1 className="mt-5">Brewing...</h1>
    </div>
  );
};

export default Brewing;
