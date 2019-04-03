
const Blockchain = require("./blockchain");
const Transaction = require("./transaction");

let myCoin = new Blockchain();
myCoin.createTransaction(new Transaction('addr1', 'addr2', 100));
myCoin.createTransaction(new Transaction('addr2', 'addr1', 50));

console.log('\nStarting the miner... ');
myCoin.minePendingTransactions('minerAddr');

console.log('\nBalance of Miner is', myCoin.getBalanceOfAddress('minerAddr'));


console.log('\nStarting the miner... ');
myCoin.minePendingTransactions('minerAddr');


console.log('\nBalance of Miner is', myCoin.getBalanceOfAddress('minerAddr'));
