import AppWrapper from "./AppWrapper";
import Beta from "../Beta";
import Loading from "../components/Loading";
import TrendingCommunities from "../components/TrendingCommunities";

const CommunitiesModule = ({ session, loading, data, error }) => {
  return (
    <>
      {!session && loading && <Loading />}
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
          <TrendingCommunities />
        </AppWrapper>
      )}
    </>
  );
};

export default CommunitiesModule;
