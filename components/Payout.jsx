import { Badge } from "react-bootstrap";

const Payout = ({ payout }) => {
  return (
    <Badge
      variant="primary"
      className="text-greenlight"
      style={{ fontSize: "1rem" }}
    >
      {`Ƀ ${payout}`}
    </Badge>
  );
};

export default Payout;
