import useSWR from "swr";
import axios from "axios";
import AppWrapper from "../../common/modules/AppWrapper";
import FeedBanner from "../../common/components/banners/FeedBanner";
import UserList from "../../common/components/UserList";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "../../common/components/Loading";
import { useHiveStore, useAppStore } from "../../common/store";
import { useEffect } from "react";
import { ColdBrew } from "../../common/util/constants";

export default function users() {
  const {subscribers, getCommunitySubscribers} = useHiveStore()
  const {setLoadingTrue, setLoadingFalse} = useAppStore()

  const banner = {
    title: "Ƀeta Testers",
    about: "All of the users on Cold Ƀrew",
  };

  useEffect(() => {
    setLoadingTrue()
    getCommunitySubscribers(ColdBrew, 100)
    setLoadingFalse()
  }, [])

  return (
    <>
      <AppWrapper>
        <FeedBanner title={banner.title} about={banner.about} />
        <ListGroup variant="flush">
          {!subscribers && <Loading />}
          {subscribers &&
            subscribers.map((user) => {
              return <UserList key={user.username} username={user.username} />;
            })}
        </ListGroup>
      </AppWrapper>
    </>
  );
}
