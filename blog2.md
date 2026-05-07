# How `Pick` and `Omit` Keep TypeScript Code DRY

## Introduction

In TypeScript, `Pick` and `Omit` utility types help create smaller and reusable versions of a large interface. They prevent code duplication and keep code clean following the **DRY (Don't Repeat Yourself)** principle.

---

## Using `Pick`

`Pick` creates a new type by selecting specific properties from an existing interface.

```ts id="a1b2c3"
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">;
```

Here, `UserProfile` only contains the selected fields without rewriting them manually.

---

## Using `Omit`

`Omit` creates a new type by removing specific properties.

```ts id="d4e5f6"
type PublicUser = Omit<User, "password">;
```

This is useful when hiding sensitive data like passwords.

---

## Why It Keeps Code DRY

Without `Pick` and `Omit`, developers often rewrite similar interfaces multiple times. That increases maintenance work and bugs.

Using utility types:

* Reduces repetition
* Keeps types consistent
* Makes code easier to maintain

---

## Conclusion

`Pick` and `Omit` help create specialized slices of a master interface without duplicating code. They improve maintainability, readability, and strongly support the DRY principle in TypeScript projects.
