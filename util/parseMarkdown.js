export default function parseMarkdown(body) {
  const markdownExp = /!?\[([A-z]|\d)+\.[A-z]+\]\([A-z|\d|:|\/|.|-]+\)/g
  const urlExp = /https?:\/\/(www.)?([A-z|/d])*.[A-z]*(\/.*)/
  const htmlExp = /<(\/?)[A-z]+(.*)>/g;
  const headingTags = /#/g
  const removedMarkdown = body.replace(markdownExp, "");
  const removedHtml = removedMarkdown.replace(htmlExp, "")
  const removedUrl = removedHtml.replace(urlExp, "")
  const whitespace = removedUrl.replace(/\n/g, "")
  const tags = whitespace.replace(headingTags, "")
  const postLimit = tags.slice(0, 776)
  const index = postLimit.lastIndexOf(".")
  const postBody = postLimit.slice(0, index)
  return postBody
}