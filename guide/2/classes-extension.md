# Classes (Continued)


## Class methods and constructors
In our classes, we know that 

## Method Overloading

The Java programming language supports overloading methods, and Java can distinguish between methods with different method signatures. This means that methods within a class can have the same name if they have different parameter lists.

Suppose that you have a class that can use calligraphy to draw various types of data (strings, integers, and so on) and that contains a method for drawing each data type. It is cumbersome to use a new name for each method—for example, `drawString()`, `drawInteger()`, `drawFloat()`, and so on. In the Java programming language, you can use the same name for all the drawing methods but pass a different argument list to each method. Thus, the data drawing class might declare four methods named `draw()`, each of which has a different parameter list.

```java
public class DataArtist {
    // ...

    public void draw(String s) {
        // ...
    }
    public void draw(int i) {
        // ...
    }
    public void draw(double f) {
        // ...
    }
    public void draw(int i, double f) {
        // ...
    }
}
```

Overloaded methods are differentiated by the number and the type of the arguments passed into the method. In the code sample, `draw(String s)` and `draw(int i)` are distinct and unique methods because they require different argument types.

You cannot declare more than one method with the same name and the same number and type of arguments, because the compiler cannot tell them apart. Additionally, the compiler does not consider return type when differentiating methods, so you cannot declare two methods with the same signature even if they have a different return type.

::: tip
Overloaded methods should be used sparingly, as they can make code much less readable.
:::