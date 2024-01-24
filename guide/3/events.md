# Handling events in a GUI

In a GUI, there are instances where if a user does a certain thing, you want to execute something based off that. Lets say you want a user to input a certain amount of characters, [add more shit].

We can do that with a GUI using Events! But, what exactly are events?

Events are part of the Event-driven programming paradigm. A program on this specific paradigm relies on events to trigger certain methods that can affect the response of the program. Think of this paradigm as your human skin. Normally, when you touch something, you won't do anything. However, when your finger touches a hot surface, your skin sends a signal to your brain (event), then your brain responds by immediately lifting that finger off the surface and blowing air on it (event handler).

## What is event handling?

Event handling is a process where an event handler (usually a method or function) listens and responds to a triggered event.

Why would you choose an event-driven programming paradigm? This is because there can be special cases in your code where you only want to execute an action when something happens, which are usually external occurences or user actions. Let us use the example above again: your brain isn't constantly checking how hot or cold the things you are touching, rather the skin sends a signal to your brain to let it know that it has touched something hot. In the case of our GUI, we don't consistently check if the user is doing a specific thing, rather we wait for the user to do a specific thing, then do something based off that.

## Components of handling GUI events

- **Event/Source** - This is an event that represents a specific occurrence or action that takes place within the GUI. This can include user interactions such as button clicks, mouse movements, key presses, or other activities that the program needs to respond to.
- **Event handler/Event listener/Listener** - This is the method responsible for the event response. When an event is emitted/triggered, the event listener is called. 

## Creating GUI event handlers

Ok, now that we know what is event handling, and the parts of event handling, we can now move on to creating event handlers for specific events.

To create an event handler for a Java GUI, you need to get a new class that extends the listener interface of the event you want, then register it.

Refer to this table for a list of the most common event classes and their listener interfaces.
|   Event/Source  |                                               Description                                              | Listener Interface |
|-----------------|--------------------------------------------------------------------------------------------------------|--------------------|
| ActionEvent     | emitted when a button is pressed, a menu item is selected, a list item is double-clicked, etc.         | ActionListener     |
| MouseEvent      | emitted when the mouse is moved, clicked, pressed, released, when it enters or exits a component, etc. | MouseListener      |
| KeyEvent        | emitted when input is recieved from the keyboard.                                                      | KeyListener        |
| ItemEvent       | emitted when a checkbox or list item is clicked.                                                       | ItemListener       |
| TextEvent       | emitted when the value of a `JTextArea` or `JTextField` is changed.                                    | TextListener       |
| MouseWheelEvent | emitted when the mouse wheel is moved                                                                  | MouseWheelListener |
| WindowEvent     | emitted when the window is opened, closed, activated, deactivated, etc.                                | WindowListener     |
| FocusEvent      | emitted when a component gains or loses keyboard focus                                                 | FocusListener      |

### KeyEvent and KeyListener

When you type something on your keyboard, the **KeyEvent** is emitted. There are three types of key events that you can listen to, which are the following:
- `KEY_PRESSED`
- `KEY_RELEASED`
- `KEY_TYPED`

The class that will handle KeyEvents should implement the `KeyListener` interface. The object/instance of that class must be registered with a component using the `addKeyListener(KeyListener)` method for it to be able to listen for events.

If you would like to check if the user pressed a specific key, then you can do so by using `KeyEvent#getKeyCode()`. However, this returns a number, which corresponds to a specific key. So, how do we find what key they pressed? Well, the `java.awt.event.KeyEvent` class has a list of static fields that represents all the keys from the keyboard as `int`, so you can compare them like so:
```java
// e represents an instance of KeyEvent.
e.getKeyCode() == KeyEvent.VK_ENTER 
```
You can find the list of keys and their corresponding static field [here](https://www.tutorialspoint.com/awt/awt_key_event.htm).