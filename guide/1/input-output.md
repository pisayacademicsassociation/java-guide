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

For now, you will only need these five conversion characters:
- `%d` - decimal integer (byte, short, int and long)
- `%f` - floating-point number (float, double)
- `%c` or `%C` - character (using `%C` will captialize the character)
- `%s` or `%S` - string (using `%S` will capitalize all letters in the string)
- `%b` - boolean

There are also optional flags you can use to further format your messages. You have to put these flags before the conversion character, like this: `%,d`.

Here are some useful flags that you should know:
- `.` - supported by `%f`, denotes precision. Ex. `0.69420` formatted using `%.2f` will output `0.69`.
- `,` - supported by `%f` and `%d`, denotes comma seperation. Ex. `69420` formatted using `%,d` will output `69,420`.

## Advanced Knowledge: Scanner

::: warning
In this section, we are going to dive deep into how Java's Scanner class works with console input. This information can provide a deeper understanding about console input, however mastering these details is not required nor included for any of our CS activities.

If you are willing or eager to expand and enhance your understanding of how the Scanner class works with console input, feel free to read this section. However, if you don't need to or prefer not to do so, then you are free to skip to the next section. The content included in this section is intended for people who would like to know more, and will not be a requirement for succeeding sections. 
:::

As you may know, the Scanner class has various methods you can use for input, but just how exactly does it read input?

When you are asked for input, the program waits for this input, and once you are done, this input is sent to `System.in`, which the Scanner class then scans your input. 

Now, lets say we want to know the user's name. Our code would look a little bit like this:
```java
System.out.println("Hello! What is your name?");
String name = input.nextLine();
```

We input "Joe" then press `Enter`, which is then sent to `System.in`.
```
Joe

```
Notice that when you press the `Enter` key, it is registered as a newline in `System.in`. Now, how does the Scanner read this? Let us imagine a cursor for the Scanner class reading, indicated by `|`.
```
|Joe

```
We are reading this using `input.nextLine()`, so the Scanner would read Joe, see the newline, consume it and end reading. Now, our `System.in` should look like this.
```
Joe
|
```
This is due to how `input.nextLine()` works. It will continuously scan until it sees a newline, then it will consume that newline and end reading.

Let us try asking them for their age. We will add this block of code below the code asking for the name.
```java
System.out.println("How old are you?");
int age = input.nextInt();
```
Now, let's say our age is `15`. System.in should look like this.
```
Joe
|15

```
We are reading the user's age using `input.nextInt()`, so the Scanner would read `15`, see the space, and end reading. This is because unlike `input.nextLine()`, all of the mentioned input methods don't consume the newline. Instead, they consume the next "word", which is any sequence of characters before a space.

Now, our `System.in` should look like this.
```
Joe
15|

```
Let's try asking them for their country. We will add this block of code below the code asking for their age.
```java
System.out.println("What country are you from?");
String country = input.nextLine();
```
Now, if we try running the program, you may notice that after you input your age, the code immediately skips the input for "What country are you from?"! Why does this happen? Well, this is also because of how the Scanner class works.

From our `System.in` above, you can see that the "cursor" stops after 15. If we try to get the next line, the Scanner class would consume the newline created by inputting the number 15 instead! Our `System.in` should look like this.
```
Joe
15
|
```
This is because of how `input.nextLine()` works. However, since there is no input it can scan anymore, and it already sees a newline, it will consume that newline and return `""` (empty string) instead.

We can prove this works if you input "15 Philippines" when it asks you for your age. This time, it will still skip the question, however our `country` variable would have the value of `" Philippines"`. This is because the Scanner reads ` Philippines`, then sees the newline, consumes it and ends reading.

Now that you know how this happens, how do you fix it? Some people fix it by putting their `input.nextLine()` methods first before the other methods, while some people use `input.next()` instead, if they are expecting a single-word answer. You can also use two `input.nextLine()` methods instead: one to consume the remaining newline, one to consume the input.

The way you fix it is entirely up to you, but now at least you can possibly identify what is wrong when your input suddenly skips over! 