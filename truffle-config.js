const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    private: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.testnet.dex.io`),
      network_id: 3603102,
      production: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.4",
      parser: "solcjs"
    }
  },
};
