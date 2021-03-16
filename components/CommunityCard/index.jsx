import { Card, Button, Badge } from "react-bootstrap";
const CommunityCard = ({ name, title, about, avatar_url, index }) => {
  return (
    <Card
      className="border-light d-flex justify-content-center bg-greenlight m-3"
      style={{ width: "300px" }}
    >
      <Card.Body className="border-light d-flex flex-column align-items-center">
        <img
          className="text-center"
          src={avatar_url}
          alt={`${title} avatar`}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Title className="py-3 m-0 d-inline">
          <Badge className="m-2 d-inline" variant="primary">
            1
          </Badge>
          {title}
        </Card.Title>
        <Card.Text className="">{about}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CommunityCard;
//https://images.hive.blog/u/benny.blockchain/avatar
