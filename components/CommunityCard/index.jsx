import Image from "next/image";
import { Card, Button, Badge } from "react-bootstrap";
import { Observer } from "../../util/constants";
import useSWR from "swr";

const CommunityCard = ({ name, category, index }) => {
  const { data, error } = useSWR(
    `/api/hive/communities/${category}?observer=${Observer}`
  );
  const avatar_url = `https://images.hive.blog/u/${category}/avatar`;
  return (
    <>
      {error && <h1>Error</h1>}
      {data && (
        <Card
          className="border-secondary d-flex justify-content-center bg-greenlight m-3"
          style={{ width: "300px" }}
        >
          <Card.Body className="border-light d-flex flex-column align-items-center">
            <Image
              className="text-center rounded-circle"
              width={100}
              height={100}
              src={avatar_url}
              alt="Community Avater"
            />
            <Card.Title className="py-3 m-0 d-inline">
              <Badge className="m-2 d-inline" variant="primary">
                {index}
              </Badge>
              {name}
            </Card.Title>
            <Card.Text className="">{data.about}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default CommunityCard;
