const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config(); // if use .env file for enviroment variables

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    bsctest: {
      provider: () => new HDWalletProvider(process.env.PK, `https://data-seed-prebsc-1-s2.binance.org:8545/`),
      network_id: 97,
      gas: 8000000,
      confirmations: 2,
      timeoutBlocks: 50,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  }
};
