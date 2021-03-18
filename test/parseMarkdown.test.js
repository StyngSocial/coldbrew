import parseMarkdown from "../util/parseMarkdown";
import chai from "chai";

const expect = chai.expect;

describe("Parse Markdown - Post Body", () => {
  it("Returns String", () => {
    const string = parseMarkdown("test");
    expect(string).to.be.a("string");
  });
});
