const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Identity = await ethers.getContractFactory("DecentralizedIdentity");
  const identity = Identity.attach(contractAddress);

  // choose the signer you want to check
  const signers = await ethers.getSigners();
  const target = signers[1]; // index 1 matches the 2nd registered identity

  try {
    const result = await identity.getIdentity(target.address);
    console.log(`✅ Identity for ${target.address}:`, {
      name: result[0],
      role: result[1],
      age: result[2].toString(),
      email: result[3],
      phone: result[4],
    });
  } catch {
    console.log(`❌ No identity found for ${target.address}`);
  }
}

main();
