const { ethers } = require("hardhat");

async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactionsContract = await Transactions.deploy(); 
  await transactionsContract.deployed();
  console.log("Transactions contract deployed to:", transactionsContract.target);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
