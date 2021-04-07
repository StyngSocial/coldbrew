import AppWrapper from "./AppWrapper";
import Beta from "./Beta";
import Feed from "../components/Feed.jsx";
import Loading from "../components/Loading";
import FeedBanner from "../components/banners/FeedBanner";
const FeedModule = ({ data, banner, error, children }) => {
  return (
    <>
      <AppWrapper>
        <FeedBanner title={banner.title} about={banner.about} />
        {children}
        <Feed posts={data} />
      </AppWrapper>
    </>
  );
};

export default FeedModule;
