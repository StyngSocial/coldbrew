import AppWrapper from "./AppWrapper";
import Beta from "../Beta";
import Feed from "../components/Feed";
import Loading from "../components/Loading";

const FeedModule = ({ session, loading, data, error }) => {
  return (
    <>
      {!session && loading && <h1>Loading...</h1>}
      {!session && (
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
