//For event listeners
//Import account.js...
import Account from './account.js';
import AccountController from './accountController.js'

var createAcctButton = document.getElementById("idCreateAccButton");
var accountNameInput = document.getElementById("idAccountName");
var initialDepositInput = document.getElementById("idAccInitialBalance");
var accountTypeInput = document.getElementById("idAccountTypes");

var depositInput = document.getElementById("idAccDepositBalance");
var depositButton =document.getElementById("idDeposit");
var withdrawlButton =document.getElementById("idWithdrawl");
var runningBalance = document.getElementById("idRunningTotal");
var withdrawlInput = document.getElementById("idAccWithdrawlBalance");
var accountTypeDepWithd = document.getElementById("idSelectDepWithd");
var availableAccountsDiv = document.getElementById("idAvailableAccounts");
var totalAccountbalance = document.getElementById("idTotalAccountBalance");
var highestAccountBalance = document.getElementById("idHighestAccountBalance");
var lowestAccountBalance = document.getElementById("idLowestAccountBalance");
var buttonAccountInfo = document.getElementById("buttonAccountInfo");

var account;   //define account CLASS

//Created an object of AccounController where I will store all Account objects
var accountController = new AccountController();

//This is for "Create Account" Button
createAcctButton.addEventListener("click", () => {
   console.log("Create Account button is clicked");
   //Pass the value of Account Name and Initial Deposit from HTML to the Account Constructor
   //convert to number before passing it to Account
   var initialDepositNum = parseInt(initialDepositInput.value);
   account = new Account(accountNameInput.value, initialDepositNum, accountTypeInput.value);
   console.log("Account Name: ", account.accountName);
   console.log("Initial Deposit: ", account.currentBalance);
   //Updating the running balance!
   runningBalance.value = account.currentBalance;
   //**storing ALL accounts to accountcontroller***/
   accountController.addAccount(account);
   availableAccountsDiv.innerHTML = " "; //clears value
   const accArray = accountController.getAccounts();  //get all accounts from accounts array
   let allAccountsString = "";
   accArray.forEach(acc => {
    allAccountsString = allAccountsString + '<br>' + accountController.printAccount(acc);
   })
   availableAccountsDiv.innerHTML = allAccountsString;
});

//This is for "Deposit" Button
depositButton.addEventListener("click", () => {
    var depositNum = parseInt(depositInput.value);
    account.deposit(depositNum);   //passing input value of
    //html input element INTO the .deposit METHOD of account CLASS.
    console.log("Current Balance: ", account.currentBalance); 
    runningBalance.value = account.currentBalance;
});

//This is for "Withdrawl" Button
withdrawlButton.addEventListener("click", () => {
    var withdrawlNum = parseInt(withdrawlInput.value);
    account.withdraw(withdrawlNum);
    console.log("Current Balance: ", account.currentBalance); 
    runningBalance.value = account.currentBalance;
});

// this is for changing acct type before dep/withd, "change "

accountTypeDepWithd.addEventListener("change", (event) => {
    if(event.target.value) {
        let selectedAccount = accountController.changeAccount(event.target.value);
        account = selectedAccount; //Change account only when user changes the account type in dropdown
        console.log(account);
        if(account.currentBalance) {
            runningBalance.value = account.currentBalance;
        }
    }
});

buttonAccountInfo.addEventListener("click", () => {
    //Getting all information about account on button click
    totalAccountbalance.innerHTML = accountController.getTotal();
    highestAccountBalance.innerHTML = accountController.getHighestBalance();
    lowestAccountBalance.innerHTML = accountController.getLowestBalance();
})



