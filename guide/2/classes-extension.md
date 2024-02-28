# Classes (extended)

::: tip
This page is a follow-up and assumes you know the concepts from the [**Classes, Objects, and Packages**](../2/classes-objects-packages.html) section.
:::

## Defining class methods
Our classes can have various methods that a programmer may use to interact with it. Here is an example of your typical method declaration, taken from the [previous](../2/classes-objects-packages.html) section.
```java
public void takeDamage(int damage) {
	this.health -= damage;

	if (this.health < 0) return;

	this.health = 0;
	this.energy = 0;
	this.dead = true;
}
```
A method declaration requires a return type, name, a pair of parentheses `()` and braces `{}`.

More specifically, method declarations have five components, in order:
- Access modifiers — such as `public` and `private`, which is discussed in a later section, over [here](../2/oop.html#access-modifiers).
- The return type — the data type of the value this method will return, or `void` if none.
- The method name — the method name, following variable naming rules. 
- The parameter list in paranthesis — a comma seperated list of method parameters, preceded by their data types, all enclosed by parentheses `()`. If there are no parameters, empty parentheses must be used instead.
- The method body, enclosed between braces — the method's code, including the declaration of local variables, goes inside the braces.

From our example above, we can slice this function into it's corresponding parts:
- `public` — this is the method's access modifier. Access modifiers are discussed in a later section, over [here](../2/oop.html#access-modifiers).
- `void` — this is the method's return type. `void` means that this method will not return anything.
- `takeDamage` — this is the method's name. `takeDamage` perfectly follows variable naming rules.
- `(int damage)` — this is the method's parameter list. Since there is only one parameter, a comma is unnecessary, and will lead to an error.
- `{ this.health -= damage; /* (more code here) */ }` — this is the method's body, containing all the code.

## Defining and using class constructors 
In our classes, we know that they can have various fields and methods. A class can also have a constructor. In the Java Programming Language, a constructor is also considered a method. However, it is a more *special* type of method, where it is only called when a new class that contains that constructor is made.

Let's go back to our `CharacterCard` class from the [**Classes, Objects and Packages**](../2/classes-objects-packages) section.
```java
public class CharacterCard {
	String name;
	String id;
	int damage;
	int health;
	int energy;
	int maxHealth;
	int maxEnergy;
	boolean dead = false;

	public CharacterCard(String name, int damage, int maxHealth, int maxEnergy) {
		this.name = name;
		this.damage = damage;
		this.maxHealth = maxHealth;
		this.maxEnergy = maxEnergy;

		this.health = maxHealth;
		this.energy = 0;
	}

	public void takeDamage(int damage) {
		this.health -= damage;

		if (this.health < 0) return;

		this.health = 0;
		this.energy = 0;
		this.dead = true;
	}

	public void dealDamage(CharacterCard character) {
		character.takeDamage(this.damage);
		this.energy += 1;
	}

	public void heal(int healing) {
		this.health += healing;

		if (this.health < this.maxHealth) return;

		this.health = this.maxHealth;
	}
}
```
Our constructor here is `CharacterCard`. A class constructor must always have the same name as the class. This is what differentiates a constructor from a method.

When we want to create a new `CharacterCard`, we use the `new CharacterCard()` syntax. A constructor's arguments are applied to the syntax. Here, we are using the no-argument constructor, which doesn't really exist in `new CharacterCard()`. When creating a new class, we need to pass in valid arguments to the constructor. Here, we need to pass a `String`, `int`, `int`, `int`, in that order. This is because our constructor has a method signature of `(String, int, int, int)`. Therefore, we need to pass our values in that order.

## Static and Instance: The Difference

In Java, a class can have either **static** or **instance** methods/fields, but what is a "static method" or an "instance method"?

A static method is a method that can be used from the class directly. An example of this is the `main()` method that we always use.
```java
public class Main {
	public static void main(String args[]) {
		// ...
	}
}
```

A static method is declared using the `static` modifier. The `main()` method is a static method. This means that other classes can invoke/call the `main()` method without having to create a new instance of the `Main` class.
```java
Main.main(args);
```

An instance method is a method that is used from the class instance.
```java
public class Student {
	public void study() {
		// ...
	}
}
```

By default, any methods that aren't declared `static` are instance methods. The `study()` method is an instance method. This means that you need to create a `new Student()` or have an instance/object of the class `Student` so you can invoke/call the `study()` method.
```java
Student student1 = new Student();
student1.study();
```

This rule can also apply to fields.

Just like a static method, a static field is a field that can be accessed from the class directly. 

```java
public class Main {
	public static String rickroll = "Never gonna give you up.";
}
```

Just like static methods, static fields need to have the `static` modifier in order for them to be declared as a static field. The field `rickroll` is a static field, which means you can access it from the `Main` class directly.
```java
Main.rickroll;
```

Just like an instance method, an instance field is a field that is used from the class instance.
```java
public class Main {
	public Scanner input = new Scanner(System.in);
}
```

Just like instance methods, fields that aren't declared `static` are instance fields. The field `input` is an instance field. This means that you need to create a `new Main()` or have an instance/object of class `Main` to access the `input` field.
```java
Main main = new Main();
main.input;
```

## Using the this keyword

In classes, you can use the `this` keyword to refer to the current class instance. However, you should be careful where you use the `this` keyword.

For instance, you cannot use the `this` keyword in static methods. This is because static methods are declared `static`, therefore, there is no class instance for `this` to refer to. Trying to do so gives you a "Cannot use this in a static context" error.

```java
public class Student {
	public static void main(String[] args) {
		this.study(); // java.lang.Error: Unresolved compilation problem: Cannot use this in a static context
	}

	public void study() {
		// ...
	}
}
```

This works similarly to using static methods inside instance methods. Some programmers make the mistake of using `this` to refer to their static method in the same class. Always remember that the `this` keyword refers to the current class instance. To call static methods in the same class, just call it like how'd you call it in another class, which is `Class.method()`.