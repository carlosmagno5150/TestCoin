class Transaction{
    constructor(fromAddress, toAddress, ammount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.ammount = ammount;
    }
    calculateHash(){
        ///signing TOD
    }
}
 module.exports = Transaction;