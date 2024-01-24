# Object-Oriented Programming

::: warning
It is heavily recommended to read both the [**Classes, Objects, and Packages**](./classes-objects-packages.md) section and the [**Classes (Extended)**](./classes-extension.md) section since this section will extend your knowledge on both of those topics. 
:::

You may have heard the term "Object-Oriented Programming" before, but just what does it mean? This is one of the many programming styles that many developers use in creating various programs, ranging from tools to games, but what exactly is Object-Oriented Programming?

## Definition of Terms

Alright, I get it, you don't wanna do Research anymore, but I need to put this here as your quick reference just in case I use some terms that you may not understand.

- **Class** - refers to a standard Java class.
- **Class instance**, **instance** or **Class object** - refers to an instance/object created from a class, using `new ClassName();`.
- **Superclass** - refers to the parent class the child class is extending.
- **Subclass** - refers to a child class of a parent class.
- **Paradigm** (programming) - is a specific style of programming.
- **OOP** or **Object-Oriented Programming** - refers to the Object-Oriented Programming Paradigm.
- **refactor** - refers to changing the inner structure of a specific piece of code without changing it's normal behavior.
- **fields** - refers to variables tied to a class.
- **methods** - refers to functions tied to a class.
- **instantiate** - refers to the creation of a class instance/object from a class.
- **instantiable** - refers to a class that allows a class instance/object to be created from it.
- **implementation** - refers to code for a specific method.
- **method signature** - refers to the parameter list of a specific method.
- **calling** (programming) - usually refers to using a specific function or method.
- **partial** - synonym of incomplete.

### Code examples

```java
class A extends B
```
`A` is the **subclass** (the class being extended by B), B is the **superclass** (the class A is being extended from)

```java
class MyClass
```
`MyClass` is a **Class**.

```java
MyClass instanceOfMyClass = new MyClass();
```
`instanceOfMyClass` is a **Class instance** of `MyClass`.

```java
class Person {
	String name;
	int age;
}
```
`name` and `age` are **fields** of the `Person` class.

```java
class Person {
	public void speak(String message) {
		// ...
	}
}
```
`speak(String message)` is a **method** of the `Person` class, `(String message)` is a **method signature** of the `speak` method.

## What exactly is OOP?

Now that we got the definition of terms out of the way, it's time to give the reason why programming in Java feels so different from programming in other programming languages.

Back in CS1, CS2 and CS3, we have learned and used Python, C++ and JavaScript, respectively. But did you remember that before learning Python, we created a bunch of flowcharts? From CS1 until CS3, we have used the Procedural Programming Paradigm, which is why they all feel so similar in terms of programming.

However, a new problem arises with Java. You see, Java is mostly based on the Object-Oriented Programming Paradigm, which is drastically different from the Procedural Programming Paradigm. If you would notice, OOP-related programs would have multiple Java files packed into a folder, or package, while Procedural programs would usually have one file. This is because of the difference in both programming styles, which we will now discuss.

Think of Procedural Programming like an individual project, while think of Object-Oriented Programming as a group project. In an individual project, you have to do all the work to complete your project, just like how in Procedural Programming, where all the code is nested into a single file. In a group project, each member of the group has their own specific task that they have to do, just like how in Object-Oriented Programming, each class has their own specific task delegated to them.

Now, this begs the question, why would you choose Object-Oriented Programming over Procedural Programming? This is because Object-Oriented Programming allows you to delegate specific bundles of code into seperate classes. This allows you to keep your code clean, efficient and easy to refactor.

## What is Inheritance?

Lets say you have some objects that share a common trait. Now, you want to add one more common trait to these objects, which you would have to copy and paste over and over again. However, what would happen if you have a hundred of these objects? It would be very tiring to copy and paste your common trait a hundred times, would it? What if you want to rename one of the common traits? You'd have to make the change for all the other objects as well, which could be very tiring and boring.

Deriving from our previous TCG examples, Swords, Bows, and Catalysts, for example, all share the characteristics of weapons (damage, range, attackSpeed). Yet each also defines additional querks that make them different: bows require a projectile; catalysts do a certain type of damage; swords can have a certain sharpness to them, and etc.

Object-oriented programming allows classes to inherit commonly used states and behaviors from other classes. We can create a `Weapon` superclass for our `Sword`, `Bow`, and `Catalyst` subclasses. In the Java programming language, each class is allowed to have one direct superclass, and each superclass has the potential for an unlimited number of subclasses:

The syntax for creating a subclass is simple. At the beginning of your class declaration, use the `extends` keyword, followed by the name of the class to inherit from:

```java
class Catalyst extends Weapon {

    // new fields and methods defining a catalyst would go here

}
```

The `extends` keyword allows us to declare that the `Catalyst` class inherits all the fields and methods from the `Weapon` class, hence making `Weapon` a superclass and making `Catalyst` a subclass.

This gives `Catalyst` all the same fields and methods as `Weapon`, yet allows its code to focus exclusively on the features that make it unique. This makes code for your subclasses easy to read. However, since that code will not be present in the source file of every subclass, you have to be careful to thoroughly explain the additional states and behaviors that each superclass defines.

### Changing defined properties for a subclass

Let's say our `Weapon` class looks a little bit like this

```java
public class Weapon {
	public int damage;
	public int range;
	public int attackSpeed;

	Weapon(int damage, float range, float attackSpeed) {
		this.damage = damage;
		this.range = range;
		this.attackSpeed = attackSpeed;
	}

	public void attack(LivingEntity target) {
		target.health -= this.damage;
	}
}
```

If we are using a `Catalyst`, they do a specific amount of damage. What if this player is weak to that type of damage? What if the player is resistant to that damage? Well, what we would know is that our `attack()` method isn't good enough to support this. Luckily, we have a way to change that method. 

Since `Catalyst` is a subclass of `Weapon`, it inherited the `attack()` method. Now, we can use the `@Override` notation to change this method to support damage resistances and weaknesses.

```java
class Catalyst extends Weapon {
	public String damageType;

	Catalyst(int damage, float range, float attackSpeed, String damageType) {
		super(int damage, float range, float attackSpeed);
		this.damageType = damageType;
	}

	@Override
	public void attack(LivingEntity target) {
		// Wide Type Casting, (double) is not needed.
		double finalDamage = this.damage;

		for (String resistance : target.resistances) {
			if (this.damageType.equals(resistance)) finalDamage *= 0.5; 
		}

		for (String weakness : target.weaknesses) {
			if (this.damageType.equals(weakness)) finalDamage *= 1.5; 
		}

		target.health -= finalDamage;
	}
}
```

::: tip
If you've got a keen eye, you might've seen the `super` keyword inside the constructor declaration for `Catalyst`. We will explain this in a further section, but if you want to jump over there, you can click [here](#subclass-constructors)
:::

Here, we can see that if our `damageType` is in the target's resistances, we decrease our `finalDamage` by `50%`. If our `damageType` is in the target's weaknesses, we increase our `finalDamage` by `150%`. As you can see, we have successfully supported damage resistances and weakness, changing the damage as necessary.

## What is Polymorphism?

According to the dictionary definition, polymorphism is the biological concept that an organism or species can exist in multiple forms or phases. This principle can also be applied to object-oriented programming and languages like the Java language. Subclasses of a class can define their own unique behaviors and yet share some of the same functionality of the parent class.

Polymorphism can be demonstrated with a minor modification to the `Weapon` class. For example, we could add a `printDamage()` method to the class that displays the damage dealt, then add this method to the tail of the `attack()` method.
```java
public class Weapon {
	private int damage;
	private float range;
	private float attackSpeed;

	Weapon(int damage, float range, float attackSpeed) {
		this.damage = damage;
		this.range = range;
		this.attackSpeed = attackSpeed;
	}

	public void attack(LivingEntity target) {
		target.health -= this.damage;
		
		this.printDamage(this.damage);
	}
	
	public void printDamage(double amount) {
		System.out.printf("You did %.1f damage!\n", amount);
	}
}
```

To demonstrate polymorphic features in the Java language, we will use the `Catalyst` class that was demonstrated in the previous section, then add the type of damage you dealt to the output created by the `printDamage()` method.
```java
class Catalyst extends Weapon {
	private String damageType;

	Catalyst(int damage, float range, float attackSpeed, String damageType) {
		super(int damage, float range, float attackSpeed);
		this.damageType = damageType;
	}

	@Override
	public void attack(LivingEntity target) {
		// Wide Type Casting, (double) is not needed.
		double finalDamage = this.damage;

		for (String resistance : target.resistances) {
			if (this.damageType.equals(resistance)) finalDamage *= 0.5; 
		}

		for (String weakness : target.weaknesses) {
			if (this.damageType.equals(weakness)) finalDamage *= 1.5; 
		}

		target.health -= finalDamage;

		this.printDamage(finalDamage);
	}
	
	@Override
	public void printDamage(double amount) {
		System.out.printf("You did %.1f %s damage!\n", amount, this.damageType);
	}
}
```
Note the overriden `printDamage()` method. In addition to the amount of damage, we also provided the type of damage dealt.

We will also create the `Bow` class. Because bows use a projectile to deal damage, we'll output that as well.
```java
class Bow extends Weapon {
	private String projectile;
	private int drawPower = 0.25;

	Bow(int damage, float range, float attackSpeed) {
		super(int damage, float range, float attackSpeed);
	}

	@Override
	public void attack(LivingEntity target) {
		double finalDamage = this.damage * (drawPower / 10);

		target.health -= finalDamage;
		this.drawPower = 0.25;

		this.printDamage(finalDamage);
	}

	@Override
	public void printDamage(double amount) {
		System.out.printf("You did %.1f damage using an %s!\n", amount, this.projectile);
	}

	public void load(String projectile) {
		this.projectile = projectile;
	}

	public void draw() {
		if (this.drawPower == 0.25) this.drawPower = 1;
		
		if (this.drawPower < 3) this.drawPower += 1;
	}
}
```

Now, there are two classes: `Weapon`, `Catalyst`, and `Bow`. The two subclasses override the `printDamage()` method and print the damage along with some other infomation.

Here is a test program that creates three `Weapon` variables. Each variable is assigned to one of the three weapon classes, then each variable has their `attack()` method called.

```java
public class TestWeaponry {
	public static void main(String[] args){
		LivingEntity dummy = new LivingEntity(100);
		Weapon weapon1, weapon2, weapon3;
		
		weapon1 = new Weapon(20, 1.2F, 1F);
		weapon2 = new Catalyst(10, 3.0F, 1.2F, "Water");
		weapon3 = new Bow(15, 2.75F, 5F);

		weapon3.load("Arrow");
		weapon3.draw();
		
		weapon1.attack(dummy);
		weapon2.attack(dummy);
		weapon3.attack(dummy);
	}
}
```
The following should be the output from the test program:
```txt
You did 20.0 damage!
You did 10.0 Water damage!
You did 15.0 damage using an Arrow!
```
Now, how did this happen? Wasn't the type `Weapon`? This is because the JVM invokes each variable's corresponding method for the object it refers to, not the variable's type. This behavior, which is known as virtual method invocation, illustrates one of the important polymorphism features that can be found in the Java language.

### Using the super keyword

#### Accessing Superclass Members

If your method overrides one of its superclass's methods, you can invoke the overridden method through the use of the `super` keyword. You can also use `super` to refer to a hidden field. Let us go back to `Weapon` and `Catalyst`.

```java
public class Weapon {

	// ...
	
	public void printDamage(double amount) {
		System.out.printf("You did %.1f damage!\n", amount);
	}
}
```

```java
class Catalyst extends Weapon {
	private String damageType;

	// ...

	@Override
	public void printDamage(double amount) {
		System.out.printf("You did %.1f %s damage!\n", amount, this.damageType);
	}
}
```

Here, you can see that `Catalyst` overrides the `printDamage()` method from `Weapon`. Within `Catalyst`, the simple `printDamage()` method will refer to the one declared in `Catalyst`, which overrides the one in `Weapon`. To refer to `printDamage()` from `Weapon`, you use the `super` keyword, which allows you to refer to `printDamage` from `Weapon` instead of `Catalyst`. 

#### Subclass Constructors

As you might've seen earlier, our `Bow` and `Catalyst` classes were using the `super` keyword inside their constructors. When a subclass extends on a superclass, the invocation of the superclass constructor must be the first line in the subclass constructor. The  syntax for calling a superclass constructor is

```java
super()
```
or
```java
super(parameter list)
```
With `super()`, the superclass no-argument constructor is called. With `super(parameter list)`, the superclass constructor with a matching parameter list is called, assuming that the subclass has a constructor with the same parameter list.

::: warning
If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. If the super class does not have a no-argument constructor, you will get a compile-time error.
:::

Let us refer to our `Catalyst` and `Weapon` class as an example.
```java
public class Weapon {
	public int damage;
	public int range;
	public int attackSpeed;

	Weapon(int damage, float range, float attackSpeed) {
		this.damage = damage;
		this.range = range;
		this.attackSpeed = attackSpeed;
	}
	// Weapon methods
}
```
Here, we can see the constructor of the `Weapon` class, which is `Weapon(int damage, float range, float attackSpeed)`. Since our `Catalyst` class extends the `Weapon` class, we have to invoke the `Weapon` constructor inside the `Catalyst` constructor, like so.
```java
class Catalyst extends Weapon {
	private String damageType;

	Catalyst(int damage, float range, float attackSpeed, String damageType) {
		// This invokes the Weapon class constructor.
		super(int damage, float range, float attackSpeed);
		this.damageType = damageType;
	}

	// Catalyst methods
}
```
Whenever a subclass extends a superclass, you must invoke the constructor of the superclass through the `super` keyword.

If we didn't do this, we'd get an error, but let's imagine that there is no error, and we wrote the `Catalyst` class like so,
```java
class Catalyst extends Weapon {
	private String damageType;

	Catalyst(int damage, float range, float attackSpeed, String damageType) {
		this.damageType = damageType;
	}

	// Catalyst methods
}
```
We'd end up with an incomplete `Catalyst`. Since we only set the `damageType`, we can't really properly use this catalyst since it's incomplete, since the `Weapon` constructor is in charge of setting the `damage`, `range` and `attackSpeed`. This is why the superclass constructor is always invoked: because the subclass just *extends* on the superclass, not create an entirely new class, and the superclass constructor may need some parameters for it's variables, so you need to input said variables to properly create a new superclass, then properly create a new subclass.

#### Final Classes and Methods

You can declare some or all of a class's methods final. You use the `final` keyword in a method declaration to indicate that the method cannot be overridden by subclasses.

You might wish to make a method final if it has an implementation that should not be changed and is critical to the consistent state of the object. For example, you might want to make the `getFirstPlayer()` method in this `ChessAlgorithm` class final:
```java
class ChessAlgorithm {
    enum ChessPlayer { WHITE, BLACK }
    // ...
    final ChessPlayer getFirstPlayer() {
        return ChessPlayer.WHITE;
    }
    // ...
}
```
Methods called from constructors should generally be declared final. If a constructor calls a non-final method, a subclass can redefine that method which would probably lead to surprising or undesirable results.

Note that you can also declare an entire class final. A `final` class cannot be subclassed. This is particularly useful, for example, when creating an immutable class like the `String` class.

### Method Overloading
The Java programming language supports overloading methods, and Java can distinguish between methods with different method signatures. This means that methods within a class can have the same name if they have different parameter lists. Additionally, since constructors are considered methods, they also support overloading.

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

Let's go back to our `CharacterCard` example. Say we just want to create a new character card with a predefined amount of health and energy. We can do so by creating another constructor.

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

	public CharacterCard(String name, int damage) {
		this.name = name;
		this.damage = damage;
		
		this.health = 10;
		this.maxHealth = 10;
		this.energy = 0;
		this.maxEnergy = 3;
	}

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

Now, we can create a character card with predefined max health and energy, or create a character card with a custom max health and energy!

::: tip
Overloaded methods should be used sparingly, as they can make code much less readable.
:::

## What is Abstraction?

An abstract class is a class that is declared `abstract` — it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed. These classes are mostly used as templates for closely related classes with very similar implementations.

An abstract method is a method that is declared without an implementation (without braces, and followed by a semicolon), like this:
```java
abstract void addVelocity(double x, double y, double z);
```

If a class includes abstract methods, then the class itself must be declared `abstract`, as in:
```java
public abstract class LivingEntity {
	// declare fields
	// declare nonabstract methods
	
	abstract void addVelocity(double x, double y, double z);
}
```
When a subclass extends an abstract class, the subclass should provide implementations for all of the abstract methods in its parent class. If it does not, then the subclass must also be declared `abstract`. Additionally, the usage of the `@Override` annotation is not required when the subclass provides implementations for abstract methods.


## What is an Interface?

In the Java programming language, an interface is a reference type, similar to a class, but can contain only constants, method signatures, default methods, static methods, and nested types. Method bodies exist only for default methods and static methods. Interfaces cannot be instantiated — they can only be implemented by classes or extended by other interfaces, which is discussed later in this section.

Defining an interface is similar to creating a new class:
```java
public enum Direction = { RIGHT, LEFT };

public interface OperateCar {

   // constant declarations, if any

   // method signatures   
   int turn(Direction direction, double radius, double startSpeed, double endSpeed);
   int changeLanes(Direction direction, double startSpeed, double endSpeed);
   int signalTurn(Direction direction, boolean signalOn);
   int getRadarFront(double distanceToCar, double speedOfCar);
   int getRadarRear(double distanceToCar, double speedOfCar);
   
   // more method signatures
}
```
Do note that methods inside interfaces have no braces and are terminated with a semicolon.

To use an interface, you have to write a class that implements the interface. When an instantiable class implements an interface, it provides a method body for each of the methods declared in the interface. For example,

```java
public class OperateBugatti implements OperateCar {
    // the OperateCar method signatures, with implementation --
    // for example,
    public int signalTurn(Direction direction, boolean signalOn) {
       // code to turn the Bugatti's LEFT turn indicator lights on
       // code to turn the Bugatti's LEFT turn indicator lights off
       // code to turn the Bugatti's RIGHT turn indicator lights on
       // code to turn the Bugatti's RIGHT turn indicator lights off
    }

    // other members, as needed -- for example, helper classes not 
    // visible to clients of the interface
}
```

In the AI-powered car example above, the car manufacturers will be the ones to implement the interface. Bugatti's implementation will be significantly different from Toyota's, but both manufacturers will still adhere to the same interface. The guidance manufacturers, who are the clients of the interface, will build systems that use GPS data on a car's location, digital street maps, and traffic data to drive the car. In doing so, the guidance systems will invoke the interface methods: `turn()`, `changeLanes()`, `brake()`, `accelerate()`, and so on and so forth.

To create an interface by creating another interface, you can do it like so:
```java
public interface OperateCar extends OperateVehicle {
	// ...
}
```

Additionally, you can implement multiple interfaces like so:
```java
public interface InterfaceABC extends InterfaceA, InterfaceB, InterfaceC {

}

public class ClassABC implements InterfaceA, InterfaceB, InterfaceC {

}
```
::: warning
Take note that you use the `extends` keyword when using another `interface` to **extend** your `interface`. If you will **implement** this interface to a class, use the `implements` keyword.
:::





## Abstract vs Interface

Abstract classes are similar to interfaces. You cannot instantiate them, and they may contain a mix of methods declared with or without an implementation. However, with abstract classes, you can declare fields that are not static and final, and define `public`, `protected`, and `private` concrete methods. With interfaces, all fields are automatically `public`, `static`, and `final` by default, and all methods that you declare or define (as default methods) are `public`. In addition to this, you can extend only one class, whether or not it is abstract, whereas you can implement multiple interfaces at the same time.

Now, you may be wondering, "Which should I use? Abstract classes or interfaces?". Here is a handy little guide to help you with that.

- Consider abstract classes if:
	- You want to share code among several closely related classes
	- You expect that classes that extend your abstract class have many common methods or fields, or require access modifiers other than `public` (such as `protected` and `private`).
	- You want to declare non-static or non-final fields. This enables you to define methods that can access and modify the state of the object to which they belong.
- Consider interfaces if:
	- You expect that unrelated classes would implement your interface.
	- You want to specify the behavior of a particular data type, but not concerned about who implements its behavior.
	- You want to take advantage of multiple type inheritance.

## What is Encapsulation?

In Object-Oriented Programming, encapsulation refers to the hiding of method implementations and fields outside the class. This restricts programmers from touching any variables inside your class, and requires them to use the `get` and `set` methods to access what they need.

### Access modifiers

We've been using the keywords `static`, `public`, `protected`, and `private` for quite a while now, but you probably don't quite get just what are these keywords, and what do they do. These are usually called as "access modifiers", since they can modify access to a certain class, field, method, etc.

A `public` keyword means that this is accessible anywhere. For example,
```java
public class LivingEntity { 
	// ...
}
```
This means that the `LivingEntity` class is accessible anywhere and everywhere, so long as you import it.

A `protected` keyword means that this method or field is accessible only to the package it is in and the subclasses that extend on the superclass that contains the said method or field. For example,
```java
public class LivingEntity {
	protected World world;
}

public class PlayerEntity extends LivingEntity {
	public World getWorld() {
		// This extends LivingEntity, therefore it has access to the world field.

		return this.world;
	}
}
```
Here is an example with `protected` methods.
```java
public class LivingEntity {
	protected void say(String message) {
		System.out.printf("[%s] %s\n", this.name, message);
	};
}

public class PlayerEntity extends LivingEntity {
	public void say(String message) {
		// This extends LivingEntity, therefore it has access to the say method inside LivingEntity.

		super.say(message);
	}
}
```

A `private` keyword means that this method or field is only accessible within the class it is declared in. For example,
```java
public class LivingEntity {
	private String id;
}

public class PlayerEntity extends LivingEntity {
	public String getId() {
		// Even if this extends LivingEntity, since id is private, PlayerEntity has no access to the id field.
	
		return this.id;
	}
}
```

A `static` keyword means that this method or field is accessible without having to instantiate the class.
```java
public class LivingEntity {
	public static World world;
}
```
Here, this means that the `world` field is accessible even without instantiating `LivingEntity`. You can access it like so,
```java
LivingEntity.world;
```

This is also the same for methods. Let's say we have a `Functions` class which hosts a bunch of useful functions.
```java
public class Functions {
	public static String makeId() {
		// ...
	}
}
```
We can access the `makeId()` function like so,
```java
Functions.makeId();
```

::: warning
Do note that you can't use `protected`, `private` or `static` on top-level classes (classes that aren't nested in another class). This is because top-level classes are `public` by default.
:::

### Accessors and Mutators

Also known as setters and getters, these are methods that allow interaction for private class fields.

An accessor or getter is a method that returns the value of the private field inside the class. Usually, this is prefixed with `get` and the field name, for example, `getDamage()`.

A mutator or setter is a method that modifies the value of the private field inside the class. Usually, this is prefixed with `set` and the field name, for example, `setDamage()`.