# Java Guide notation

Throughout this guide, you will find certain notations in certain parts of code, explanations, etc. To help you understand the content within the guide, we will be going over some standard notations used in this guide.

## Classes

The notation `<Class>` means an instance of the `Class` class. For example, a snippet like `<Class>.main()` refers to the instance method `main()` of the `Class` class, while a snippet like `Class.main()` refers to the static method `main()` of the `Class` class.

Additionally, the `#` symbol can refer to an instance property or field of the class. From our example above, `Class#main` also refers to the **instance** method `main()`, and not the **static** method `main()`.

We can extend this notation further, such as using method signatures. For example, imagine a class `Overload` with two instance methods: `myMethod(int number)` and `myMethod(String text)`. When we want to refer to `myMethod(String text)`, we can write the notation as such: `Overload#myMethod(String)` or `<Overload>.myMethod(String)`. When writing method signatures, only the type is written, and the variable is excluded.

## Summary

For a quick recap, refer to the examples below.
- `<Class>.main()` and `Class#main()` refers to the **instance** method `main()` of the `Class` class.
- `Class.main()` refers to the **static** method `main()` of the `Class` class.
- `<Class>.property` and `Class#property` refers to the **instance** field `property` of the `Class` class.
- `Class.property` refers to the **static** field property of the `Class` class.
- `<Class>.main(String, int)` and `Class#main(String, int)` refers to the **instance** method `main()` of the `Class` class with the arguments being `(String, int)`.
- `Class.main(String, int)` refers to the **static** method `main()` of the `Class` class with the arguments being `(String, int)`.