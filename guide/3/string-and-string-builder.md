# More on Strings and the StringBuilder

If you haven't noticed by now, datatypes like `int`, `char`, `long`, `etc`., have their first letter in lowercase, but the first letter in the word `String` is capitalized, and is written as `String` instead of `string`. Why is there a discrepancy between them? Aren't they the same datatype type?

Actually, they aren't. `String` is a **reference** data type, while `int`, `char`, `long`, `etc`. are all **primitive** data types. This is why `String` is written as `String` and not `string`, because it's actually a class! The only difference it has over the other classes is that you can create a `String` without using `new String()`, and use the literal `"` instead.

## The String constructor

The String class has multiple constructors, but we are only gonna go over three.

```java
new String(char chars[]);
```

This constructor creates a string from `chars`. All elements inside that array will be joined and turned into a string.

```java
char[] charArray = { 'r', 'i', 'c', 'k', ' ', 'a', 's', 't', 'l', 'e', 'y' };

String charString = new String(charArray);
```

`charString` would have the value of `"rick astley"`.

What if we only want `"rick"` or `"astley"` from the `charArray`? Well, the second constructor should help with that.

```java
new String(char chars[], int offset, int count);
```

This constructor creates a string from `chars`. However, this constructor also takes an `offset` and `count` parameter, so let's see how those modify the string.
- `offset` determines the starting index in `chars`.
- `count` determines how many elements to take.

Take a look at the example below.

```java
char[] charArray = { 'r', 'i', 'c', 'k', ' ', 'a', 's', 't', 'l', 'e', 'y' };

String charString = new String(charArray, 0, 4);
```
`charString` would have the value of `"rick"`, because we started at index `0` (offset), and took the next `4` (count) elements inside the `charArray`.

What if we want the value `"astley"` instead? 
```java
char[] charArray = { 'r', 'i', 'c', 'k', ' ', 'a', 's', 't', 'l', 'e', 'y' };

String charString = new String(charArray, 5, 6);
```
Our offset would be `5`, and the count should be `6`.

We can also pass in another string to the String constructor.
```java
String myString = "this is a string";
String copyString = new String(myString);
```
Of course, `copyString` would have the same value as `myString`, which is `"this is a string"`.

## String methods

The String class provides multiple methods that allow you to modify, compare, examine, extract and do more with your string. Here are some useful methods that you may use in the future while programming in Java.

::: tip
The headers for this section follow our [guide notation](../additional-information/notation.md)! If you don't wanna read that, then take note of the notation below.

`Class1#method1()` means that the method `method1()` of the class `Class1` is an **instance method**. Therefore, you must create a `new Class1()` or have an instance/object of `Class1` to be able to use `method1()` on the created instance/object.
:::

### String#length()

**Method:**
```java
int length();
```

This returns the length of the string. Basically, it's how much characters are in the string.

- **Returns:**
	- the length of the sequence of characters represented by this object.

Example:
```java
String str = "Never gonna give you up!";

System.out.println(str.length); // Expected output: 24
```

### String#charAt()

**Method:**
```java
char charAt(int index);
```

Returns the `char` value at the specified index. Basically, it's the character at that part of the string.

- **Parameters:**
	- `index` The zero-based index in the string you want to get the character (starts at `0`).
- **Returns:**
	- the `char` value at the specified index of the string.

**Example:**
```java
String str = "Never gonna give you up!";

System.out.println(str.charAt(4)); // Expected output: 'r'
```

### String#getChars()

**Method:**
```java
void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin);
```

Copies characters from this string and pastes it into the destination character array.

The first character to be copied is at index `srcBegin`; the last character to be copied is at index `srcEnd - 1` (so the total number of characters to be copied is `srcEnd - srcBegin`). The characters are copied into the array `dst` starting at index `dstBegin`.

- **Parameters:**
	- `srcBegin` index of the first character in the string to copy.
	- `srcEnd` index after the last character in the string to copy.
	- `dst` the destination array.
	- `dstBegin` the start offset in the destination array.

**Example:**
```java
String str = "Never gonna give you up!";
char[] dest = new char[5];

str.getChars(0, 5, dest, 0);

// dest now has a value of: { 'N', 'e', 'v', 'e', 'r' }

System.out.println(dest); // Expected output: Never
```

### String#trim()

**Method:**
```java
String trim();
```

Returns a string whose value is this string, with all leading and trailing space removed. If this `String` object doesn't have any leading and trailing space, this `String` object is returned. If this `String` object is all whitespaces, a empty `String` object is returned.

This method may be used to trim space (as defined above) from the beginning and end of a string.

- **Returns:**
	- a string whose value is this string, with all leading and trailing space removed, or this string if it has no leading or trailing space.

**Example:**
```java
String strWithSpaces = "   spacey   string    ";
String strJustSpaces = "           ";
String strNoSpaces = "this has no spaces";

System.out.println(strWithSpaces.trim()); // Expected output: "spacey   string"
System.out.println(strJustSpaces.trim()); // Expected output: ""
System.out.println(strNoSpaces.trim()); // Expected output: "this has no spaces"
```

### String#strip()

**Method:**
```java
String strip();
```

Behaves like `String#trim()`, returning a string whose value is this string, but with all leading and trailing **white space** removed. If this `String` object doesn't have any leading and trailing space, this `String` object is returned. If this `String` object is all whitespaces, a empty `String` object is returned.

This method may be used to trim **white space** from the beginning and end of a string.

- **Returns:**
	- a string whose value is this string, with all leading and trailing white space removed.

**Example:**
```java
String strWithSpaces = "   spacey   string    ";
String strJustSpaces = "           ";
String strNoSpaces = "this has no spaces";

System.out.println(strWithSpaces.strip()); // Expected output: "spacey   string"
System.out.println(strJustSpaces.strip()); // Expected output: ""
System.out.println(strNoSpaces.strip()); // Expected output: "this has no spaces"
```

::: tip "White space" and "Space"
Did you know that these two are different things? For one, a "Space" is either one of three things

how tf do I explain unicode? caleb its your time to sine (yes sine function real)
:::

### String#equals()

**Method**
```java
boolean equals(Object anObject);
```

Compares this string to the specified object. The result is `true` if and only if the `anObject` is not `null` and is a `String` object that represents the same sequence of characters as this object.

- **Parameters:**
	- `anObject` The object to compare this `String` against.
- **Returns:**
	- `true` if the given object represents a `String` equivalent to this string, `false` otherwise.

### String#equalsIgnoreCase()

**Method**
```java
boolean equalsIgnoreCase(String anotherString);
```

Compares this `String` to another `String`, ignoring case. Two strings are considered equal ignoring case if they are of the same length and corresponding characters in the two strings are equal ignoring case.=

- **Parameters:**
	- `anotherString` The `String` to compare this `String` against.
- **Returns:**
	- `true` if the argument is not `null` and it represents an equivalent `String` ignoring case; `false` otherwise.

### String#compareTo()

**Method**
```java
int compareTo(String anotherString);
```

[Taken from the Javadoc. TODO: turn this into something more understandable]
Compares two strings lexicographically. The comparison is based on the Unicode value of each character in the strings. The character sequence represented by this `String` object is compared lexicographically to the character sequence represented by the argument string. The result is a negative integer if this `String` object lexicographically precedes the argument string. The result is a positive integer if this `String` object lexicographically follows the argument string. The result is zero if the strings are equal; `compareTo` returns `0` exactly when the `equals(Object)` method would return `true`.

This is the definition of lexicographic ordering. If two strings are different, then either they have different characters at some index that is a valid index for both strings, or their lengths are different, or both. If they have different characters at one or more index positions, let *k* be the smallest such index; then the string whose character at position *k* has the smaller value, as determined by using the `<` operator, lexicographically precedes the other string. In this case, `compareTo` returns the difference of the two character values at position `k` in the two string -- that is, the value:

```java
this.charAt(k)-anotherString.charAt(k)
```

If there is no index position at which they differ, then the shorter string lexicographically precedes the longer string. In this case, compareTo returns the difference of the lengths of the strings -- that is, the value:

```java
this.length()-anotherString.length()
```

- **Parameters:**
	- `anotherString` the `String` to be compared.
- **Returns:**
	- the value `0` if the argument string is equal to this string; a value less than `0` if this string is lexicographically less than the string argument; and a value greater than `0` if this string is lexicographically greater than the string argument.

## The StringBuilder class



## StringBuilder methods