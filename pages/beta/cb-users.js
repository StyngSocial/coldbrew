import useSWR from "swr";
import axios from "axios";
import AppWrapper from "../../common/modules/AppWrapper";
import FeedBanner from "../../common/components/banners/FeedBanner";
import UserList from "../../common/components/UserList";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "../../common/components/Loading";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function users() {
  const { data, error } = useSWR(
    "/api/hive/subscribers?community=hive-152197",
    fetcher
  );

  const banner = {
    title: "Ƀeta Testers",
    about: "All of the users on Cold Ƀrew",
  };
  return (
    <>
      <AppWrapper>
        <FeedBanner title={banner.title} about={banner.about} />
        <ListGroup variant="flush">
          {!data && <Loading />}
          {data &&
            data.map((user) => {
              return <UserList key={user.username} username={user.username} />;
            })}
        </ListGroup>
      </AppWrapper>
    </>
  );
}
