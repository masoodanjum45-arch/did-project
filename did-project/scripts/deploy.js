async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const Identity = await ethers.getContractFactory("DecentralizedIdentity");
  const identity = await Identity.deploy();
  await identity.deployed();

  console.log("DecentralizedIdentity deployed to:", identity.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
