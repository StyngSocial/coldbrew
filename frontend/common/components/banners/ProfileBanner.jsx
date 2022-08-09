import { Container } from "react-bootstrap";
import logo from "../../../public/logo.png";
import axios from "axios";
import useSWR from "swr";

import { Observer } from "../../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const FeedBanner = ({ username }) => {
  const { data, error } = useSWR(
    `/api/hive/profile?account=${username}&observer=${Observer}`,
    fetcher
  );
  return (
    <>
      {error && <h1>Broke</h1>}
      {data && (
        <>
          <Container
            fluid
            className="p-0 m-0 bg-secondary"
            style={{ height: "100px" }}
          >
            <img
              src={`https://images.hive.blog/u/${username}/avatar`}
              alt="pic"
              height="75px"
              className="mx-3 rounded-circle border border-5 bg-dark position-absolute"
              style={{ top: "45px" }}
            />
            <img src={logo} width="50px" className="pt-5 float-right" />
          </Container>
          <Container fluid className="border-bottom pt-4 pb-2">
            <strong className="">{data.metadata.profile.name}</strong>

            <span className="d-block text-muted" style={{ fontSize: ".75rem" }}>
              @{data.name}
            </span>
            <p className="m-0">{data.metadata.profile.about}</p>
            <span className="" style={{ fontSize: ".75rem" }}>
              <strong>{data.stats.followers}</strong> Followers&nbsp;&nbsp;
              <strong>{data.stats.following}</strong> Following
            </span>
          </Container>
        </>
      )}
    </>
  );
};

export default FeedBanner;
