//For event listeners
//Import account.js...
import Account from './account.js';
import AccountController from './accountController.js'

var createAcctButton = document.getElementById("idCreateAccButton");
var accountNameInput = document.getElementById("idAccountName");
var initialDepositInput = document.getElementById("idAccInitialBalance");
var accountTypeInput = document.getElementById("idAccountTypes");

var depositInput = document.getElementById("idAccDepositBalance");
var depositButton = document.getElementById("idDeposit");
var withdrawlButton = document.getElementById("idWithdrawl");
var runningBalance = document.getElementById("idRunningTotal");
var withdrawlInput = document.getElementById("idAccWithdrawlBalance");
var accountTypeDepWithd = document.getElementById("idSelectDepWithd");
var availableAccountsDiv = document.getElementById("idAvailableAccounts");
var totalAccountbalance = document.getElementById("idTotalAccountBalance");
var highestAccountBalance = document.getElementById("idHighestAccountBalance");
var lowestAccountBalance = document.getElementById("idLowestAccountBalance");
var buttonAccountInfo = document.getElementById("buttonAccountInfo");
var deleteAccountButton = document.getElementById("idDeleteAccount");



var account;   //define account CLASS
var accTypes = ["chequing1", "chequing2", "savings1", "savings2"];

//Created an object of AccounController where I will store all Account objects
var accountController = new AccountController();
bindOptionsToSelect();
//This is for "Create Account" Button
createAcctButton.addEventListener("click", () => {
    console.log("Create Account button is clicked");
    //Pass the value of Account Name and Initial Deposit from HTML to the Account Constructor
    //convert to number before passing it to Account
    var initialDepositNum = parseInt(initialDepositInput.value);
    account = new Account(accountNameInput.value, initialDepositNum, accountTypeInput.value);
                            //instantiate into the array.
    console.log("Account Name: ", account.accountName);
    console.log("Initial Deposit: ", account.currentBalance);
    //Updating the running balance!
    runningBalance.value = account.currentBalance;
    //**storing ALL accounts to accountcontroller***/
    accountController.addAccount(account);
    updateBalancesOnUI();
});

//This is for "Deposit" Button
depositButton.addEventListener("click", () => {
    var depositNum = parseInt(depositInput.value);
    account.deposit(depositNum);   //passing input value of
    //html input element INTO the .deposit METHOD of account CLASS.
    console.log("Current Balance: ", account.currentBalance);
    runningBalance.value = account.currentBalance;
    updateBalancesOnUI();
});

//This is for "Withdrawl" Button
withdrawlButton.addEventListener("click", () => {
    var withdrawlNum = parseInt(withdrawlInput.value);
    account.withdraw(withdrawlNum);
    console.log("Current Balance: ", account.currentBalance);
    runningBalance.value = account.currentBalance;
    updateBalancesOnUI();
});

function updateBalancesOnUI() {
    availableAccountsDiv.innerHTML = " "; //clears value
    const accArray = accountController.getAccounts();  //get all accounts from accounts array
    let allAccountsString = "";
    accArray.forEach(acc => {
        allAccountsString = allAccountsString + '<br>' + accountController.printAccount(acc);
    })
    availableAccountsDiv.innerHTML = allAccountsString;
}
// this is for changing acct type before dep/withd, "change "

accountTypeDepWithd.addEventListener("change", (event) => {
    if (event.target.value) {
        let selectedAccount = accountController.changeAccount(event.target.value);
        if (selectedAccount) {
            account = selectedAccount; //Change account only when user changes the account type in dropdown
            console.log(account);
            if (account.currentBalance) {
                runningBalance.value = account.currentBalance;
            }
        }
    }
});

function bindOptionsToSelect() {
    accountTypeDepWithd.innerHTML = undefined;  //deleting values in pull down (from array)
    for (let i = 0; i < accTypes.length; i++) {
        var opt = document.createElement("option");
        accountTypeDepWithd.innerHTML += '<option id="' + accTypes[i] + '">' + accTypes[i] + '</option>';  //<option id="chequing1">chequing1</option>
    }
}

buttonAccountInfo.addEventListener("click", () => {
    //Getting all information about account on button click
    totalAccountbalance.value = accountController.getTotal();
    highestAccountBalance.value = accountController.getHighestBalance();
    lowestAccountBalance.value = accountController.getLowestBalance();
})


//Deleting the account
deleteAccountButton.addEventListener("click", (event) => {
    //We need to delete the account type when user selects the account and clicks on Delete Account button
    const index = accountTypeDepWithd.selectedIndex;
    if (index > -1) {  //looking for valid index
        let deletedAcc = accTypes.splice(index, 1);
        accountController.removeAccount(deletedAcc);// returns deleted value, pass to removeAccount method
        updateBalancesOnUI();//updates balance for UI
    }
    bindOptionsToSelect();
});