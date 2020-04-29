class AccountController {

    accounts = [];

    constructor() { }

    addAccount(account) {            //typescript would be useful here.
        this.accounts.push(account);

        this.accounts.forEach(acc => {
            console.log("Account Name: ", acc.accountName, "Account Balance: ", acc.currentBalance, "Account Type: ", acc.accountType);
        })
    }

    changeAccount(accountType) {
        let account = undefined;
        this.accounts.forEach(acc => {
            if(accountType === acc.accountType) {
                account = acc;
            }
        })
        return account;
    }

    getAccounts() {
        return this.accounts;
    }

    printAccount(acc) {
        return "Account Name: " + acc.accountName + "Account Balance: " + acc.currentBalance + "Account Type: " + acc.accountType;
    }
// display account info button
    getTotal() {
        let total = 0;
        this.accounts.forEach(acc => {
            total = total + parseInt(acc.currentBalance)
        })
        return total;
    }

    getHighestBalance() {
        let highest = 0;
        this.accounts.forEach(acc => {
           if(parseInt(acc.currentBalance) > highest) {
               highest = parseInt(acc.currentBalance);
           }
        })
        return highest;
    }

    getLowestBalance() {
        let lowest = 0;
        //Initializing lowest account balance with very first account balance
        lowest = parseInt(this.accounts[0].currentBalance);
        this.accounts.forEach(acc => {
           if(parseInt(acc.currentBalance) < lowest) {
               lowest = parseInt(acc.currentBalance);
           }
        })
        return lowest;
    }

    removeAccount(accType) {
        //We have to remove the account object from this.accounts array based on the the deleted account type
        for(let i = 0; i < this.accounts.length; i++) {
            if(this.accounts[i].accountType === accType.toString()) {
                let deletedAccount = this.accounts.splice(i, 1);
                console.log("Deleted Account: ", deletedAccount);
            }
        }
    }

}

export default AccountController;