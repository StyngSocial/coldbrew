import styles from "./Feed.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Tweet from "../Tweet/Tweet";

import pio from "../../public/images/pio.jpeg";
import bbc from "../../public/images/bennyblockchain.jpg";
import silver from "../../public/tweets/logo.png";
import styng from "../../public/tweets/avatar black.png";

const Feed = () => {
  return (
    <>
      <Tweet
        name="₿enny ₿lockchain"
        username="BenSchroth"
        avatar={bbc}
        tweet="It is irresponsible to refute that voices have been suppressed on major platforms. I hesitate to say censored because there are limitless channels that people can express their opinions."
      />
      <Tweet
        name="Department of Denfense"
        username="DoD"
        avatar={silver}
        tweet="Local horny man spotted in Alliance, OH. Last seen wearing a band aid on his swipe thumb. SEEK SHELTER"
        media={pio}
      />
      <Tweet
        name="monetizing clout."
        username="StyngSocial"
        avatar={styng}
        tweet="Last April, Twitter announced they were going under R&D for a decentralized protocol for twitter. The organization(?) released a paper last week. Going to give it a read and follow with a review. #karma"
      />
    </>
  );
};

export default Feed;
