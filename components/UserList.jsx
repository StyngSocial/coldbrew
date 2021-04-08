import { ListGroup, Row, Col } from "react-bootstrap";
import hive from "@hiveio/hive-js";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Observer } from "../util/constants";

/**
 * TODO: Reputation & Follow Buttons
 */

const UserList = ({ username }) => {
  const [user, setUser] = useState();
  const params = {
    account: username,
    observer: Observer,
  };
  useEffect(() => {
    hive.api.callAsync("bridge.get_profile", params).then((response) => {
      setUser(response);
    });
  }, []);
  return (
    <>
      {user && (
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
                  <h4 className="m-0">{user.metadata.profile.name}</h4>
                  <p className="m-0 px-2 text-muted">@{username}</p>
                </Row>
                <Row className="m-0">
                  <p className="m-0">
                    <strong>{user.stats.followers}</strong> Followers
                  </p>
                  <p className="m-0 px-2">
                    <strong>{user.stats.following}</strong> Following
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
