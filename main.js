//EX1
//A
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    let peirmeter = this.sides * this.sideLength;
    console.log(this.name + ` peirmeter: ` + peirmeter);
  }
}
let square = new Shape("square", 4, 5);
square.calcPerimeter();
let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
//B
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    let area = this.sideLength * 2;
    console.log(this.name + ` area: ` + area);
  }
}
let square2 = new Square(5);
square2.calcArea();
square2.calcPerimeter();
//EX2
//A
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  static PI = 3.14;
  area() {
    return this.radius ** 2 * Circle.PI;
  }
}
let circle = new Circle(3);
console.log(circle.area());
//B
class Account {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }
  static creat(owner) {
    return new Account(0, owner);
  }
}
let ido = Account.creat("ido");
console.log(ido.balance);
//EX3
//1
class Person {
  constructor(name) {
    this.name = name;
  }
  get personName() {
    return this.name.toUpperCase();
  }
}
let guy = new Person("joe");
console.log(guy.personName);
//2
class Product {
  constructor(name) {
    this.name = name;
    this.price = 0;
  }
  set setPrice(price) {
    this.price = Math.round((price + Number.EPSILON) * 100) / 100;
  }
}
let p = new Product("a");
p.setPrice = 5.55555;
//EX4
class AnotherCircle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  get diameter() {
    return this.#radius * 2;
  }
}
let c = new AnotherCircle(5);
console.log(c.diameter);
//EX5
class AnotherPerson {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  displayInfo() {
    return `${this.#firstName} ${this.#lastName} is ${this.#age} old`;
  }
  set age(age) {
    if (age > 0) {
      this.#age = age;
    } else {
      console.log("negativ");
    }
  }
}
const person1 = new AnotherPerson("John", "Doe", 30);
console.log(person1.displayInfo()); // "John Doe (30 years old)"
person1.age = -10; // Invalid age
console.log(person1.displayInfo()); // "John Doe (30 years old)"

//Ex6
class BankAccount {
  constructor(accountNumber, accountHolder, accountBalance) {
    this.accountBalance = accountBalance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }
  deposit(amount) {
    this.accountBalance += amount;
  }
  withdraw(amount) {
    this.accountBalance -= amount;
  }
  checkBalance() {
    return this.accountBalance;
  }
}
const myAccount = new BankAccount("123456", "John Doe", 100);
console.log(myAccount.checkBalance()); // 100
myAccount.deposit(50);
console.log(myAccount.checkBalance()); // 150
myAccount.withdraw(25);
console.log(myAccount.checkBalance()); // 125
//EX7
//a
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    return this.name + " is making a sound";
  }
}
class Dog extends Animal {
  constructor(name, species) {
    super(name, "Dog");
  }
  bark() {
    return this.name + ` is barking.`;
  }
}
class Cat extends Animal {
  constructor(name, species) {
    super(name, "Cat");
  }
  meow() {
    return this.name + ` is meowing.`;
  }
}
class Lion extends Animal {
  constructor(name, species) {
    super(name, "Lion");
  }
  roar() {
    return this.name + ` is roaring.`;
  }
}
