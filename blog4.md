# How the Four Pillars of OOP Reduce Complexity in TypeScript

## Introduction

Object-Oriented Programming (OOP) helps developers organize and manage complex applications. In TypeScript, the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—make code more reusable, maintainable, and scalable.

---

## 1. Inheritance

Inheritance allows one class to reuse properties and methods from another class.

```ts id="oop1"
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {}

const dog = new Dog();
dog.speak();
```

This reduces duplicate code and improves reusability.

---

## 2. Polymorphism

Polymorphism allows the same method to behave differently in different classes.

```ts id="oop2"
class Animal {
  speak() {
    console.log("Sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}
```

This makes applications flexible and easier to extend.

---

## 3. Abstraction

Abstraction hides implementation details and exposes only essential functionality.

```ts id="oop3"
abstract class Payment {
  abstract pay(): void;
}
```

It simplifies complex systems by focusing only on required behavior.

---

## 4. Encapsulation

Encapsulation protects data from direct access.

```ts id="oop4"
class User {
  private password = "12345";
}
```

This improves security and prevents accidental changes.

---

## Conclusion

The four pillars of OOP help TypeScript developers write clean, modular, and scalable applications. They reduce complexity by improving code organization, reusability, and maintainability in large-scale projects.
