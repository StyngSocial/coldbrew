import AppWrapper from "./AppWrapper";
import Beta from "./Beta";
import Feed from "../components/Feed.jsx";
import Loading from "../components/Loading";

const FeedModule = ({ data, error, children }) => {
  return (
    <>
      <AppWrapper>
        {children}
        <Feed posts={data} />
      </AppWrapper>
    </>
  );
};

export default FeedModule;
