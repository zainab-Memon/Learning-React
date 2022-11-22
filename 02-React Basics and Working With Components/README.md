# Day 3: 21/11/2022 
## Introduction 
- React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
- React is a tool for building UI components.
- It makes building complex, interactive and reactive user interfaces simpler.
- React is all about components, because all UI in the end are made up of components. 
## Components
- Components are independent and reusable bits of code. 
- They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
- Components come in two types, Class components and Function components, we will concentrate on Function components.
## How Is A Component Built?
- React allows you to create re-usable and reactive components consisting of HTML, JS and CSS.
![image](https://user-images.githubusercontent.com/88162824/203122222-44df8ad9-981e-4596-86be-604dbd2af75e.png)
# Day 4: 22/11/2022 
## Render HTML
- React renders HTML to the web page by using a function called ReactDOM.render().
- The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
- The purpose of the function is to display the specified HTML code inside the specified HTML element. 
- **Older syntax:** <br>
![image](https://user-images.githubusercontent.com/88162824/203288093-139fd50f-76e8-46d1-9024-8cb3fc44d968.png) <br>
- **New Syntax:** <br>
![image](https://user-images.githubusercontent.com/88162824/203295315-af18c953-2b97-4a14-bb16-a174c8193c6a.png)
## JSX
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM 
- JSX converts HTML tags into react elements.
- Example: <br>
![image](https://user-images.githubusercontent.com/88162824/203288866-e909f187-cd45-4e2d-8796-bcd53b6c6eef.png)
- With JSX you can write expressions inside curly braces { }.
- The expression can be a React variable, or property, or any other valid JavaScript expression. 
- JSX will execute the expression and return the result: <br>
![image](https://user-images.githubusercontent.com/88162824/203288992-4b8a8133-afb7-4047-af03-1ed46471ae74.png)
