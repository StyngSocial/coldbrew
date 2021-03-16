import AppWrapper from "./AppWrapper";
import Beta from "../Beta";
import Loading from "../components/Loading";

const CommunitiesModule = ({ session, loading, data, error }) => {
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
      {session && data && <AppWrapper>ben</AppWrapper>}
    </>
  );
};

export default CommunitiesModule;
