const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, byteface } = require('./complile');
const provider = new HDWalletProvider(
  // This seed phrase is from a test wallet.
  'bachelor elder stairs salon duck follow disease local kid tube strike code',
  'https://rinkeby.infura.io/v3/cbe42a9daef64613bff25927292e1666'
);
const web3 = new Web3(provider);
