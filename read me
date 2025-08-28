In a terminal, cd into the project root (where package.json is) and install:

npm install

2) Compile the contracts

npx hardhat compile

3) Start a local blockchain

Open Terminal A and run:

npx hardhat node

Leave this running. It will print 20 funded accounts.

4) Deploy the contract (to the local node)

Open Terminal B (still in the project folder) and run:

npx hardhat run scripts/deploy.js --network localhost

You should see something like:

Deploying contracts with: 0x...
DecentralizedIdentity deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

5) Register sample identities from CSV

This script reads data/identities.csv and registers up to one identity per signer:

npx hardhat run scripts/registerIdentities.js --network localhost

Expected output: several lines like:
✅ Registered Sylvia Martin with account 0x...

6) Verify one of the registrations

npx hardhat run scripts/verifyIdentity.js --network localhost

Expected output:

✅ Identity for 0x...: { name: '...', role: '...', age: '...', email: '...', phone: '...' }

7) Run the unit test (optional)

npx hardhat test
