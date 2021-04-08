import useSWR from "swr";
import axios from "axios";
import AppWrapper from "../../modules/AppWrapper";
import FeedBanner from "../../components/banners/FeedBanner";
import UserList from "../../components/UserList";
import ListGroup from "react-bootstrap/ListGroup";

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
    <AppWrapper>
      <FeedBanner title={banner.title} about={banner.about} />
      <ListGroup variant="flush">
        {data &&
          data.map((user) => {
            return <UserList key={user.username} username={user.username} />;
          })}
      </ListGroup>
    </AppWrapper>
  );
}
