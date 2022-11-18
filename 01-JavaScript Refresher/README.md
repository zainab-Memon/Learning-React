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
#### Import
- You can import modules into a file in two ways, based on if they are named exports or default exports.
- Named exports are constructed using curly braces. Default exports are not. <br>
![image](https://user-images.githubusercontent.com/88162824/202528332-8ca703dd-4626-43db-bd48-be415c58e98c.png)
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
