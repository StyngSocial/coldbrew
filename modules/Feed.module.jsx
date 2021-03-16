import AppWrapper from "./AppWrapper";
import Beta from "./Beta";
import Feed from "../components/Feed.jsx";
import Loading from "../components/Loading";

const FeedModule = ({ session, loading, data, error }) => {
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
          <Feed posts={data} />
        </AppWrapper>
      )}
    </>
  );
};

export default FeedModule;
