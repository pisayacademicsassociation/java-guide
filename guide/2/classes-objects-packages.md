# Classes, Objects, and Packages

## What is an object?
An object is a bundle of states and behaviors. In the real world, we can observe that dogs can have states (name, color, breed, hungry) and behaviors (barking, fetching, wagging tail). Bicycles can also have states (current gear, current pedal cadence, current speed) and behaviors (changing gear, changing pedal cadence, applying brakes).

Software objects consist of states and related behaviors. An object stores its state in *fields* (variables in other programming languages) and exposes its behavior through *methods* (functions in some programming languages).

For this guide, we will refer to our imaginary trading card game, with all sorts of cards and characters. A character in this game could have all kinds of states (name, current and maximum health, current and maximum energy, skills) and behaviors (take damage, deal damage, heal), which would be our object, created using a class.

By attributing states (current health, current energy) and providing methods for changing that state, the object remains in control of how the outside world is allowed to use it. For example, if your character has a max health of 10, a method to heal this character should automatically handle healing overflows and limit the current health to 10.

Bundling code into individual software objects provides several benefits, including:
1. Modularity: You can write and independently maintain an object's source code from other objects' source code. Once created, these objects can be quickly passed around inside the system.
2. Information-hiding: By interacting only with an object's methods, the details of its internal implementation remain hidden from the outside world.
3. Code re-use: If an object already exists, you can use that object in your program, allowing other programmers to implement/test/debug complex, task-specific objects, which you can most likely trust to run in your code.
4. Pluggability and debugging ease: If a particular object is problematic, you can remove it from your application and replace it with a different object. This is analogous to fixing mechanical problems in the real world. For example, if a bolt breaks, you replace it, not the entire machine.

## What is a class?
You will often find many individual objects of the same kind in your applications. There may be thousands of other characters; however, each character is created from the same set of blueprints and, therefore, contains the same components. In object-oriented terms, we say that your character is an instance of the class of objects known as characters, or in simpler terms, an object created from the class of objects called characters. A class is a blueprint from which individual objects are made from.

From our character example above, we can create a possible implementation of a character using the `CharacterCard` class:
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

::: tip
If you have a keen eye, you may have noticed the `return` keyword prepended by an if-statement. In programming, this approach is commonly called an **"early return"**, which is when you use the `return` keyword early to end the method. 

Let us use our `takeDamage()` method as an example.
```java
void takeDamage(int damage) {
    this.health -= damage;

    if (this.health < 0) return;

    this.health = 0;
    this.energy = 0;
    this.dead = true;
}
```
Here, we can see that the method returns early when the character's health is greater than 0. If it's not, we set the character's health and energy to 0 and consider them dead.

The primary reason behind using early returns is to improve code readability and maintainability. By returning early, you can avoid deeply nested if-else statements, which can make the code hard to read and understand. It also helps to reduce the code's complexity, making it easier to add new changes.
:::

Here, the design of the `CharacterCard` class is based on the previous discussion of characters. The fields name, health, energy, etc., represent the object's state, and the methods (takeDamage(), dealDamage(), heal(), etc.) define its interaction within the game.

The syntax for creating an object from a class can be found below.
```java
ClassName myClass = new ClassName(args);
```
where `ClassName` is the name of the class, `myClass` is the variable name, and `args` are arguments/parameters passed to the `ClassName` constructor.

::: tip
Constructors are explained more in-depth in a later section, over [here](../2/classes-extension.html#defining-class-constructors).
:::

Let us try to create a new character using our `CharacterCard` class. 
```java
CharacterCard myCharacter = new CharacterCard("myCharacter", 2.0, 10, 3);
```
The code above creates a new `CharacterCard` named `"myCharacter"`, who can deal `2.0` damage, has a maximum of `10` HP, and a maximum of `3` Energy.

## What is a package?
A package is a namespace that organizes related classes and interfaces. Conceptually, you can think of packages similar to different folders on your computer. If you still remember HTML, CSS, and JS (CS 3), you might have the convention to keep HTML pages in one folder, images in another, and scripts or applications in another. Because software written in Java can be composed of many individual classes, keeping things organized by placing related classes and interfaces into packages makes sense.

A package is declared using the `package` keyword, followed by the name at the top of the Java file.

```java
package tcg;

class CharacterCard {
    // ...
}
```

Additionally, packages are **case-sensitive**, which means that the package `tcg` is not equal to `TCG` or `tCg`.

Do also note that the package name needs to match the folder name. For example, imagine we have a class called `TCGClient`, stored in the `/tcg/` folder. The proper package name would be `tcg`.