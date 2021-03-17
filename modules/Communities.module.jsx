import AppWrapper from "./AppWrapper";
import Beta from "./Beta";
import Loading from "../components/Loading";
import CommunityCard from "../components/CommunityCard";

const CommunitiesModule = ({ session, loading, data, error }) => {
  let index = 0;
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
          <h1 className="mt-4">Trending Communities</h1>
          <div className="d-flex flex-row flex-wrap">
            {data.map((community) => {
              index++;
              return (
                <CommunityCard
                  name={community.name}
                  category={community.category}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
        </AppWrapper>
      )}
    </>
  );
};

export default CommunitiesModule;
