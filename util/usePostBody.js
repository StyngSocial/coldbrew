import { useState, useEffect } from "react";

const usePostBody = (postBody) => {
  const [imageUrl, setimageUrl] = useState();
  const [brew, setBrew] = useState([]);
  const shortenedBody = postBody.slice(0, 776);

  let postMarkdownRegEx = new RegExp(/!?\[.*\]\s?\(https?:\/\/.*\)/g);
  let urlRegEx = new RegExp(/https?:\/\/[a-zA-z0-9.\/]*/g);
  const matchedImages = [];

  const getImageUrl = () => {
    const foundUrls = shortenedBody.match(postMarkdownRegEx);
    if (foundUrls) {
      foundUrls.map((url) => {
        const matchedUrl = url.match(urlRegEx);
        const coldbrewUrl = matchedUrl[0];
        matchedImages.push(coldbrewUrl);
      });
      setimageUrl(matchedImages[0]);
    }
  };

  const brewBody = () => {
    const clean = shortenedBody.replaceAll(postMarkdownRegEx, "");
    const brew = clean.split("\n");

    setBrew(brew);
  };
  useEffect(() => {
    getImageUrl();
    brewBody();
  }, []);

  return { brew, imageUrl };
};

export default usePostBody;
