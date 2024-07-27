require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const private_key = process.env.PRIVATE_KEYS;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`${private_key}`],
    },
  },
};
