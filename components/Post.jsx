import Image from "next/image";
import axios from "axios";
import useSWR from "swr";
import { Container, Row } from "react-bootstrap";

import useMarkddown from "../util/useMarkdown";
import { Observer } from "../util/constants";

const fetcher = (url) => axios.get(url).then((r) => r.data);

const Post = ({ post }) => {
  let title = post.title;
  let body = useMarkddown(post.body);
  const date = post.created.slice(0, 10);
  const { data, error } = useSWR(
    `/api/hive/profile?account=${post.author}&observer=${Observer}`,
    fetcher
  );

  return (
    <>
      <Container fluid className={`p-0 m-0`}>
        <Row className="pt-3 m-0 align-items-center justify-content-start">
          <div className="d-flex align-items-center">
            <Image
              src={`https://images.hive.blog/u/${post.author}/avatar`}
              width={30}
              height={30}
              className="rounded-circle d-inline"
            />
            {data && (
              <p className="my-0" style={{ paddingLeft: "10px" }}>
                <strong>{data.metadata.profile.name}</strong>
              </p>
            )}
            <p className="text-muted m-0">
              &nbsp;@{post.author} · {date}
            </p>
          </div>
        </Row>
        <Row className="m-0 d-block">
          <h3 className="border-bottom d-block py-3 px-0 d-inline">{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Row>
      </Container>
    </>
  );
};

export default Post;
