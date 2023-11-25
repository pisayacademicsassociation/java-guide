# Input and Output

## Output

There are three ways to output to the console in Java, namely:
- `print()` - This prints text to the console.
- `println()` - This prints text to the console, and creates a new line.
- `printf()` - This allows you to print your formatted strings to the console, using various formatting specifiers.

There are also escape sequences you can use in your strings, namely:
- `\b` - Backspace, moves your cursor one space to the left.
- `\t` - Tab, moves the cursor to the next tab stop.
- `\n` - Newline, moves the cursor to the beginning of the next line.
- `\r` - Carriage return, moves the cursor to the beginning of the current line.
- `\"` - Double quotation mark, displays a double quotation mark.
- `\'` - Single quotation mark, displays a single quotation mark.
- `\\` - Backslash, displays a backslash.

::: tip
Ever wanted to know why displaying a double quotation mark, single quotation mark or backslash are in an escape sequence? This is because all three of these symbols are used in Java as identifiers. The double quotation mark can represent the start or end of a `String`, the single quotation mark can represent the start or end of a `char`, and the backslash is used for an escape sequence. Without the backslash in front of them, the compiler might think that they are the start/end of a string/char or the start of an escape sequence. With these backslashes, the compiler can easily tell that these are meant to be treated as strings and not the start/end of a string/char or the start of an escape sequence.
:::

## Input

So, now that we've talked about output, let's talk about input. To get input in Java, we use the `Scanner` class. To use this class, you need to import it from the `java.util` package like so.

```java
import java.util.Scanner;
```

This needs to be placed before your class declaration, not inside, not after.

::: tip
You can actually use the `Scanner` class directly without importing it, like so.

```java
java.util.Scanner scanner = new java.util.Scanner(System.in);
```

However, this is usually considered bad practice, so just keep importing it like you'd normally do. This is only ever used when you have two packages with the same class name, and you want to use both those classes.
:::

If you read the tip above, you'd already know how to create a new scanner, but in case you didn't, here is an example.

```java
Scanner scanner = new Scanner(System.in);
```

::: tip
Since we already imported the scanner class, we don't need to keep typing `java.util.Scanner` over and over again.
:::

Now, how do we use this scanner? For our simple input and output, we have 9 methods.
- `next()`
- `nextLine()`
- `nextBoolean()`
- `nextByte()`
- `nextDouble()`
- `nextFloat()`
- `nextLong()`
- `nextInt()`
- `nextShort()`

Most of these are self-explanatory, but for `next()` and `nextLine()`, `next()` will return the first word the user inputs, while `nextLine()` will return the entire line the user inputs.

Say for example,
```
Never gonna give you up!
```
`next()` will return "Never", while `nextLine()` will return "Never gonna give you up!".

::: warning
Do note that this example was done with the methods used seperately. Using `next()` then using `nextLine()` will return "Never" and " gonna give you up!" respectively, since the Scanner has already passed "Never" using the `next()` method when you are about to use `nextLine()`, returning " gonna give you up!" instead.
:::

## Formatting

You've heard of `printf()` from the start of the `Output` section, but just what does it do? Basically, you can put format specifiers in your strings, and `printf()` will format the string accordingly, depending on the variables you pass to `printf()`.

For now, you will only need these four conversion characters:
- `%d` - decimal integer (byte, short, int and long)
- `%f` - floating-point number (float, double)
- `%c` or `%C` - character (using `%C` will captialize the character)
- `%s` or `%S` - string (using `%S` will capitalize all letters in the string)

There are also optional flags you can use to further format your messages. You have to put these flags before the conversion character, like this: `%,d`.

Here are some useful flags that you should know:
- `.` - supported by `%f`, denotes precision. Ex. `0.69420` formatted using `%.2f` will output `0.69`.
- `,` - supported by `%f` and `%d`, denotes comma seperation. Ex. `69420` formatted using `%,d` will output `69,420`.