# Decentralized Identity Management Prototype

This project is a prototype for blockchain-based decentralized identity management in smart cities.

## Setup
```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network hardhat

## Usage

Deploy the contract

Register identities from CSV:

node scripts/registerIdentities.js


Verify an identity:

node scripts/verifyIdentity.js