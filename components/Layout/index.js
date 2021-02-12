import Header from "./Header/Header";
import Feed from "./Feed/Feed";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Feed />
      {children}
    </>
  );
};

export default Layout;
