class Account {

    //properties of Account class...
    accountName = '';
    currentBalance = 0;
    accountType = '';

    //Initializing a constructor
    constructor(accName, startingBalance, accType) {
        this.accountName = accName;
        this.currentBalance = startingBalance;
        this.accountType = accType;
    }

    deposit(value) {
        this.currentBalance = this.currentBalance + value;
    }

    withdraw(value) {
        //Make sure you do not withdraw the money greater than your current balance
        //eg. if you have $500 in account, you can't withdraw $1000!
        if(value < this.currentBalance) {
            this.currentBalance = this.currentBalance - value;
        }
    }

    show() {
        return this.currentBalance;
    }
    
}


export default Account;