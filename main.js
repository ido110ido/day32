// //EX1
// //A
// class Shape {
//   constructor(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
//   calcPerimeter() {
//     let peirmeter = this.sides * this.sideLength;
//     console.log(this.name + ` peirmeter: ` + peirmeter);
//   }
// }
// let square = new Shape("square", 4, 5);
// square.calcPerimeter();
// let triangle = new Shape("triangle", 3, 3);
// triangle.calcPerimeter();
// //B
// class Square extends Shape {
//   constructor(sideLength) {
//     super("square", 4, sideLength);
//   }
//   calcArea() {
//     let area = this.sideLength * 2;
//     console.log(this.name + ` area: ` + area);
//   }
// }
// let square2 = new Square(5);
// square2.calcArea();
// square2.calcPerimeter();
// //EX2
// //A
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   static PI = 3.14;
//   area() {
//     return this.radius ** 2 * Circle.PI;
//   }
// }
// let circle = new Circle(3);
// console.log(circle.area());
// //B
// class Account {
//   constructor(balance, owner) {
//     this.balance = balance;
//     this.owner = owner;
//   }
//   static creat(owner) {
//     return new Account(0, owner);
//   }
// }
// let ido = Account.creat("ido");
// console.log(ido.balance);
// //EX3
// //1
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   get personName() {
//     return this.name.toUpperCase();
//   }
// }
// let guy = new Person("joe");
// console.log(guy.personName);
// //2
// class Product {
//   constructor(name) {
//     this.name = name;
//     this.price = 0;
//   }
//   set setPrice(price) {
//     this.price = Math.round((price + Number.EPSILON) * 100) / 100;
//   }
// }
// let p = new Product("a");
// p.setPrice = 5.55555;
// //EX4
// class AnotherCircle {
//   #radius;
//   constructor(radius) {
//     this.#radius = radius;
//   }
//   get diameter() {
//     return this.#radius * 2;
//   }
// }
// let c = new AnotherCircle(5);
// console.log(c.diameter);
// //EX5
// class AnotherPerson {
//   #firstName;
//   #lastName;
//   #age;
//   constructor(firstName, lastName, age) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#age = age;
//   }
//   displayInfo() {
//     return `${this.#firstName} ${this.#lastName} is ${this.#age} old`;
//   }
//   set age(age) {
//     if (age > 0) {
//       this.#age = age;
//     } else {
//       console.log("negativ");
//     }
//   }
// }
// const person1 = new AnotherPerson("John", "Doe", 30);
// console.log(person1.displayInfo()); // "John Doe (30 years old)"
// person1.age = -10; // Invalid age
// console.log(person1.displayInfo()); // "John Doe (30 years old)"

// //Ex6
// class BankAccount {
//   constructor(accountNumber, accountHolder, accountBalance) {
//     this.accountBalance = accountBalance;
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//   }
//   deposit(amount) {
//     this.accountBalance += amount;
//   }
//   withdraw(amount) {
//     this.accountBalance -= amount;
//   }
//   checkBalance() {
//     return this.accountBalance;
//   }
// }
// const myAccount = new BankAccount("123456", "John Doe", 100);
// console.log(myAccount.checkBalance()); // 100
// myAccount.deposit(50);
// console.log(myAccount.checkBalance()); // 150
// myAccount.withdraw(25);
// console.log(myAccount.checkBalance()); // 125
// //EX7
// //a
// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     return this.name + " is making a sound";
//   }
// }
// class Dog extends Animal {
//   constructor(name, species) {
//     super(name, "Dog");
//   }
//   bark() {
//     return this.name + ` is barking.`;
//   }
// }
// class Cat extends Animal {
//   constructor(name, species) {
//     super(name, "Cat");
//   }
//   meow() {
//     return this.name + ` is meowing.`;
//   }
// }
// class Lion extends Animal {
//   constructor(name, species) {
//     super(name, "Lion");
//   }
//   roar() {
//     return this.name + ` is roaring.`;
//   }
// }
//Day 2
//EX1
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// class Student extends Person {
//   constructor(firstName, lastName, age, studentId) {
//     super(firstName, lastName, age);
//     this.studentId = studentId;
//   }
//   getDetails() {
//     return (
//       this.getFullName() +
//       " is " +
//       this.age +
//       " old and had a student id: " +
//       this.studentId
//     );
//   }
// }
// let s = new Student("ido", "atias", 23, 13456);
// console.log(s.getDetails());
// //EX2
// class BankAccount {
//   constructor() {
//     this._balance = 0;
//   }
//   deposit(toAdd) {
//     this._balance += toAdd;
//   }
//   set balance(balance) {
//     this._balance = balance;
//   }
//   get balance() {
//     return this._balance;
//   }
// }
// const account = new BankAccount();
// account.deposit(100);
// console.log(`Balance: ${account.balance}`);
// account.balance = 200;
// console.log(`Balance: ${account.balance}`);
// //EX3
// class Car {
//   #make;
//   #model;
//   #year;
//   constructor(make, model, year) {
//     this.#make = make;
//     this.#model = model;
//     this.#year = year;
//   }
//   get details() {
//     return `Maker: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`;
//   }
//   setDetails(make, model, year) {
//     this.#make = make;
//     this.#model = model;
//     this.#year = year;
//   }
// }
// const car = new Car("Toyota", "Camry", 2020);
// console.log(car.details); // Make: Toyota, Model: Camry, Year: 2020
// car.setDetails("Honda", "Civic", 2022);
// console.log(car.details); // Make: Honda, Model: Civic, Year: 2022
//EX4
// class BankAccount {
//   #balance;
//   #owner;
//   #transactions;
//   constructor(balance, owner) {
//     this.#balance = balance;
//     this.#owner = owner;
//     this.#transactions = [];
//   }
//   deposit(money) {
//     if (money >= 0) {
//       this.#balance += money;
//       this.#transactions.push(`deposit: ${money}`);
//     }
//   }
//   withdraw(money) {
//     if (this.#balance - money >= 0) {
//       this.#balance -= money;
//       this.#transactions.push(`withdraw: ${money}`);
//     }
//   }
//   getBalance() {
//     return this.#balance;
//   }
//   getTransactions() {
//     return this.#transactions;
//   }
// }
// let b = new BankAccount(500, "ido");
// b.withdraw(100);
// b.withdraw(200);
// b.withdraw(10);
// b.withdraw(1);
// console.log(b.getTransactions());
// //EX5
// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runnig at ${this.speed}`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} has stoped`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//   }
//   hide() {
//     console.log(`${this.name} is hiding`);
//   }
//   stop() {
//     super.stop();
//     this.hide();
//   }
// }
// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5); // White Rabbit runs with speed 5.
// rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
//EX6 //EX9
class Calculator {
  static add(...arg) {
    let arr = arg.join().split(",");
    return arr.reduce((sum, crr) => sum + parseInt(crr), 0);
  }
}
console.log(Calculator.add([1, [2, 3], 4, [5, 6]]));
// //EX7
// const formatString = (text, option = {}) => {
//   if ("uppercase" in option) {
//     if (option.uppercase === true) return text.toUpperCase();
//   }
//   if ("lowercase" in option) {
//     if (option.uppercase === true) return text.toLowerCase();
//   }
//   return text;
// };
// console.log(formatString("Hello World!")); // Output: Hello World!
// console.log(formatString("Hello World!", { uppercase: true })); // Output: HELLO WORLD!
// console.log(formatString("Hello World!", { lowercase: true })); // Output: hello world!
// //EX8
// class Employee {
//   constructor() {
//     if (this.constructor == Employee) {
//       throw new Error("an abstract employee");
//     }
//   }
//   getSalary() {
//     return this.salery;
//   }
//   getMonthlyBonus() {
//     console.log("an abstract employee, cant get montly bonus");
//   }
// }
// class Manager extends Employee {
//   constructor(salery) {
//     super();
//     this.salery = salery;
//   }
//   getMonthlyBonus() {
//     return this.salery * 0.1;
//   }
// }
// class Developer extends Employee {
//   constructor(salery) {
//     super();
//     this.salery = salery;
//   }
//   getMonthlyBonus() {
//     return this.salery * 0.05;
//   }
// }
// const manager = new Manager(50000);
// console.log(manager.getSalary()); // 50000
// console.log(manager.getMonthlyBonus()); // 5000
// const developer = new Developer(40000);
// console.log(developer.getSalary()); // 40000
// console.log(developer.getMonthlyBonus()); // 2000
// const emp = new Employee();
