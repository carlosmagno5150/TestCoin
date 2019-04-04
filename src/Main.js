
const Blockchain = require("./blockchain");
const Transaction = require("./transaction");
const EC = require("elliptic").ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('80d89e2d19e5c56052ba45d50d04f1d2039f7b7e54ac90291bcafe429695be51');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\nStarting the miner... ');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Addr1 is', myCoin.getBalanceOfAddress('addr1'));
console.log('Balance of Addr2 is', myCoin.getBalanceOfAddress('addr2'));
console.log('Balance of Miner is', myCoin.getBalanceOfAddress(myWalletAddress));


console.log('\nStarting the miner... ');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Addr1 is', myCoin.getBalanceOfAddress('addr1'));
console.log('Balance of Addr2 is', myCoin.getBalanceOfAddress('addr2'));
console.log('Balance of Miner is', myCoin.getBalanceOfAddress(myWalletAddress));
