# More on Strings and the StringBuffer

If you haven't noticed by now, datatypes like `int`, `char`, `long`, `etc`., have their first letter in lowercase, but the first letter in the word `String` is capitalized, and is written as `String` instead of `string`. Why is there a discrepancy between them? Aren't they the same datatype type?

Actually, they aren't. `String` is a **reference** data type, while `int`, `char`, `long`, `etc`. are all **primitive** data types. This is why `String` is written as `String` and not `string`, because it's actually a class! The only difference it has over the other classes is that you can create a `String` without using `new String()`, and use the literal `"` instead.

## The String constructor

The String class has multiple overloaded constructors, but we are only gonna go over three.

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

The `String` class provides multiple methods that allow you to compare, examine, extract and do more with your string. Here are some useful methods that you may use in the future while programming in Java.

::: tip
The headers for this section and [StringBuffer methods](#stringbuffer-methods) follow our [guide notation](../additional-information/notation.md)! If you don't wanna read that, then take note of the notation below.

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

**Example:**
```java
String str = "Never gonna give you up!";

System.out.println(str.length()); // Expected output: 24
```

### String#charAt()

**Method:**
```java
char charAt(int index);
```

Returns the `char` value at the specified index. Basically, it's the character at that part of the string.

- **Parameters:**
	- **index** The zero-based index in the string you want to get the character (starts at `0`).
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
	- **srcBegin** index of the first character in the string to copy.
	- **srcEnd** index after the last character in the string to copy.
	- **dst** the destination array.
	- **dstBegin** the start offset in the destination array.

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

::: tip "White space" and "Space": What's the difference?
Did you know that these two are different things? To the outside eye, it looks like there is no difference between the both. However, internally, there is a huge difference between the both of them.

However, for simplicity, a "Space" is `' '`, while "White space" is `' '`, `\t` (tab), `\n` (line feed), `\f` (form feed), `\r` (carriage return)

This is most likely why using `String#strip()` is suggested over `String#trim()`.
:::

### String#equals()

**Method**
```java
boolean equals(Object anObject);
```

Compares this string to the specified object. The result is `true` if and only if the `anObject` is not `null` and is a `String` object that represents the same sequence of characters as this object.

- **Parameters:**
	- **anObject** The object to compare this `String` against.
- **Returns:**
	- **true** if the given object represents a `String` equivalent to this string, `false` otherwise.

### String#equalsIgnoreCase()

**Method**
```java
boolean equalsIgnoreCase(String anotherString);
```

Compares this `String` to another `String`, ignoring case. Two strings are considered equal ignoring case if they are of the same length and corresponding characters in the two strings are equal ignoring case.=

- **Parameters:**
	- **anotherString** The `String` to compare this `String` against.
- **Returns:**
	- **true** if the argument is not `null` and it represents an equivalent `String` ignoring case; `false` otherwise.

### String#contentEquals()

**Method**
```java
boolean contentEquals(CharSequence anotherString);
```

::: tip
A `CharSequence` is an interface, which the `String` and `StringBuffer` class implement, so you can use them in `String#contentEquals()`!
:::

Compares this string to the specified `CharSequence`. The result is true if and only if this `String` represents the same sequence of char values as the specified sequence.

- **Parameters:**
	- **cs** The sequence to compare this `String` against
- **Returns:**
	- `true` if this `String` represents the same sequence of char values as the specified sequence, `false` otherwise

**Example:**
```java
String str = "Never gonna give you up!";
StringBuffer otherStr = new StringBuffer("Never gonna give you up!");

System.out.println(str.contentEquals(otherStr)); // Expected output: true
```

### String#compareTo()

**Method**
```java
int compareTo(String anotherString);
```

Compares two strings lexicographically. If an index in either string has a different character, compares the two characters based on their Unicode value, then returns the value. If two strings have the same characters, but different lengths, the shorter string precedes the longer string. In this case, `compareTo()` returns the difference of the lengths of this string and the other string.

- **Parameters:**
	- **anotherString** the `String` to be compared.
- **Returns:**
	- the value `0` if the argument string is equal to this string; a value less than `0` if this string is lexicographically less than the string argument; and a value greater than `0` if this string is lexicographically greater than the string argument.

**Example:**
```java
String str1 = "Never gonna give you up!";
String str2 = "Never gonna let you down!";

System.out.println(str1.compareTo(str2)); 
/**
 * Expected output: -5 
 * 
 * "Never gonna " are present in both strings, but a difference happens in index 6: 'g' and 'l'.
 * 'g' is the 7th letter of the alphabet, while 'l' is the 12th letter of the alphabet
 * Additionally, 'g' has a numeric unicode value of 16, while 'l' has a unicode value of 21
 * since we are comparing 'g' to 'l', it would be 16 - 21 = -5.
 * 
 * If you want to get the numeric unicode value of a character, you can use the
 * `Character.getNumericValue()` method.
 */
```

```java
String str1 = "Never gonna give you up!";
String str2 = "Never gonna give you up! Always!";

System.out.println(str1.compareTo(str2)); 
/**
 * Expected output: -8
 * 
 * "Never gonna give you up!" is present in both strings, then str1 ends. However, str2 still has
 * some characters, so it has a different length. Here, compareTo() returns the difference in
 * lengths, so 24 - 32 = -8
 */
```

### String#replace()

**Method**
```java
String replace(char oldChar, char newChar);
```

Returns a version of this string with all occurrences of `oldChar` replaced with `newChar`. If the character `oldChar` is not in the given string, returns the original string instead.

- **Parameters:**
	- **oldChar** the old character.
	- **newChar** the new character.
- **Returns:**
	- a string derived from this string by replacing every occurrence of `oldChar` with `newChar`.

**Example:**
```java
String str = "Never gonna give you up!";

System.out.println(str.replace('e', 'a')); // Expected output: "Navar gonna giva you up!" 
```

<hr>

**Method**
```java
String replace(CharSequence target, CharSequence replacement);
```

::: tip
A `CharSequence` is an interface, which the `String` and `StringBuffer` class implement, so you can use them in `String#replace()`!
:::

Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence.

- **Parameters:**
	- **target** The sequence of char values to be replaced
	- **replacement** The replacement sequence of char values
- **Returns:**
	- The resulting string

**Example:**
```java
String str = "Never gonna give you up!";

System.out.println(str.replace("Never", "Always")); // Expected output: "Always gonna give you up!"
```





## The StringBuffer class

You probably heard by now that a `String` is immutable, meaning it's value cannot be changed. However, there might be some instances where you want to change a `String`'s data, but how do you do so?

This is where the `StringBuffer` class comes in. A `StringBuffer` allows you to mutate the original string.

The `StringBuffer` has multiple overloaded constructors, each with it's own purpose, but we will only go over three. 

```java
new StringBuffer();
```
This constructor creates a blank `StringBuffer` with a capacity of `16`.

<hr>

```java
new StringBuffer(int capacity);
```

This constructor creates a blank `StringBuffer` with a capacity of `capacity`.

```java
StringBuffer myStr = new StringBuffer(42);
```

This creates a blank `StringBuffer` with a capacity of `42`.

<hr>

We can also add a `String` directly to the `StringBuffer`!

```java
new StringBuffer(String str);
```

This constructor creates a `StringBuffer` with the value `str` and a capacity of `str.length() + 16`.

```java
StringBuffer lyrics = new StringBuffer("Never gonna give you up!");
```

This creates a `StringBuffer` with the value of `"Never gonna give you up!"` and a capacity of `40 (24 + 16)`.

## StringBuffer methods

Like the `String` class, the `StringBuffer` class provides multiple methods that allow you to modify, compare, examine, extract and do more with your string. Here are some useful methods that you may use in the future while programming in Java.

### StringBuffer#length()

**Method:**
```java
int length();
```

Returns the length of this character sequence. Basically, it's how much characters are in the `StringBuffer`.

- **Returns:**
	- the number of `char`s in this sequence

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.length()); // Expected output: 24
```

### StringBuffer#capacity()

**Method:**
```java
int capacity();
```

Returns the current capacity. The capacity is the number of characters that can be stored (including already written characters), beyond which an allocation will occur.

::: tip
Technically, a `StringBuffer` doesn't have a fixed capacity! When your `StringBuffer` reaches maximum capacity, Java will automatically allocate more memory to your `StringBuffer` to support the appended items!
:::

- **Returns:**
	- the current capacity.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.capacity()); // Expected output: 40
```

::: tip How is the capacity 40?
Recall that a `StringBuffer`'s capacity is specified from the constructor. Here, we have used the `new StringBuffer(String str)` constructor. This set's the capacity of the `StringBuffer` to `str.length() + 16`. Since the length of `"Never gonna give you up"` is 24, the capacity is `24 + 16`, which is equal to `40`. 
:::

### StringBuffer#indexOf()

**Method:**
```java
int indexOf(String str);
```

Returns the index within this string of the first occurrence of the specified substring. Basically, returns the zero-based index where it first sees `str` in this string. If an empty string `""` is provided, `0` is returned.

- **Parameters:**
	- **str** the substring to search for.
- **Returns:**
	- the index of the first occurrence of the specified substring, or `-1` if there is no such occurrence.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.indexOf("e")); // Expected output: 1
```

<hr>

**Method:**
```java
int indexOf(String str, int fromIndex);
```

Returns the zero-based index within this string of the first occurrence of the specified substring, starting at the specified index. Basically, returns the zero-based index where it first sees `str` in this string, starting at `fromIndex`. If an empty string `""` is provided, `fromIndex` is returned.

- **Parameters:**
	- **str** the substring to search for.
	- **fromIndex** the index from which to start the search.
- **Returns:**
	- the index of the first occurrence of the specified substring, or `-1` if there is no such occurrence.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.indexOf("e", 5)); // Expected output: 15
```

### StringBuffer#lastIndexOf()

**Method:**
```java
int lastIndexOf(String str);
```

Returns the index within this string of the last occurrence of the specified substring. Basically, returns the zero-based index where it last sees `str` in this string. If an empty string `""` is provided, the string's length is returned.

Returns the index within this string of the first occurrence of the specified substring.

- **Parameters:**
	- **str** the substring to search for.
- **Returns:**
	- the index of the first occurrence of the specified substring, or `-1` if there is no such occurrence.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.lastIndexOf("e")); // Expected output: 15
```

<hr>

**Method:**
```java
int lastIndexOf(String str, int fromIndex);
```

Returns the zero-based index within this string of the first occurrence of the specified substring, searching backward starting at the specified index. If an empty string `""` is provided, `fromIndex` is returned.

- **Parameters:**
	- **str** the substring to search for.
	- **fromIndex** the index from which to start the search.
- **Returns:**
	- the index of the first occurrence of the specified substring, or `-1` if there is no such occurrence.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.lastIndexOf("e", 20)); // Expected output: 15

/**
 * We start at index 20, so our string would be "Never gonna give you ". As you can see, the letter "e" only appears in the
 * 1st, 3rd and 15th index. Since 15 is the last index, it outputs 15. 
 */

System.out.println(str.lastIndexOf("e", 14)); // Expected output: 3

/**
 * We start at index 14, so our string would be "Never gonna giv". As you can see, the letter "e" only appears in the
 * 1st and 3rd. Since 3 is the last index, it outputs 3. 
 */
```

### StringBuffer#substring()

**Method:**
```java
String substring(int start);
```

Returns a new String that contains a subsequence of characters currently contained in this character sequence. The substring begins at the specified index and extends to the end of this sequence.

- **Parameters:**
	- **start** The beginning index, inclusive.
- **Returns:**
	- The new string.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.substring(5)); // Expected output: " gonna give you up!"
```

<hr>

**Method:**
```java
int substring(int start, int end);
```

Returns a new `String` that contains a subsequence of characters currently contained in this sequence. The substring begins at the specified `start` and extends to the character at index `end - 1`.

- Parameters:
	- **start** The beginning index, inclusive.
	- **end** The ending index, exclusive.
- Returns:
	- The new string.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.substring(0, 5)); // Expected output: "Never"
```

### StringBuffer#insert()

**Method:**
```java
StringBuffer insert(int offset, Object obj);
```

Inserts the string representation of the `Object` argument into this character sequence at the indicated offset.

The `offset` argument must be greater than or equal to `0`, and less than or equal to the length of this sequence.

- **Parameters:**
	- **offset** the offset.
	- **obj** an `Object`.
- **Returns:**
	- This object.

::: tip
`StringBuffer#insert()` also provides overloads for every single primitive data type, so you can chuck in your `int`, `double`, `float`, into this string with ease!
:::

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.insert(0, "Gonna make you understand! ")); // Expected output: "Gonna make you understand! Never gonna give you up!"
```

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.insert(23, " or down")); // Expected output: "Never gonna give you up or down!"
```

### StringBuffer#append()

**Method:**
```java
StringBuffer append(Object obj);
```

Appends the string representation of the `Object` argument.

The overall effect is exactly as if the argument were converted to a string by the method `String.valueOf(Object)`, and the characters of that string were then appended to this character sequence.

- **Parameters:**
	- **obj** an `Object`.
- **Returns:**
	- This object.

::: tip
`StringBuffer#append()` also provides overloads for every single primitive data type, so you can chuck in your `int`, `double`, `float`, into this string with ease!
:::

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.append(" Never gonna let you down!")); // Expected output: "Never gonna give you up! Never gonna let you down!"
```

### StringBuffer#replace()

**Method:**
```java
StringBuffer replace(int start, int end, String str);
```

Replaces the characters in a substring of this sequence with characters in the specified String. The substring begins at the specified `start` and extends to the character at index `end - 1` or to the end of the sequence if no such character exists. First the characters in the substring are removed and then the specified `String` is inserted at `start`. (This sequence will be lengthened to accommodate the specified String if necessary.)

- **Parameters:**
	- **start** The beginning index, inclusive.
	- **end** The ending index, exclusive.
	- **str** `String` that will replace previous contents.
- **Returns:**
	- This object.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.replace(0, 5, "Always")); // Expected output: "Always gonna give you up!"

/**
 * The characters from index 0 to 5 are: "Never ", but since 5 is exclusive, the result would be "Never".
 * Now, we replace "Never", with "Always", and since the string can be lengthened to accomodate the specified
 * String, it would be "Always gonna give you up!"
 */
```

### StringBuffer#reverse()

**Method:**
```java
StringBuffer reverse();
```

Reverses the current character sequence. This mutates the current `StringBuilder` instead of returning a new `StringBuilder` with the reversed characters.

- **Returns:**
	- This object.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.reverse()); // Expected output: "!pu uoy evig annog reveN"

System.out.println(str); // Expected output: "!pu uoy evig annog reveN" (the original string is reversed.)

/**
 * The characters from index 0 to 5 are: "Never ", but since 5 is exclusive, the result would be "Never".
 * Now, we replace "Never", with "Always", and since the string can be lengthened to accomodate the specified
 * String, it would be "Always gonna give you up!"
 */
```

### StringBuffer#deleteCharAt()

**Method:**
```java
StringBuffer deleteCharAt(int index);
```

Removes the `char` at the specified position in this sequence and returns this `StringBuffer`. This sequence is shortened by one `char`.

- **Parameters:**
	- **index** Index of char to remove
- **Returns:**
	- This object.

**Example:**
```java
StringBuffer str = new StringBuffer("Never gonna give you up!");

System.out.println(str.deleteCharAt(6)); // Expected output: "Never onna give you up!"
```