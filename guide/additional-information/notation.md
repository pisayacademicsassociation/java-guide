# Java Guide notation

Throughout this guide, you will find certain notations in certain parts of code, explanations, etc. To help you understand the content within the guide, we will be going over some standard notations used in this guide.

## Classes

The notation `<Class>` means an instance of the `Class` class. For example, a snippet like `<Class>.main()` refers to the instance method `main()` of the `Class` class, while a snippet like `Class.main()` refers to the static method `main()` of the `Class` class.

Additionally, the `#` symbol can refer to an instance field of the class. From our example above, `Class#main` also refers to the **instance** method `main()`, and not the **static** method `main()`.

We can extend this notation further, such as using method signatures. For example, imagine a class `Overload` with two instance methods: `myMethod(int number)` and `myMethod(String text)`. When we want to refer to `myMethod(String text)`, we can write the notation as such: `Overload#myMethod(String)` or `<Overload>.myMethod(String)`. When writing method signatures, only the type is written, and the variable is excluded.

For a quick recap, refer to the examples below.
- `<Class>.main()` and `Class#main()` refers to the **instance** method `main()` of the `Class` class.
- `Class.main()` refers to the **static** method `main()` of the `Class` class.
- `<Class>.property` and `Class#property` refers to the **instance** field `property` of the `Class` class.
- `Class.property` refers to the **static** field property of the `Class` class.
- `<Class>.main(String, int)` and `Class#main(String, int)` refers to the **instance** method `main()` of the `Class` class with the arguments being `(String, int)`.
- `Class.main(String, int)` refers to the **static** method `main()` of the `Class` class with the arguments being `(String, int)`.

### Section-declared code

It is important to note that this notation will only refer to methods or fields that are not explicitly declared in that section. Take a look at the snippet below as an example.
```java
Scanner input = new Scanner(System.in);

System.out.println("What is your name: ");
String name = input.nextLine();
```
Here, `input.nextLine()` refers to the method `input.nextLine()` as declared in the snippet, and not the static method `nextLine()` of the class `input`.

What about `input.next()`? Would that refer to the static method `next()` of the class `input`? The answer is no, since `input` is already "declared" as an instance of `Scanner` in the code snippet above. 

What if we want to refer to the static method `next()` of the class `input` instead, when we have this code snippet here? For special cases like these, the guide will add the `(E)` modifier to the end of the snippet. For example, `input.next() (E)` would refer to the static method `next()` of the class `input` instead, considering the snippet above.