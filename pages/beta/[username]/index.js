import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import axios from "axios";
import ProfileBanner from "../../../components/banners/ProfileBanner";
import FeedModule from "../../../modules/Feed.module.jsx";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function User() {
  const router = useRouter();
  const { username } = router.query;
  const { data, error } = useSWR(
    `/api/hive/following?sort=posts&account=${username}&limit=10`,
    fetcher
  );
  return (
    <>
      <Head>
        <title>Cold Brew | monetizing clout.</title>
      </Head>
      {data && (
        <FeedModule data={data} error={error}>
          <ProfileBanner username={username} />
        </FeedModule>
      )}
    </>
  );
}
