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


