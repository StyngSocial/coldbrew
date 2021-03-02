import axios from "axios";
import useSWR from "swr";
const fetcher = (url) => axios.get(url).then((res) => res.data);

const Trending = () => {
  const { data, error } = useSWR("/api/communities/", fetcher);
  if (error) {
    console.log(error);
    return <h1>error</h1>;
  } else {
    console.log(data);
    return <h1>success</h1>;
  }
};

export default Trending;
