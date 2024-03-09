# Arrays

## What even is an array?
An array is a container that holds a fixed number of values of a single type. The length of an array is established when the array is created, and after creation, its length is fixed. 

<img src="./images/01_array.png" alt="An array with 8 elements." />

*An array of 8 elements.* Retrieved from Dev.java: [https://dev.java/](https://dev.java/N)

Each item in an array is called an element, and each element is accessed by its numerical index. As shown in the preceding illustration, numbering begins with 0. The 6th element, for example, would therefore be accessed at index 5.

## Declaring a variable to refer to an Array
The code below creates an array named `intArray` with the following line of code.
```java
int[] intArray;
```

Simlilar to declarations for variables of other types, an array declaration has two components: the array's type and the array's name. An array's type is written as `type[]`, where `type` is the data type of the contained elements, while the brackets are special symbols indicating that this variable holds an array. The size of the array is not part of its type, which is why the brackets are empty. An array's name can be anything you want, provided that it follows the rules and conventions as discussed in the [Variables](/1/variables/#variable-naming-conventions) section.

Similarly, you can declare arrays of other types:
```java
byte[] anArrayOfBytes;
short[] anArrayOfShorts;
long[] anArrayOfLongs;
float[] anArrayOfFloats;
double[] anArrayOfDoubles;
boolean[] anArrayOfBooleans;
char[] anArrayOfChars;
String[] anArrayOfStrings;
```
Additionally, you can also place the brackets after the array's name:
```java
Type name[];
```
However, standard convention discourages using this format, since the brackets identify the array type and should usually appear in the type declaration.

## Creating, Initializing, and Accessing an Array
One way to create an array is with the `new` operator. The code below creates an array with a maximum of 5 integer elements and assigns the array to the anArray variable.
```java
int[] anArray = new int[5];
```
You can assign values to each element of the array like so
```java
anArray[0] = 6;
anArray[1] = 9;
anArray[2] = 4;
```
Each array element is accessed by its numerical index:
```java
anArray[0];
anArray[1];
anArray[2];
```
Alternatively, you can use the shortcut syntax to create and initialize an array:
```java
int[] anArray = { 6, 9, 4, 2, 0 };
```
Here the length of the array is determined by the number of values provided between the braces and separated by commas.

You can also declare an array of arrays (also known as a multidimensional array) by using two or more sets of brackets, such as `String[][]` names. Each element, therefore, must be accessed by a corresponding number of index values.

In the Java programming language, a multidimensional array is an array whose components are themselves arrays.

Finally, you can use the built-in `length` property to determine the size of any array. The following code prints the array's size to standard output:
```java
System.out.println(anArray.length);
```

## Looping through elements in an Array

You might get into a situation where you'd want to get all the elements in an Array. You can do so by using the standard for-loop, or the enhanced for-loop.

Using the standard for-loop:
```java
for (int i = 0; i < anArray.length; i++) {
	int element = anArray[i];
}
```

Or, you can use the enhanced for-loop:
```java
for (int element : anArray) {
	// ...
}
```

You can use both loops, and they will give the same output, unless you are changing the values inside the loop. If so, you should the standard for-loop, because any changes to the `element` variable will not reflect as changes to the array element, which could be unwanted behavior.

## Two-dimensional Arrays 

This is basically an Array, inside another Array. You can create a two-dimensional array like so:
```java
int[][] array2d = {
	{ 6, 9, 0 },
	{ 4, 2, 0 }
}
```
Additionally, you can have rows with different lengths.
```java
int[][] array2d = {
	{ 6, 9 },
	{ 4, 2, 0}
}
```

You can also create a 2d Array using the `new` operator.
```java
int[][] array2d = new int[3][4];
```

::: tip
For simplicity, we can imagine this two-dimensional array as rows and columns on a spreadsheet.

You can imagine 
```java
int[][] array2d = new int[3][4];
```
as
```java
int[][] array2d = [rows][columns];
```
:::

Additionally, you can create rows with multiple column lengths by accessing each row property and setting them individually, like so:
```java
int[][] array2d = new int[2][];

array2d[0] = new int[6];
array2d[1] = new int[9];
```

To access this type of array, it's the same as how'd you access an array normally, with an extra column.

For example, access the 10th column in the 7th row.
```java
array2d[6][9];
```

::: tip
Arrays are **zero-indexed**, which means that their starting number is `0`. Therefore, the 10th column would be on index `9`.
:::