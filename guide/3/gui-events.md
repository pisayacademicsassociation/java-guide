# Handling events in a GUI

::: tip
This page may use terms that are defined in the [Definition of Terms](../2/oop.md#definition-of-terms).
:::

In a GUI, there are instances where if a user does a certain thing, you want to execute something based off that. Lets say you want to do something when a user inputs a certain amount of characters, drags an item across a screen, or clicks a button. How would we do that using a GUI?

We can do so by using Events! But, what exactly are events?

Events are part of the Event-driven programming paradigm. A program on this specific paradigm relies on events to trigger certain methods that can affect the response of the program. Think of this paradigm as your human skin. Normally, when you touch something, you won't do anything. However, when your finger touches a hot surface, your skin (source) sends a signal to your brain (event), then your brain responds by immediately lifting that finger off the surface and blowing air on it (event handler).

## What is event handling?

Event handling is a process where an event handler (usually a method or function) listens and responds to a triggered event, created by a source.

Why would you choose an event-driven programming paradigm? This is because there can be special cases in your code where you only want to execute an action when something happens, which are usually external occurences or user actions. Let us use the example above again: your brain isn't constantly checking how hot or cold the things you are touching, rather the skin sends a signal to your brain to let it know that it has touched something hot. In the case of our GUI, we don't consistently check if the user is doing a specific thing, rather we wait for the user to do a specific thing, then do something based off that.

## Components of handling GUI events

- **Source** - This is the object or instance where the event comes from.
- **Event** - This is an event that represents a specific occurrence or action that takes place within the GUI. This can include user interactions such as button clicks, mouse movements, key presses, or other activities that the program needs to respond to.
- **Event handler/Event listener/Listener** - This is the method responsible for the event response. When an event is emitted/triggered, the event listener is called. 

## Creating GUI event handlers

Okay, now that we know what is event handling and the parts of event handling, we can now move on to creating event handlers for specific events.

If you are using the [Apache Netbeans IDE](netbeans link), refer to [this](#creating-gui-event-handlers-apache-netbeans) part of the page: [Creating GUI event handlers](#creating-gui-event-handlers-apache-netbeans)

To create an event handler for a Java GUI, you need to create a new class that extends the listener interface of the event you want, then register it. Each ListenerInterface has their own way of registering listeners, which will be discussed in each subsection.

```java
class MyListener implements ListenerInterface {
	// methods to be implemented
}
```
`ListenerInterface` is the listener interface that corresponds to the event you want to listen for.


Refer to this table for a list of the most common event classes and their listener interfaces.
|   Event/Source  |                                               Description                                              | Listener Interface |
|-----------------|--------------------------------------------------------------------------------------------------------|--------------------|
| ActionEvent     | emitted when a button is pressed, a menu item is selected, a list item is double-clicked, etc.         | ActionListener     |
| MouseEvent      | emitted when the mouse is moved, clicked, pressed, released, when it enters or exits a component, etc. | MouseAdapter or MouseMotionAdapter      |
| MouseWheelEvent | emitted when the mouse wheel is moved                                                                  | MouseWheelListener |
| KeyEvent        | emitted when input is recieved from the keyboard.                                                      | KeyListener        |
| ItemEvent       | emitted when a checkbox or list item is clicked.                                                       | ItemListener       |
| TextEvent       | emitted when the value of a `JTextArea` or `JTextField` is changed.                                    | TextListener       |
| WindowEvent     | emitted when the window is opened, closed, activated, deactivated, etc.                                | WindowListener     |
| FocusEvent      | emitted when a component gains or loses keyboard focus                                                 | FocusListener      |
	
Listener interfaces can be imported through the `java.awt.event` package. 

## Creating GUI event handlers (Apache NetBeans)

[explain how to register event handlers using netbeans, images, etc.]

## Event and Event Listeners

### KeyEvent and KeyListener

When you type something on your keyboard, the **KeyEvent** is emitted. There are three types of key events that you can listen to, which are the following:
- `KEY_PRESSED`
- `KEY_RELEASED`
- `KEY_TYPED`

The class that will handle `KeyEvent`s should implement the `KeyListener` interface. The object/instance of that class must be registered with a component using the `addKeyListener(KeyListener)` method for it to be able to listen for events.

```java
// ...

TextField textField = new JTextField(10);
// MyKeyListener is the class that is implementing the `KeyListener` interface.
textField.addKeyListener(new MyKeyListener());

// ...
```

If you would like to check if the user pressed a specific key, then you can do so by using `KeyEvent#getKeyCode()`. However, this returns a number, which corresponds to a specific key. So, how do we find what key they pressed? Well, the `java.awt.event.KeyEvent` class has a list of static fields that represents all the keys from the keyboard as `int`, so you can compare them like so:
```java
// e represents an instance of KeyEvent.
e.getKeyCode() == KeyEvent.VK_ENTER 
```
You can find the list of keys and their corresponding static field [here](https://www.tutorialspoint.com/awt/awt_key_event.htm).

For the `KeyListener` interface, you need to implement three methods.
```java
public void keyPressed(KeyEvent e);
public void keyReleased(KeyEvent e);
public void keyTyped(KeyEvent e);
```
- `keyPressed` is called when a key has been pressed. (pressing down on a key)
- `keyReleased` is called when a key has been released. (removing finger from the key)
- `keyTyped` is called when a key has been typed. (input has been recieved)

`keyPressed` and `keyReleased` are called when any key is pressed, but `keyTyped` is called when input is "typed". For example, imagine typing `Shift + A` to type `A`. You'd get two `keyPressed` triggers, then a single `keyTyped`. This is because `keyTyped` is only triggered when text is "typed", so pressing `Shift`, `Escape`, etc. wont trigger the `keyTyped` event, since using these keys normally don't result in them typing out characters.

### ActionEvent and ActionListener

When an action is performed on a component, the **ActionEvent** is emitted. There is only one type of action event you can listen to, which is:
- `ACTION_PERFORMED`

The class that will handle `ActionEvent`s should implement the `ActionListener` interface. The object/instance of that class must be registered with a component using the `addActionListener(ActionListener)` method for it to be able to listen for events.

```java
// ...

Button myButton = new Button();
// MyActionListener is the class that is implementing the `ActionListener` interface.
textField.addActionListener(new MyActionListener());

// ...
```

For the `ActionListener` interface, you need to implement just one method.
```java
public void actionPerformed(ActionEvent e);
```
- `actionPerfomed` is called when a component-specific action has been performed on the object, for example: a `JButton` getting clicked.

### MouseEvent and MouseListener, MouseMotionListener

When a mouse action is performed on a component, a **MouseEvent** is emitted. There are seven mouse events you can listen to, which is:
- `MOUSE_CLICKED`
- `MOUSE_ENTERED`
- `MOUSE_EXITED`
- `MOUSE_PRESSED`
- `MOUSE_RELEASED`
- `MOUSE_DRAGGED`
- `MOUSE_MOVED`

// MouseEvents are divided into MouseListener, MouseMotionListener, and MouseWheelListener. Perhaps divide into sections instead?

The class that will handle `MouseEvent`s should implement the `MouseListener` or `MouseMotionListener` interface. The object/instance of that class must be registered with a component using the `addMouseListener(MouseListener)` or `addMouseMotionListener(MouseMotionListener)` method, respectively, for it to be able to listen for events.

```java
// ...

Button myButton = new Button();
// MyMouseListener is the class that is implementing the `MouseListener` interface.
myButton.addMouseListener(new MyMouseListener());
// MyMouseMotionListener is the class that is implementing the `MouseMotionListener` interface.
myButton.addMouseMotionListener(new MyMouseMotionListener());

// ...
```

Now, what's unique about `MouseEvent` is that instead of having one listener interface for all these events, you have three, all of which implement different event listeners. Below is a list of which listener interface you should implement each event listener in.

For the `MouseAdapter` interface, you need to implement five methods.
```java
public void mouseClicked(MouseEvent e);
public void mouseEntered(MouseEvent e);
public void mouseExited(MouseEvent e);
public void mousePressed(MouseEvent e);
public void mouseReleased(MouseEvent e);
```
- `mouseClicked` is called when the mouse clicks the component.
- `mouseEntered` is called when the mouse enters the component.
- `mouseExited` is called when the mouse exits the component.
- `mousePressed` is called when the mouse is pressed while on the component.
- `mouseReleased` is called when the mouse is released while on the component.

For the `MouseMotionAdapter` interface, you need to implement two methods.
```java
public void mouseDragged(MouseEvent e);
public void mouseMoved(MouseEvent e);
```
- `mouseDragged` is called when the mouse is dragged while it's on the component. (dragged means the mouse is currently held down and is moving at the same time)
- `mouseMoved` is called when the mouse moves across the component.

### MouseWheelEvent and MouseWheelListener

When a mouse wheel is moved while the mouse is on a component, a **MouseWheelEvent** is emitted. There only one mouse wheel event you can listen to, which is:
- `MOUSE_WHEEL_MOVED`

The class that will handle `MouseWheelEvent`s should implement the `MouseWheelListener` interface. The object/instance of that class must be registered with a component using the `addMouseWheelListener(MouseWheelListener)`method for it to be able to listen for events.

```java
// ...

Button myButton = new Button();
// MyMouseWheelListener is the class that is implementing the `MouseWheelListener` interface.
myButton.addMouseWheelListener(new MyMouseWheelListener());

// ...
```

For the `MouseWheelListener` interface, you need to implement just one method.
```java
public void mouseWheelMoved(MouseWheelEvent e);
```
- `mouseWheelMoved` is called when the mouse wheel is moved/scrolled while the mouse is on the component.

### ItemEvent and ItemListener

When an item is selected or deselected, an **ItemEvent** is emitted. There are two item events you can listen to, which is:
- `ITEM_STATE_CHANGED`

The class that will handle `ItemEvent`s should implement the `ItemListener` interface. The object/instance of that class must be registered with a component using the `addItemListener(ItemListener)`method for it to be able to listen for events.

```java
// ...

Button myButton = new Button();
// MyItemListener is the class that is implementing the `ItemListener` interface.
myButton.addItemListener(new MyItemListener());

// ...
```

For the `ItemListener` interface, you need to implement just one method.
```java
public void itemStateChanged(ItemEvent e);
```

- `itemStateChanged` is called when the state of an item is changed (selected, deselected).