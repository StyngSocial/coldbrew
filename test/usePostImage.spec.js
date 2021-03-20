import usePostImage from "../util/usePostImage/index.js";
import chai from "chai";

const expect = chai.expect;

describe("Use Post Image", () => {
  it("Find Image returns an array", () => {
    let trigger =
      "Show me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)";
    let imageUrls = usePostImage(trigger);
    expect(imageUrls).to.be.a("array");
  });

  it("Finds all images posts in link", () => {
    let trigger =
      "Show me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)\n\nShow me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)\n\nShow me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)";
    const imageUrls = usePostImage(trigger);
    expect(imageUrls.length).to.equal(3);
  });

  it("Returns first URL found", () => {
    let trigger =
      "Show me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)\n\nShow me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)\n\nShow me the tokens!\n![img_5483.heic](https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic)";
    const imageUrl = usePostImage(trigger);
    expect(imageUrl[0]).to.equal(
      "https://images.ecency.com/DQmTQpQ2GGi1CVrqGSdRKoSyGns8e5wk5oGzQMLonb3qJnJ/img_5483.heic"
    );
  });
});
