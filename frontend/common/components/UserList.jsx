import { ListGroup, Row, Col } from "react-bootstrap";
import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Observer } from "../util/constants";

/**
 * TODO: Reputation & Follow Buttons
 */
const fetcher = (url) => axios.get(url).then((res) => res.data);

const UserList = ({ username }) => {
  const { data, error } = useSWR(
    `/api/hive/profile?account=${username}&observer=hiveio`,
    fetcher
  );
  const [user, setUser] = useState();
  const params = {
    account: username,
    observer: Observer,
  };

  return (
    <>
      {data && (
        <Link href={`/beta/${username}`}>
          <ListGroup.Item>
            <Row className="align-items-center px-2">
              <Image
                src={`https://images.hive.blog/u/${username}/avatar`}
                height={75}
                width={75}
                alt={username + "profile pic"}
                className="rounded-circle"
              />
              <Col className="px-3">
                <Row className="align-items-center m-0">
                  <h6 className="m-0">{data.metadata.profile.name}</h6>
                  <p
                    className="m-0 px-2 text-muted"
                    style={{ fontSize: ".75rem" }}
                  >
                    @{username}
                  </p>
                </Row>
                <Row className="m-0">
                  <p className="m-0">
                    <strong>{data.stats.followers}</strong> Followers
                  </p>
                  <p className="m-0 px-2">
                    <strong>{data.stats.following}</strong> Following
                  </p>
                </Row>
              </Col>
            </Row>
          </ListGroup.Item>
        </Link>
      )}
    </>
  );
};

export default UserList;
