const fs = require("fs");
const csv = require("csv-parser");
const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const Identity = await ethers.getContractFactory("DecentralizedIdentity");
  const identity = Identity.attach(contractAddress);

  const signers = await ethers.getSigners();

  const results = [];
  fs.createReadStream("data/identities.csv")
    .pipe(csv())
    .on("data", (row) => results.push(row))
    .on("end", async () => {
      for (let i = 0; i < results.length && i < signers.length; i++) {
        const row = results[i];
        const signer = signers[i];

        const tx = await identity
          .connect(signer)
          .registerIdentity(row.name, row.role, parseInt(row.age), row.email, row.phone);
        await tx.wait();
        console.log(`✅ Registered ${row.name} with account ${signer.address}`);
      }
    });
}

main();
