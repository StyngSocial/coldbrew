import AppWrapper from "./AppWrapper";
import Feed from "../components/Feed.jsx";
import Loading from "../components/Loading";
// import FeedBanner from "../components/banners/FeedBanner.jsx";
const FeedModule = ({ data, banner, loading, error, children }) => {
  return (
    <>
      <AppWrapper>
        {/* {banner && <FeedBanner title={banner.title} about={banner.about} />} */}
        {children}
        {loading && <Loading />}
        {!loading && <Feed posts={data} />}
      </AppWrapper>
    </>
  );
};

export default FeedModule;
