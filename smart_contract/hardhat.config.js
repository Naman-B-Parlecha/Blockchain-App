
// https://eth-sepolia.g.alchemy.com/v2/q2d87MgJJHk0tHkJ9FTHwI__wdsn3PwD

// const { network } = require('hardhat');

require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.0',
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/API_KEY",
      accounts: ["xyz"]
    }
  }
};
