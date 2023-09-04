const hre = require("hardhat");
const ethers = require("ethers");
require('dotenv').config();

async function main() {
  const EmitWinner = await hre.ethers.getContractFactory('EmitWinner');
  const emitWinner = await EmitWinner.deploy();
  const eventWinnerContractAddress = "0xDe20E9499df78195DC1348c52a9acDC4F08F8e66";

  await emitWinner.deployed();

    // Call the "callAttempt" method of Winner Contract through the interface inside our Contract
  const result = await emitWinner.callAttempt(eventWinnerContractAddress);
  console.log(result);
  console.log(`Contract deployed to ${emitWinner.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Contract Address: 0x229c27a42F1Df9ca1d012674A9ea8B07c1aD9988