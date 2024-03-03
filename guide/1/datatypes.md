# Data types 

There are two types of data types in Java, primitive types and reference types.

## Primitive data types

Primitive types are types predefined by the language, are named using reserved keywords, and don't share states with other primitive values.

There are eight primitive data types supported by the Java Programming Language, namely:
- `byte`: an 8-bit signed two's complement integer that has a range of -128 to 127
- `short`: an 8-bit signed two's complement integer that has a range of -32,768 to -32,767
- `int`: an 8-bit signed two's complement integer that has a range of -2³¹ to 2³¹ - 1
- `long`: an 8-bit signed two's complement integer that has a range of -2⁶³ to 2⁶³ - 1
- `float`: a single-precision 32-bit floating point, with an accuracy of 6 to 7 decimal digits.
- `double`: a double-precision 64-bit floating point, with an accuracy of 15 decimal digits.
- `boolean`: has only 2 possible values: `true` and `false`.
- `char`: a single 16-bit Unicode character.

::: tip
Normally, an integer literal is of type `int`, but it can be of type `long` if you suffix it with either `L` or `l`, but it is good practive to use `L` instead of `l` because it might be mistaken for a `1`.

A floating-point literal is of type `float` if you suffix it with either `F` or `f`. Otherwise, it's type is `double`, which you can optionally suffix with `D` or `d`. You can also use `E` or `e` for scientific notation.

Additionally, you can place underscores in numeric literals, however there are some limitations to this. 

You cannot place underscores:
- At the beginning or end of a number
- Adjacent to a decimal point in a floating point literal
- Before an F or L suffix

```java
int myInt = 100_000_000; // Correct

double myDouble = 69_.0020; // Incorrect

float myFloat = 1.000_F; // Incorrect

int anotherInt = 100_000_ // Incorrect

double anotherDouble = 69.420_400; // Correct
```
:::

## Reference data types

These data types refer to objects. Common examples include strings, arrays, classes and etc.

Do note that:
- A reference variable is created using the defined constructor of the class you want to create an instance of. These are used to store and access objects. An exception to this is the `String` class, which can be created using the String literal (`"`).
- These variables are declared to be of a specific type that cannot be changed.
- Class objects, and various types of array variables are under reference data types.
- The default value of any reference variable is null.
- A reference variable can be used to refer to any object of the declared type or any compatible type.

For example, say we have a `Square` class.
```java
public class Square {
	int size = 5;
	int area = 25;
}
```
Then, we create a new Square using that class.
```java
Square mySquare = new Square();
```
To access the size of this square, we use the `.` symbol to access the `size` property of `mySquare`.
```java
mySquare.size; // Value: 5.
```

## Type Casting

This is a Java feature that allows you to turn a value from one data type to another data type.

There are actually two types of Type Casting, Narrow and Wide.

Wide Type Casting is turning a smaller type into a larger type.
```java
int myInt = 9;

double myDouble = myInt; // doesn't need (double) myInt;
```
What's neat about this is that it is done automatically, and that you don't need to add `(double)` prefixed to `myInt` to change it into a `double`!

Narrow Type Casting is turning a larger type into a smaller type.
```java
double myDouble = 69.420;

int myInt = (int) myDouble;
```
Here, you need to prefix `(int)` to properly cast this `double` into an `int`. If you don't, you get a "Type mismatch: cannot convert from double to int" error.