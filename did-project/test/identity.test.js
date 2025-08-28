const { expect } = require("chai");

describe("DecentralizedIdentity", function () {
  it("Should register and retrieve identity", async function () {
    const Identity = await ethers.getContractFactory("DecentralizedIdentity");
    const identity = await Identity.deploy();
    await identity.deployed();

    await identity.registerIdentity("Alice", "Citizen", 30, "alice@mail.com", "12345");
    const result = await identity.getIdentity(await (await ethers.getSigners())[0].address);
    expect(result[0]).to.equal("Alice");
  });
});
