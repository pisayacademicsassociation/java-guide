# Packages (extended)

::: tip
This page is a follow-up and assumes you know the concepts from the [**Classes, Objects and Packages**](../2/classes-objects-packages.md) section.
:::

## Understanding packages
A package is a namespace containing a bundled group of related types (classes, interfaces, etc.) that is used to make types easier to use and find, avoid naming conflicts and to control access to certain types.

We have already seen an example of this with the `Scanner` class from our [**Input and Output**](../1/input-output) section. We are using the `Scanner` class, bundled in the `java.util` package.

The types that are part of the Java platform are members of various packages that bundle their classes by their functions: fundamental classes are in `java.lang`, classes for reading and writing (input and output) are in `java.io`, and so on. You can put your types in packages too.

Suppose you have a group of classes that represent graphic objects, such as circles, rectangles, lines, and points. You also have an interface, `Draggable`, that those classes implement if they can be dragged with the mouse.

```java
// in the Draggable.java file
public interface Draggable {
    // ...
}

// in the GraphicObject.java file
public abstract class GraphicObject {
    // ...
}

// in the Circle.java file
public class Circle extends GraphicObject implements Draggable {
    // ...
}

// in the Rectangle.java file
public class Rectangle extends GraphicObject implements Draggable {
    // ...
}

// in the Point.java file
public class Point extends GraphicObject implements Draggable {
    // ...
}

// in the Line.java file
public class Line extends GraphicObject implements Draggable {
    // ...
}
```

You should bundle these classes and the interface in a package for several reasons, including the following:
- You and other programmers can easily determine that these types are related.
- You and other programmers know where to find types that can provide graphics-related functions.
- The names of your types will not conflict with the type names in other packages because the package creates a new namespace.
- You can allow types within the package to have unrestricted access to one another yet still restrict access for types outside the package (explained here in [**Access Modifiers**](../2/oop#access-modifiers)).

## Creating a package
To create a package, you choose a name for the package (naming conventions are discussed in the [next](#naming-a-package) section) and put a package statement with that name at the top of every source file that contains the types that you want to include in the package.

The package statement (for example, `package graphics;`) must be the first line in the source file. There can be only one package statement in each source file, and it applies to all types in the file.

If you put the graphics interface and classes listed in the preceding section in a package called `graphics`, you would need six source files, like this:
```java
// in the Draggable.java file
package graphics;

public interface Draggable {
    // ...
}

// in the GraphicObject.java file
package graphics;

public abstract class GraphicObject {
    // ...
}

// in the Circle.java file
package graphics;

public class Circle extends GraphicObject implements Draggable {
    // ...
}

// in the Rectangle.java file
package graphics;

public class Rectangle extends GraphicObject implements Draggable {
    // ...
}

// in the Point.java file
package graphics;

public class Point extends GraphicObject implements Draggable {
    // ...
}

// in the Line.java file
package graphics;

public class Line extends GraphicObject implements Draggable {
    // ...
}
```

If you do not use a `package` statement, your type ends up in an unnamed package. Generally speaking, an unnamed package is only for small or temporary applications or when you are just beginning the development process, which is why we haven't used it at all last quarter. Otherwise, classes and interfaces belong in named packages.

## Naming a package and Naming Conventions
Since a lot of programmers write classes and interfaces using the Java programming language, it is likely that many programmers will use the same name for different types. In fact, the previous example does just that: It defines a `Rectangle` class when there is already a `Rectangle` class in the `java.awt` package. Despite this, the compiler allows both classes to have the same name if they are in different packages. The fully qualified name of each `Rectangle` class includes the package name. That is, the fully qualified name of the Rectangle class in the graphics package is `graphics.Rectangle`, and the fully qualified name of the Rectangle class in the `java.awt` package is `java.awt.Rectangle`. 

This works well unless two independent programmers use the same name for their packages. What prevents this problem? Convention.

Package names are usually written in all lower case to avoid conflict with the names of classes or interfaces.

Companies usually use their reversed Internet domain name to begin their package names — for example, `net.minecraft.entity` for a package named `entity` created by a programmer at `minecraft.net`.

For our case, however, we can use the folder name as our package name. For example, `graphics` for a package inside a folder named `graphics`. 

For folders inside graphics, we can seperate the folder names using the `.` symbol. For example, `graphics.shapes` for a package named `shapes` inside the `graphics` folder. A good way of thinking about inner folders is the path. For example, we have an `AttributeContainer` inside the `minecraft/entity/attribute` folder. Our package name would be `minecraft.entity.attribute`.

::: danger
Some IDEs may return an error whenever the package name you are using does not match the folder the file it is in. For example, an IDE may throw an error if a package declaration, `package graphics;` does not match the folder name the file is in, ex. `Graphics`.  
:::