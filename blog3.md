# How Generics Create Reusable and Type-Safe Code in TypeScript

## Introduction

Generics in TypeScript allow developers to write reusable functions and components while keeping strong type safety. Instead of creating separate logic for different data types, generics make code flexible and reusable.

---

## Why Generics are Useful

Without generics, functions may lose type safety by using `any`.

```ts id="g1h2i3"
function identity(value: any) {
  return value;
}
```

Here, TypeScript cannot guarantee the returned type.

With generics:

```ts id="j4k5l6"
function identity<T>(value: T): T {
  return value;
}
```

Now the function automatically keeps the correct type.

---

## Example with Different Data Types

```ts id="m7n8o9"
console.log(identity<string>("Hello"));
console.log(identity<number>(100));
```

The same function works for multiple data types while remaining strictly typed.

---

## Benefits of Generics

* Reusable code
* Strong type safety
* Better auto-completion and error checking
* Cleaner and more maintainable code

---

## Conclusion

Generics help build flexible and reusable TypeScript code without sacrificing type safety. They are essential for creating scalable applications and reusable components.
