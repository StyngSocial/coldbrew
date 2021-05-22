import marked from "marked";
import sanitizeHtml from "sanitize-html";

export default function useMarkdown(body) {
  const md = body;
  const tokens = marked.lexer(md);
  const html = marked.parser(tokens);
  const clean = sanitizeHtml(html);
  return clean;
}
