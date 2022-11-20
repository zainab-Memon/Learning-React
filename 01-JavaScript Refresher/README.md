# Understanding Important Concepts of JavaScript
## Day 1: 17/11/2022
### Intro 
- JS stands for JavaScript. 
- It is a lightweight, cross-platform, and interpreted scripting language. 
- It is well-known for the development of web pages, many non-browser environments also use it
### Syntax 
- We can place js script in head, body or in external files with .js extension <br>
<script> <br>
  // JavaScript Code <br />
</script> 
### Variables
- JavaScript uses the keywords var, let and const to declare variables.
#### Let 
- Variables defined with let cannot be Redeclared.
- Variables defined with let must be Declared before use.
- Variables defined with let have Block Scope.
#### Const 
- Always declare a variable with const when you know that the value should not be changed.
- Variables defined with const cannot be Redeclared.
- Variables defined with const cannot be Reassigned.
- Variables defined with const have Block Scope.
### JS Functions 
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
- Syntax: <br>
  function name(parameter1, parameter2, parameter3) { <br>
  // code to be executed <br />
}
#### Arrow Function 
- Arrow functions allow us to write shorter function syntax:
-  Syntax: <br>
-  ![image](https://user-images.githubusercontent.com/88162824/202526072-aa1c29f0-a253-4542-9b98-546be33e5da4.png)
- If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword: <br>
- ![image](https://user-images.githubusercontent.com/88162824/202526295-235084bc-97f8-4456-8bf0-286c5b4dcc5f.png)
- **Note:** This works only if the function has only one statement.
- **Important:**
- When having no arguments, you have to use empty parentheses in the function declaration: <br>
![image](https://user-images.githubusercontent.com/88162824/202855712-bbee657c-4a86-4eb7-bbf9-1004bd837e41.png)
- When having exactly one argument, you may omit the parentheses: <br>
![image](https://user-images.githubusercontent.com/88162824/202855777-ca977129-1294-4432-b8b6-abd9594e1821.png)
### JS Modules 
- JavaScript modules allow you to break up your code into separate files.
- This makes it easier to maintain the code-base.
- JavaScript modules rely on the import and export statements.
- Modules only work with the HTTP(s) protocol.
- A web-page opened via the file:// protocol cannot use import / export.
#### Export
- You can export a function or variable from any file.
- There are two types of exports: Named and Default. <br>
![image](https://user-images.githubusercontent.com/88162824/202528266-a8dbe9c9-4e2b-4e7a-beaf-7908f223c1f2.png)
- A file can only contain one default and an unlimited amount of named exports.
#### Import
- You can import modules into a file in two ways, based on if they are named exports or default exports.
- Named exports are constructed using curly braces. Default exports are not. <br>
![image](https://user-images.githubusercontent.com/88162824/202528332-8ca703dd-4626-43db-bd48-be415c58e98c.png)
- When importing named exports, you can also import all named exports at once with the following syntax:
- import * as upToYou from './path/to/file.js
- 
## Day 2: 18/11/2022
### Classes
- Classes are blueprints / templates for objects.
- You can think of the class as a sketch (prototype) of a house. 
- It contains all the details about the floors, doors, windows, etc. 
- Based on these descriptions, you build the house. House is the object.
- Syntax: <br>
![image](https://user-images.githubusercontent.com/88162824/202755105-6cca8ade-9be7-4d64-932c-3aab17ddb6bf.png)
- Example:  <br>
![image](https://user-images.githubusercontent.com/88162824/202755223-01ddcaf8-b51f-457c-8594-9824405bc348.png)
- Classes can have methods as well. 
- Methods are simply functions attached to classes.
- Constructor is used to initialize object properties
#### Creating Objects
![image](https://user-images.githubusercontent.com/88162824/202757564-c00cb3c7-e8c3-41c2-9c27-b46670544984.png)
#### Class Inheritance
- Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
- Using class inheritance, a class can inherit all the methods and properties of another class. <br>
![image](https://user-images.githubusercontent.com/88162824/202761026-8db919d5-6e89-4706-8f07-a6785f99c0dc.png)
#### Methods and Constructor in ES6 and ES7
![image](https://user-images.githubusercontent.com/88162824/202762443-24e45b38-2f56-4179-a9c7-5848f791276b.png)
- Example: <br> 
![image](https://user-images.githubusercontent.com/88162824/202762747-88376a07-5d73-47c7-917b-f968258f4f2d.png)
### Spread and Rest Operator 
- The spread operator is extremely useful for cloning arrays and objects.Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original)can be tricky. 
- With the spread operator you have an easy way of creating a (shallow!) clone of the object or array.
![image](https://user-images.githubusercontent.com/88162824/202767444-9a8c71fd-7302-4c62-b475-6e24520b5e98.png)
- Example: <br>
![image](https://user-images.githubusercontent.com/88162824/202767952-81eb0a7f-9c44-49bc-b775-22bcd071fb9a.png)
### Destructuring 
- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- Example:  <br>
![image](https://user-images.githubusercontent.com/88162824/202774566-053f6478-075f-4bc6-a877-6511fdfc54a5.png)
## Day 3: 19/11/2022
### Primitive Data Types 
- In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. 
- There are 7 primitive data types:
  - string
  - number
  - bigint
  - boolean
  - undefined
  - symbol
  - null
- A primitive data type in JavaScript, it is stored on a stack. 
- A primitive data type on the stack is identified by the variable name you used for declaration in your program. With each primitive data type you create, data is added to the stack.
- **Example:** 
- Declare a variable named "num1" and assign value of 1 to it.
- Let's declare another variable named "num2" and assign "num1" to it, so now num2= 1 as well. 
- So both variables have the same value.
- What happens on the stack is that, the computer creates room for num1 and stores its assigned value on the stack. 
- When num2 is created, the computer again creates room, and stores 1 on the stack. 
- It does not matter that both variables are assigned the same value.
- **What if during the coding process, we decided to update the value of num1 to say, 100? Does it mean num2 will change too? The answer is no.**
- Since num1 and num2 were stored differently on the stack, updating one of them will not affect the other
- So, in effect, the two variables have no relationship to each other. It means primitive data types do not point to any other variable rather just copy their content, if assigned. 
- **Code:** <br>
![image](https://user-images.githubusercontent.com/88162824/202848542-196044b4-a8ec-4269-b754-c9598c3324e0.png)
### Reference Data Types
- Reference data types are dynamic in nature. That is, they do not have a fixed size.
- Most of them are considered as objects, and therefore have methods. 
- Examples of such data types include arrays, functions, collections, and all other types of objects.
- The difference comes in when the computer has to store a reference data type. 
- When you create a variable and assign it a value that is a reference data type, the computer does not directly store that data type in that variable (as is the case with primitive types).
- What you have assigned to that variable is a pointer that points to the location of that data type in memory.
- Code: <br>
![image](https://user-images.githubusercontent.com/88162824/202848722-ac511dff-098e-4c40-b377-098ad3fa3f94.png) <br>
- Output: <br>
![image](https://user-images.githubusercontent.com/88162824/202848741-94ec87e9-564c-458b-b975-cce938c473a5.png) <br>
![image](https://user-images.githubusercontent.com/88162824/202848818-31d0acc5-1174-400e-9fdb-f49552a02cd0.png)
### Arrays 
- An array is a special variable, which can hold more than one value. <br>
![image](https://user-images.githubusercontent.com/88162824/202856585-6cb3cf10-ef2e-4054-8781-52b694a3dee2.png)
#### How to Recognize an Array
![image](https://user-images.githubusercontent.com/88162824/202856797-d8778163-d055-443a-bb53-0c5bf086bef6.png)
#### Array Methods 
##### map()
- map() creates a new array from calling a function for every array element.
- map() calls a function once for each element in an array.
- map() does not execute the function for empty elements.
- map() does not change the original array.
- **Example:** <br>
![image](https://user-images.githubusercontent.com/88162824/202859470-25eefc1e-f083-4c52-95cf-090921018c48.png) <br>
![image](https://user-images.githubusercontent.com/88162824/202859620-46eb7d95-1990-40fb-83ea-98cc36f66d1c.png)
##### find()
- The find() method returns the value of the first element that satisfies the provided testing function.
- The find() method executes a function for each array element.
- The find() method returns undefined if no elements are found.
- The find() method does not execute the function for empty elements.
- The find() method does not change the original array. <br>
![image](https://user-images.githubusercontent.com/88162824/202893905-e9fd1337-32d8-42af-a053-ab4826b362df.png)
##### filter()
- The filter() method creates a new array filled with elements that pass a test provided by a function.
- The filter() method does not execute the function for empty elements.
- The filter() method does not change the original array <br>
![image](https://user-images.githubusercontent.com/88162824/202894250-f3429ee0-1bfe-4d54-bb00-a02209911e73.png)
##### findIndex()
- The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
- If no elements satisfy the testing function, -1 is returned.<br>
![image](https://user-images.githubusercontent.com/88162824/202894356-aab3f464-526f-4fe5-a1e1-8033f806e547.png)
##### reduce()
- The reduce() method executes a reducer function for array element.
- The reduce() method returns a single value: the function's accumulated result.
- The reduce() method does not execute the function for empty array elements.
- The reduce() method does not change the original array.<br>
![image](https://user-images.githubusercontent.com/88162824/202895007-1ee8a022-13bb-40e9-bc87-dc28c007edc7.png)
##### concat()
- The concat() method concatenates (joins) two or more arrays.
- The concat() method returns a new array, containing the joined arrays.
- The concat() method does not change the existing arrays. <br>
![image](https://user-images.githubusercontent.com/88162824/202895428-34fc6476-88e8-4c57-aa56-33c79d43ea88.png)
#### slice()
- The slice() method returns selected elements in an array, as a new array.
- The slice() method selects from a given start, up to a (not inclusive) given end.
- The slice() method does not change the original array. <br>
![image](https://user-images.githubusercontent.com/88162824/202896085-2eb3d75a-5f7d-4d4e-b3fa-f3eb3a4b3a5c.png)<br>
- Using negative indices <br>
![image](https://user-images.githubusercontent.com/88162824/202896201-9a944430-e173-4cb6-91cb-cd686128183d.png)





