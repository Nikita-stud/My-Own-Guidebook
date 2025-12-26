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

//UML = Unified Modelling Language, have both structural and behavioural diagrams, they are to help understand OOP
//Basically way of visualizing a software program
//Structural UML diagrams- Class diagram,Package diagram,Object diagram,Component diagram,Composite structure diagram,Deployment diagram
//Behavioural UML diagrams- Use-case diagram,Activity diagram,Sequence diagram, State diagram, Communication diagram, Interaction overview diagram, Timing diagram
// https://lucid.app/users/login#/login
// https://app.diagrams.net/

- //private info
+ //public info
# //protected info
line // association representation
1 * // number of instances of one class linked to one instance of other class
{} // constrains/ restrictions
-<> //filled = strong ownership between A whole and B part 
-<> // hollow = weak aggregation
<- // inheritance, specialized version of another car<- honda

//Inheritance allows full access to all the private and public data
//Aggregation allows only public parts of the class