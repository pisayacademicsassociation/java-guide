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
| MouseEvent      | emitted when the mouse is moved, clicked, pressed, released, when it enters or exits a component, etc. | MouseListener or MouseMotionListener      |
| MouseWheelEvent | emitted when the mouse wheel is moved                                                                  | MouseWheelListener |
| KeyEvent        | emitted when input is recieved from the keyboard.                                                      | KeyListener        |
| ItemEvent       | emitted when a checkbox or list item is clicked.                                                       | ItemListener       |
| TextEvent       | emitted when the value of a `JTextArea` or `JTextField` is changed.                                    | TextListener       |
| WindowEvent     | emitted when the window is opened, closed, activated, deactivated, etc.                                | WindowListener, WindowFocusListener or WindowStateListener     |
| FocusEvent      | emitted when a component gains or loses keyboard focus                                                 | FocusListener      |
	
Listener interfaces can be imported through the `java.awt.event` package. 

## Creating GUI event handlers (Apache NetBeans)

If you are using the NetBeans IDE, creating an event handler is as easy as pie!

First, select the component you want to create an event handler for. 

<img src="./media/netbeans_evt_handler_step1.png" class="center x50">

For us, this is a `JButton` with the variable name `myButton`.

Now, navigate to the "Events" tab.

<img src="./media/netbeans_evt_handler_step2.png" class="center x50">

You should see a bunch of event listeners listed out for you.

<img src="./media/netbeans_evt_handler_step3.png" class="center x50">

If you want to add an event listener, you can click the `<none>` beside the event you want to add a listener.

<img src="./media/netbeans_evt_handler_step4.png" class="center x50">

Clicking the function will automatically generate an event listener for you. NetBeans will also automatically navigate you to that generated listener.

<img src="./media/netbeans_evt_handler_step5.png" class="center x50">

## Event and Event Listeners

### KeyEvent and KeyListener

When you type something on your keyboard, the **KeyEvent** is emitted. There are three types of key events that you can listen to, which are:
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

### MouseEvent and MouseListener, MouseMotionListener, MouseAdapter

When a mouse action is performed on a component, a **MouseEvent** is emitted. There are seven mouse events you can listen to, which are:
- `MOUSE_CLICKED`
- `MOUSE_ENTERED`
- `MOUSE_EXITED`
- `MOUSE_PRESSED`
- `MOUSE_RELEASED`
- `MOUSE_DRAGGED`
- `MOUSE_MOVED`

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

Now, what's unique about `MouseEvent` is that instead of having one listener interface for all these events, you have two, all of which implement different event listeners. Below is a list of which listener interface you should implement each event listener in.

For the `MouseListener` interface, you need to implement five methods.
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

For the `MouseMotionListener` interface, you need to implement two methods.
```java
public void mouseDragged(MouseEvent e);
public void mouseMoved(MouseEvent e);
```
- `mouseDragged` is called when the mouse is dragged while it's on the component. (dragged means the mouse is currently held down and is moving at the same time)
- `mouseMoved` is called when the mouse moves across the component.

If you don't plan to use all the methods inside a listener interface, or would want to use methods from multiple interfaces, you should consider using the `MouseAdapter` abstract class instead. The `MouseAdapter` provides implementations for all the methods from `MouseListener` and `MouseMotionListener`, and can be used in both the `addMouseListener()` and `addMouseMotionListener()` method. All you have to do is `@Override` the method you want to use.

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

When an item is selected or deselected, an **ItemEvent** is emitted. There is only one item event you can listen to, which is:
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

### WindowEvent and WindowListener, WindowStateListener, WindowFocusListener, WindowAdapter

When the current window is activated, moved, resized, closed, etc., a **WindowEvent** is emitted. There are ten window events you can listen to, which are:
- `WINDOW_ACTIVATED`
- `WINDOW_CLOSED`
- `WINDOW_CLOSING`
- `WINDOW_DEACTIVATED`
- `WINDOW_DEICONIFIED`
- `WINDOW_ICONIFIED`
- `WINDOW_OPENED`
- `WINDOW_LOST_FOCUS`
- `WINDOW_GAINED_FOCUS`
- `WINDOW_STATE_CHANGED`

The class that will handle `WindowEvent`s should implement the `WindowListener`, `WindowStateListener`, or the `WindowFocusListener` interface. The object/instance of that class must be registered with a component using the `addWindowListener()`, `addWindowStateListener()`, or the `addWindowFocusListener()` method, respectively, for it to be able to listen for events.

```java
public class MyJFrame extends JFrame {
	public MyJFrame() {
		// MyWindowListener is the class that is implementing the `WindowListener` interface.
		this.addWindowListener(new MyWindowListener());
		// MyWindowStateListener is the class that is implementing the `WindowStateListener` interface.
		this.addWindowStateListener(new MyWindowStateListener());
		// MyWindowFocusListener is the class that is implementing the `WindowFocusListener` interface.
		this.addWindowFocusListener(new MyWindowFocusListener());
	}

	// ...
}
```

For the `WindowListener` interface, you need to implement seven methods.
```java
public void windowOpened(WindowEvent e);
public void windowClosing(WindowEvent e);
public void windowClosed(WindowEvent e);
public void windowIconified(WindowEvent e);
public void windowDeiconified(WindowEvent e);
public void windowActivated(WindowEvent e);
public void windowDeactivated(WindowEvent e);
```

- `windowOpened` is called when the window is opened.
- `windowClosing` is called before the window is closed.
- `windowClosed` is called when the window is closed.
- `windowIconified` is called when the window is minimized.
- `windowDeiconified` is called when the window is un-minimized (not maximized).
- `windowActivated` is called when the window is set to be the active window.
- `windowDeactivated` is called when the window is no longer the active window.

For the `WindowFocusListener` interface, you need to implement two methods.
```java
public void windowLostFocus(WindowEvent e);
public void windowGainedFocus(WindowEvent e);
```

- `windowLostFocus` is called when the window loses focus.
- `windowGainedFocus` is called when the window gains focus.

For the `WindowStateListener` interface, you need to implement just one method.
```java
public void windowStateChanged(WindowEvent e)
```

- `windowLostFocus` is called when the window state is changed.

If you don't plan to use all the methods inside a listener interface, or would want to use methods from multiple interfaces, you should consider using the `WindowAdapter` abstract class instead. The `WindowAdapter` provides implementations for all the methods from `WindowListener`, `WindowStateListener`, and `WindowFocusListener`, and can be used in the `addWindowListener()`, `addWindowStateListener()`, and the `addWindowFocusListener()` method. All you have to do is `@Override` the method you want to use.



<style>
	.center {
		display: block; 
		margin-left: auto; 
		margin-right: auto;
	}

	.x50 {
		height: 50%;
		width: 50%
	} 

	.x75 {
		height: 75%;
		width: 75%
	} 
</style>