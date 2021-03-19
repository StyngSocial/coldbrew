import AppWrapper from "./AppWrapper";
import Beta from "./Beta";
import Feed from "../components/Feed.jsx";
import Loading from "../components/Loading";
import FeedBanner from "../components/FeedBanner";

const FeedModule = ({ session, loading, data, error, banner }) => {
  return (
    <>
      {loading && <Loading />}
      {!session && !loading && (
        <>
          <Beta />
        </>
      )}
      {session && !data && (
        <AppWrapper>
          <Loading />
        </AppWrapper>
      )}
      {session && data && (
        <AppWrapper>
          <FeedBanner title={banner.title} about={banner.about} />
          <Feed posts={data} />
        </AppWrapper>
      )}
    </>
  );
};

export default FeedModule;
