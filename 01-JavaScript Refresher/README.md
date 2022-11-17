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
### Classes
- Classes are blueprints / templates for objects.
- 
## Day 2: 18/11/2022

