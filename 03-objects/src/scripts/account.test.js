import Account from './account.js'


test('Does it create an object of Account?', () => {
    let accountObject = new Account('Derek', 500)       //This line create an object of Account class and initializes the properties
    expect(accountObject.accountName).toBe("Derek");
    expect(accountObject.currentBalance).toBe(500);
});
  
test('Does it deposit the money in Account?', () => {
    let accountObject = new Account('Derek', 500);
    accountObject.deposit(111);
    expect(accountObject.currentBalance).toBe(611);
    expect(accountObject.currentBalance).not.toBe(612);
});

test('Does it withdrawl the money from Account?', () => {
    let accountObject = new Account('Derek', 500);
    accountObject.withdraw(150);
    expect(accountObject.currentBalance).toBe(350);
    expect(accountObject.currentBalance).not.toBe(612);
    accountObject.withdraw(500);
    expect(accountObject.currentBalance).toBe(350);
});

test('Does SHOW contian a value?', () => {
    let accountObject = new Account('Derek', 500);
    expect(accountObject.show()).toBe(500);
});
