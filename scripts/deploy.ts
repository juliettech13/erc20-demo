import { ethers } from "hardhat";

async function main() {
  console.log("Getting MyToken...");
  const MyToken = await ethers.getContractFactory("MyToken");

  // TO-DO: Write your own address as the owner
  console.log("Deploying MyToken...");
  const token = await MyToken.deploy(
    "0x7ad9...",
    "0x7ad91Bf..."
  );

  await token.deployed();

  console.log(
    `MyToken is deployed to https://sepolia.etherscan.io/address/${token.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
