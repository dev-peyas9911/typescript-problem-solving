```markdown
# TypeScript Practice Solutions & Blog Collection

A comprehensive collection of TypeScript practice problems with solutions, covering fundamental concepts like type safety, generics, utility types, and OOP principles. Includes 4 in-depth technical blog posts on advanced TypeScript topics.

## 📁 Repository Structure


```text
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

## 🎯 Problems Solved

### Problem 1: Filter Even Numbers
**Function:** `filterEvenNumbers(arr: number[]): number[]`

Filters an array of numbers and returns only the even numbers.

```typescript
filterEvenNumbers([1, 2, 3, 4, 5, 6]) // [2, 4, 6]
```

### Problem 2: Reverse String
**Function:** `reverseString(str: string): string`

Reverses a string using array methods.

```typescript
reverseString("typescript") // "tpircsepyt"
```

### Problem 3: Union Type with Type Guard
**Type:** `StringOrNumber = string | number`
**Function:** `checkType(value: StringOrNumber): "String" | "Number"`

Uses `typeof` type guard to check if input is string or number.

```typescript
checkType("Hello") // "String"
checkType(42)      // "Number"
```

### Problem 4: Generic Property Access
**Function:** `getProperty<T, K extends keyof T>(obj: T, key: K): T[K]`

Generic function with constraints ensuring the key exists on the object.

```typescript
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name") // "John Doe"
```

### Problem 5: Interface Extension
**Interface:** `Book` (title, author, publishedYear)
**Function:** `toggleReadStatus(book: Book): Book & { isRead: boolean }`

Returns new object with added `isRead` property (default: `true`).

```typescript
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook)
// { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }
```

### Problem 6: Class Inheritance
**Class:** `Person` (name, age)
**Subclass:** `Student` (extends Person with grade)
**Method:** `getDetails(): string`

Demonstrates OOP inheritance and method overriding.

```typescript
const student = new Student("Alice", 20, "A");
student.getDetails() // "Name: Alice, Age: 20, Grade: A"
```

### Problem 7: Array Intersection
**Function:** `getIntersection(arr1: number[], arr2: number[]): number[]`

Returns elements present in both arrays using Set for O(n) complexity.

```typescript
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]) // [3, 4, 5]
```

## 📝 Blog Posts

### Blog 1: `any` vs `unknown` - The Type Safety Hole
**Topics Covered:**
- Why `any` disables TypeScript's type checking
- How `unknown` forces validation before usage
- Type narrowing with `typeof`, `in`, and custom type guards
- Real-world example: Parsing API responses safely
- Best practices and when `any` is acceptable

### Blog 2: Pick and Omit - Keeping Your Code DRY
**Topics Covered:**
- How `Pick<T, K>` creates subsets of interfaces
- How `Omit<T, K>` excludes specific properties
- Preventing interface duplication
- Real-world examples with API responses and database models
- Composing utility types for complex transformations

### Blog 3: Generics - Building Reusable, Type-Safe Components
**Topics Covered:**
- Why generics eliminate `any` while maintaining flexibility
- Generic functions, interfaces, and classes
- Constraints with `extends` keyword
- Real-world examples: Repository pattern, API clients
- Default generic parameters

### Blog 4: Four Pillars of OOP in TypeScript
**Topics Covered:**
- **Inheritance**: Code reuse through `extends`
- **Polymorphism**: Method overriding and interfaces
- **Abstraction**: Abstract classes and interfaces
- **Encapsulation**: `private`, `protected`, `public` modifiers
- Managing complexity in large-scale TypeScript projects

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- TypeScript (v4 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/typescript-practice.git

# Navigate to project directory
cd typescript-practice

# Install TypeScript globally (optional)
npm install -g typescript

# Compile TypeScript files
tsc problems/*.ts --outDir dist/

# Run compiled files
node dist/problem1-filterEvenNumbers.js
```

### Run All Examples

```bash
# Using ts-node (recommended for development)
npx ts-node problems/problem1-filterEvenNumbers.ts
```

## 🛠️ Technologies Used

- **TypeScript** - Typed JavaScript superset
- **Node.js** - JavaScript runtime

## 📚 Key TypeScript Concepts Covered

✅ Union Types  
✅ Type Guards  
✅ Generic Functions with Constraints  
✅ Interface Extension  
✅ Class Inheritance  
✅ Utility Types (`Pick`, `Omit`)  
✅ Type Narrowing  
✅ OOP Principles  
✅ Array Methods (`filter`, `reverse`, `includes`)  

## 🎓 Learning Outcomes

After reviewing this repository, you'll understand:

1. How to write type-safe functions with proper constraints
2. The difference between `any` and `unknown` for handling unpredictable data
3. How generics enable reusable components without sacrificing type safety
4. Using utility types to create specialized interfaces without duplication
5. Implementing OOP principles in TypeScript for scalable applications

## 🤝 Contributing

Found a bug or want to improve a solution? Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b improvement/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin improvement/amazing-feature`)
5. Open a Pull Request

## 📖 Related Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Advanced TypeScript Patterns](https://github.com/type-challenges/type-challenges)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**
- GitHub: [@Peyas Barmon](https://github.com/dev-peyas9911)
- LinkedIn: [Peyas Barmon](https://www.linkedin.com/in/peyas-barmon/)

## ⭐ Show Your Support

If this repository helped you, please give it a star ⭐ and share it with others!

---

**Happy Coding!** 🚀
```