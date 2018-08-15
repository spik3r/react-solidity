# react-solidity

Start the app:
- Install everything under Requirements & Setting up MetaMask
- run `truffle compile && truffle migrate`
- run npm start or yarn start
- accept the transaction in MetaMask

Requirements: 
- Ganache https://truffleframework.com/ganache
- truffle `npm install -g truffle`
- MetaMask https://metamask.io/
- npm
- possibly web3js `npm install web3-js`

Setting up MetaMask:
- download the MetaMask extension either for Chrome or Firefox (I like to use it in Chrome Canary so I can use a real one in Chrome without switching accounts)
- copy the MNEMONIC shown at the top of Ganache and ask MetaMask import account using seedphrase
    - default phrase: `candy maple cake sugar pudding cream honey rich smooth crumble sweet treat` **Don't** let the honey pot in on the Main net scam you.
- change Metamask to point to Custom RPC and the following URL: `HTTP://127.0.0.1:9545` (also shown at the top of metamask)
    
Gotchas:
- when re-deploying contracts remember to delete the build folder as truffle compile doesn't delete older versions

Source Code Taken from: https://truffleframework.com/boxes/react and modified slightly.