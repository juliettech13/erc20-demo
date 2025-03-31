# ERC20 Smart Contract Demo

This project implements an ERC20 token using OpenZeppelin's battle-tested smart contract libraries. The token includes features like minting, burning, pausing, and permit functionality.

## Features

- ERC20 standard implementation
- Burnable tokens
- Pausable transfers
- Permit functionality for gasless approvals
- Ownable with access control

## Tutorial

Check out an easy 10 minute tutorial on YouTube here:

[![Guide](https://res.cloudinary.com/dacofvu8m/image/upload/v1743397163/CleanShot_2025-03-29_at_15.02.18_2x_wqtpuh.png)](https://youtu.be/sGs8tfB6xNQ)

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/juliettech13/erc20-demo.git
cd erc20-demo
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
INFURA_API_KEY=your-infura-api-key
PRIVATE_KEY=your-private-key
```

## Smart Contract Details

The project uses several OpenZeppelin contracts:

- `ERC20`: Base implementation of the ERC20 token standard
- `ERC20Burnable`: Adds token burning capability
- `ERC20Pausable`: Allows pausing all token transfers
- `ERC20Permit`: Enables gasless token approvals
- `Ownable`: Provides basic access control

These contracts are available on [OpenZeppelin's Contracts Library](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20).

## Local Development

1. Start a local Hardhat node:
```bash
npx hardhat node
```

2. Add your address as the owner and recipient of the ERC20 contract deployment in the `scripts/deploy.ts` file.

3. In a new terminal, deploy the contract to the local network:
```bash
npx hardhat run scripts/deploy.ts
```

## Testing

Run the test suite:
```bash
npx hardhat test
```

To get gas usage reports:
```bash
REPORT_GAS=true npx hardhat test
```

## Deployment to Sepolia Testnet

1. Ensure your `.env` file is properly configured with:
   - An Infura API key (get one at [Infura](https://infura.io))
   - Your wallet's private key
   - Make sure your wallet has some Sepolia ETH (get from a [faucet](https://www.infura.io/zh/faucet/sepolia))

2. Update the deployment script (`scripts/deploy.ts`) with your wallet address as the owner and recipient of the ERC20 contract deployment.

3. Deploy to Sepolia:
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

## Mainnet Deployment

The process is the same as Sepolia deployment, but:
1. Add mainnet configuration to `hardhat.config.ts`
2. Ensure you have real ETH for deployment
3. Use extreme caution and thorough testing before deploying to mainnet
4. Once contract is deployed, make sure to verify it on Etherscan and monitor it using [OpenZeppelin Defender](https://defender.openzeppelin.com/)

## Contract Verification

After deployment, verify your contract on Etherscan:
```bash
npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

## Security

- The contracts use OpenZeppelin's thoroughly audited implementations
- All contract functions have appropriate access controls
- The project uses Solidity 0.8.22 which includes built-in overflow checks

## License

This project is licensed under the MIT License.
