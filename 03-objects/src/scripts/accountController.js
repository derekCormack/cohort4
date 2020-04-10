class AccountController {

    accounts = [];
    
    constructor() {
    
    }

    addAccount(account) {            //typescript would be useful here.
        this.accounts.push(account);

        this.accounts.forEach(acc => {
            console.log("Account Name: ", acc.accountName, "Account Balance: ", acc.currentBalance, "Account Type: ", acc.accountType);
        })
    }


}

export default AccountController;