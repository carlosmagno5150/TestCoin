
const Blockchain = require("./blockchain");
const Transaction = require("./transaction");

let myCoin = new Blockchain();
myCoin.createTransaction(new Transaction('addr1', 'addr2', 100));
myCoin.createTransaction(new Transaction('addr2', 'addr1', 50));

console.log('\nStarting the miner... ');
myCoin.minePendingTransactions('minerAddr');

console.log('\nBalance of Addr1 is', myCoin.getBalanceOfAddress('addr1'));
console.log('Balance of Addr2 is', myCoin.getBalanceOfAddress('addr2'));
console.log('Balance of Miner is', myCoin.getBalanceOfAddress('minerAddr'));


console.log('\nStarting the miner... ');
myCoin.minePendingTransactions('minerAddr');

console.log('\nBalance of Addr1 is', myCoin.getBalanceOfAddress('addr1'));
console.log('Balance of Addr2 is', myCoin.getBalanceOfAddress('addr2'));
console.log('Balance of Miner is', myCoin.getBalanceOfAddress('minerAddr'));
