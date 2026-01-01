//OOP = Object-Oriented Programming are objects we dont need to know anything about, they are abstract
//Only essential attributes, only allow get and set and no modify
//Build on class by extending the class
class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
