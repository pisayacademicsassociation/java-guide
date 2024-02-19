# Control Structures

Control structures are statements which allow you to create the logic for your program.

There are three types of control structures: branching statements, looping statements and jumping statements/keyword.

A branching statement chooses between two or more possible actions, a looping statement repeats an action until a stopping condition occurs and a jumping statement/keyword transfers the program's control to a specific location in the code

## If statement

### Syntax
```java
if (condition) {
	statement;
}
```

::: tip
If your statement only contains one line, you can remove the curly braces like so
```java
if (condition) statement;
```
:::

### Logic
If the expression `condition` is `true`, then `statement` is executed. Otherwise, it is ignored and the program moves on.

## If-else statement

### Syntax
```java
if (condition) {
	onTrueStatement;
} else {
	onFalseStatement;
}
```

### Logic
If the expression `condition` is `true`, then `onTrueStatement` is executed. Otherwise, it is ignored and the program executes `onFalseStatement` instead. 

## Nested if-else statement

### Syntax
```java
if (condition_1) {
	if (condition_2) {
		Statement_1;
	} else {
		Statement_2;
	}
} else {
	if (condition_3) {
		Statement_3;
	} else {
		Statement_4;
	}
}
```

### Logic 
If the expression `condition_1` is `true`, it checks if `condition_2` is `true`. If `condition_2` is `true`, `Statement_1` is executed, otherwhise `Statement_2` is executed. If the expression `condition_1` is `false`, it checks if `condition_3` is `true`. If `condition_3` is `true`, `Statement_3` is executed, otherwise `Statement_4` is executed.

## If-else-if statement

### Syntax
```java
if (condition) {
	statement1;
} else if (second_condition) {
	statement2;
} else {
	statement3;
}
```

### Logic 
If the expression `condition` is `true`, `statement1` is executed. Otherwise, checks if `second_condition` is `true`. If `second_condition` is `true`, `statement2` is executed. If `second_condition` is `false`, executes `statement3`.

## Switch statement

### Syntax
```java
switch (variable) {
	case Case1:
		statement_1;
		break;
	case Case2:
		statement_2;
		break;
	case Case3:
		statement_3;
		break;
	default:
		default_statement;
}
```

### Logic
If `variable` is equal to `Case1`, executes `statement_1`, if `variable` is equal to `Case2`, executes `statement_2`, if `variable` is equal to `Case3`, executes `statement_3`, otherwise, executes `default_statement`.

The `break` keyword is used to end the current case statement. If omitted, it will continue down until it sees the `break` keyword. For example:
```java
switch (variable) {
	case Case1:
		statement_1;
	case Case2:
		statement_2;
	case Case3:
		statement_3;
		break;
	case Case4:
		statement_4;
		break;
	default:
		default_statement;
}
```
If `variable` is equal to `Case1`, then `statement_1`, `statement_2` and `statement_3` is executed. It does not execute `statement_4` because it has already seen the `break` keyword, which breaks out of the switch case.

## Try-Catch

### Syntax
```java
try {
	statement_1;
} catch (Exception error) {
	statement_2;
}
```

### Logic 
Executes `statement_1`. If `statement_1` throws an `Exception`, halts execution of `statement_1` and then executes `statement_2`.

## Try-Catch-Finally

### Syntax
```java
try {
	statement_1;
} catch (Exception error) {
	statement_2;
} finally {
	statement_3;
}
```

### Logic 
Executes `statement_1`. If `statement_1` throws an `Exception`, halts execution of `statement_1` and then executes `statement_2`. Once the execution of `statement_1` or `statement_2` finishes, executes `statement_3`.

## Ternary operator

The ternary operator can be used in place of an if-else statement for variable values.

### Syntax
```java
condition ? onTrue : onFalse;
```

### Logic 
If the expression `condition` is `true`, `onTrue` will become the value, otherwise `onFalse` will become the value.

### Example
This:
```java
int max;

if (n1 > n2) max = n1;
else max = n2;
```

Can be written like this:
```java
final int max = (n1 > n2) ? n1 : n2;
```

## While statement

### Syntax
```java
while (condition) {
	statement;
}
```

### Logic
While the expression `condition` is `true`, executes `statement`, until `condition` is `false`.

## Do-while statement

### Syntax
```java
do {
	statement;
} while (condition)
```

### Logic
Executes `statement` once, then checks if the expression `condition` is `true`, If `true`, executes `statement` until `condition` is `false`.

## For statement

### Syntax
```java
for (initialization; condition; update) {
	statement;
}
```

### Example
```java
for (let i = 0; i < 10; i++) {
	System.out.println("amongus");
}
```

### Logic
Executes initialization (this should be an assignment or declaration), then checks if the expression `condition` is `true`, If `true`, executes `update` (should be an increment or decrement), then `statement`.

## Continue statement/keyword

Skips the remaining code within a loop for that particular iteration.

### Syntax
```java
continue;
```

::: warning
The `continue` keyword can only be used inside loops.
:::

## Break statement/keyword

Immediately exits the loop, continuing execution to the first line of code after the loop's closing curly brace. If used inside a `switch` statement, exits out of that case and continues execution to the first line of code after the switch statement's closing curly brace.

### Syntax
```java
break;
```

::: warning
The `break` keyword can only be used inside loops or `switch` statements.
:::

## Boolean expressions

|          Name            | Syntax |      Examples      |
|--------------------------|:------:|:------------------:|
| Equal to                 |   ==   |    answer == 'a'   |
| Not equal to             |   !=   |    relax != res    |
| Greater than             |    >   |  expenses > income |
| Greater than or equal to |   >=   |    points >= 30    |
| Less than                |    <   |  expenses < income |
| Less than or equal to    |   <=   |    points <= 30    |