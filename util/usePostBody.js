import { useState, useEffect } from "react";

/**
 * TODO This needs cleaned 🤢
 * @param {Object} postBody
 * @returns Formatted body
 */

const usePostBody = (postBody) => {
  const [images, setImages] = useState();
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
      setImages(matchedImages);
    }
  };

  const brewBody = () => {
    const clean = shortenedBody.replaceAll(postMarkdownRegEx, "");

    const splitLines = clean.split("\n");
    const brew = splitLines.filter((line) => line !== "");

    setBrew(brew);
  };
  useEffect(() => {
    getImageUrl();
    brewBody();
  }, []);

  return { brew, images };
};

export default usePostBody;
