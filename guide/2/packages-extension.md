# Packages (extended)

::: tip
This page is a follow-up and assumes you know the concepts from the [**Classes, Objects, and Packages**](../2/classes-objects-packages) section.
:::

## Understanding packages
A package is a namespace containing a bundled group of related types (classes, interfaces, etc.), which make types easier to use and find, along with avoiding naming conflicts and controlling access to certain types.

We have already seen an example of packages with the Scanner class from our [**Input and Output**](../1/input-output) section. We are using the Scanner class, bundled in the `java.util` package. 

The types that are part of the Java platform are members of various packages that bundle their classes by their functions: fundamental classes are in `java.lang`, classes for reading and writing (input and output) are in `java.io`, and so on. You can put your types in packages, too.

Suppose you have many classes representing graphic objects, such as circles, rectangles, lines, and points. You also have an interface, `Draggable`, which those classes implement if they can be dragged with the mouse.

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

It would help if you bundled these classes and the interface in a package for several reasons, including the following:
- You and other programmers can quickly determine that these types are related.
- You and other programmers know where to find types that can provide graphics-related functions.
- The names of your types will not conflict with the type names in other packages because the package creates a new namespace.
- You can allow types within the package to have unrestricted access to one another while still restricting access for types outside the package (explained here in [**Access Modifiers**](../2/oop#access-modifiers)).

## Creating a package
To create a package, you choose a name for the package (naming conventions are discussed in the [next](#naming-a-package-and-naming-conventions) section) and put a package statement with that name at the top of every source file containing the types you want to include.

The package statement (for example, `package graphics;`) must be the first line in the Java file. There can be only one package statement in each Java file, and it applies to all types in the file.

If you put the graphics interface and classes listed in the preceding section in a package called `graphics`, you would need six source files containing the classes and interface, like this:
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

If you do not use a `package` statement, your type ends up in an unnamed package. Generally speaking, an unnamed package is only for small or temporary applications or when you are just beginning the development process, which is why we didn't use it last quarter. Otherwise, classes and interfaces belong in named packages.

## Naming a package and Naming Conventions
Since many programmers write classes and interfaces using the Java programming language, many programmers will likely use the same name for different types. The previous example does just that: It defines a `Rectangle` class when there is already a `Rectangle` class in the `java.awt` package. Despite this, the compiler allows both classes to have the same name if they are in different packages. The fully qualified name of each `Rectangle` class includes the package name. That is, the fully qualified name of the Rectangle class in the graphics package is `graphics.Rectangle`, and the fully qualified name of the Rectangle class in the `java.awt` package is `java.awt.Rectangle`.

This works well unless two independent programmers use the same name for their packages. What prevents this problem? Convention.

Package names are usually written in all lowercase to avoid conflict with the names of classes or interfaces.

Companies usually use their reversed Internet domain name to begin their package names — for example, `net.minecraft.entity` for a package named `entity` created by a programmer at `minecraft.net`.

However, we can use the folder name as our package name for our case. For example, `graphics` for a package inside a folder named `graphics`. 

We can separate the folder names using the `.` symbol for folders inside graphics. For example, `graphics.shapes` for a package named `shapes` inside the `graphics` folder. A good way of thinking about inner folders is the path. For example, an `AttributeContainer` class inside the `minecraft/entity/attribute` folder would have a package name of `minecraft.entity.attribute`.

::: danger
Some IDEs may return an error whenever the package name you are using does not match the folder the file is in. For example, an IDE may throw an error if a package declaration, `package graphics;` does not match the folder name the file is in, for example, `Graphics`. 
:::