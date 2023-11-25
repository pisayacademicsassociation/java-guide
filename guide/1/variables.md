# Variables

## What are variables, anyway? 

Variables are parts of a program that can store and represent data.

These are usually used as
- instance variables - variables tied to a class instance;
- local variables - variables declared in a method;
- arguments - variables passed to a method;
- return values - variables returned by a method.

For Java, each variable must have a type and unique name that identifies said variable.

```java
int count = 69;
```

## Variable naming conventions

Just like any other programming language, you can't use reserved keywords like `if` and `else` as variable names, and standard variable naming rules also apply:
- The valid characters to name a variable with are letters, digits, dollar signs and underscore characters, however
- You **cannot** have a number as the first character in your variable.

There are also the standard variable naming conventions:
- For naming variables, you don't use the "$" symbol.
- For naming variables, properties and methods, `camelCase` is used, while classes use `PascalCase`, however.
- Constant values are named in `UPPER_SNAKE_CASE`.

::: tip
Do note that **conventions** are different from **rules**! Breaking the variable naming rules will lead to an error, but breaking the variable naming conventions won't!
:::

If you want to declare a variable as a constant variable, use the `final` keyword before the type declaration, like so:
```java
final int count = 69;
```