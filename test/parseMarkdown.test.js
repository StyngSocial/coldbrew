import useMarkdown from "../util/useMarkdown";
import chai from "chai";

const expect = chai.expect;

describe("Parse Markdown - Post Body", () => {
  it("Returns String", () => {
    const string = useMarkdown("test");
    expect(string).to.be.a("string");
  });
});
