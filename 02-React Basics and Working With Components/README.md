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
  ```jsx
  ReactDOM.render(<App />, document.getElementById("root"));
    ```
- **New Syntax:** <br>
  ```jsx
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```
## JSX
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX allows us to write HTML elements in JavaScript and place them in the DOM 
- JSX converts HTML tags into react elements.
- Example: <br>
  ```jsx
  function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
  }
  ```
- With JSX you can write expressions inside curly braces { }.
- The expression can be a React variable, or property, or any other valid JavaScript expression. 
- JSX will execute the expression and return the result: <br>
  ```jsx
  const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
  ```
- The HTML code in JSX, should always be wrapped in ONE top level element.
- The way h2 tag is wrapped in a div in above code snippet.
## Building React Components 
- When creating a React component, the component's name MUST start with an upper case letter.
- There are two types of components named class components and function components. 
### Class Component 
- A class component must include the extends React.Component statement. 
- This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
- The component also requires a render() method, this method returns HTML. <br>
  ```jsx
   class Car extends React.Component {
   render() {
    return <h2>Hi, I am a Car!</h2>;
     }
   }
  ```
### Function Component 
- A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand. <br>
    ```jsx
     function Car() {
     return <h2>Hi, I am a Car!</h2>;
     }
   ```
### Rendering Component 
- Now to use the components that we just created, we have to render that component in index.js file if it's the root component, however if it is other than that you can use that component as a custom HTML tag in app component by exporting/importing it in the app.js file. 
- Eg: I have created this component in a separate file. <br>
    ```jsx
     function ExpenseItems() {
     return
     <h2>Expense Items</h2>;
      }
     export default ExpenseItems;
  ```
- Now, I have to import it in App.js component file like this. <br>
  ```jsx
   import Expenses from "./components/Expenses";
   function App() {
      return (
        <div>
          <h2>Let's get started!</h2>
          <ExpenseItems></ExpenseItems> 
        </div>
     );
   }
   export default App;
  ```
## Adding Basic CSS Styling In A Component 
- There are many ways to style React with CSS,let's take a closer look at three common ways:
### Inline Styling:
  ```jsx
   <div style={{color:"red"}}></div>
  ```
### CSS Stylesheets
1. Create a css stylesheet with .css extension
2. Import that css file to the component file to implement the styling on that component. 
- Example: <br>
  ```jsx
   import "./ExpenseItems.css";
   function ExpenseItems(props) {
   return (
     <div className="expense-item">
       <ExpenseDate date={props.date} />
       <div className="expense-item__description">
          <h2>{props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
       </div>
     </div>
     );
   }
   export default ExpenseItems;
  ```
### CSS Modules
## React Props 
- Props stands for properties.
- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
### Passing Data Via Props 
- Specify the prop as an attribute of the custom HTML tag and assign a value to it. <br>
  ```jsx
   import ExpenseItems from "./components/ExpenseItems";
   function App() {
   const expenses = [
     {
       id: "e1",
       title: "Toilet Paper",
       amount: 94.12,
       date: new Date(2020, 7, 14),
     },
   ];
   return (
     <div>
       <h2>Let's get started!</h2>
       <ExpenseItems
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
       />
     </div>
   );
   }
  ```
- Retrieve these values in the component itself. <br> 
  ```jsx
     import "./ExpenseItems.css";
     function ExpenseItems(props) {
      return (
        <div className="expense-item">
           <div>{props.date.toISOString()}</div>
           <div className="expense-item__description">
             <h2>{props.title} </h2>
             <div className="expense-item__price">${props.amount}</div>
           </div>
        </div>
      );
     }
     export default ExpenseItems;
  ```
 #### Summary
- So basically, we passed in props as an argument in our function. props gets passed as a parameter to our functional component. 
- We then tried to access it by writing the following: the props.date, props.title, and props.amount.
- Now that we've done that, we can go back to our App.js to render our product and pass some data to these three props. Props are passed in like HTML attributes.
## Splitting 
- React doesn’t force you to follow a specific component structure or hierarchy. 
- We could build our whole app in a single React component and render all the content together in the same function. 
- However, following this approach would not be the best choice as we would not be taking all the advantage of building reusable and modular components. 
- Instead of having all our DOM elements living in the same React component it is better to break it down into multiple components.
## Composition (props.children)
- Composition is the act of combining parts or elements to form a whole.
- When building an application using React, it is usually the case that developers will want to re-use component code.
### children 
- The children, in React, refer to the generic box whose contents are unknown until they’re passed from the parent component.
- What does this mean? It simply means that the component will display whatever is included in between the opening and closing tags while invoking the component. 
- Essentially, props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. 
- These kinds of components are identified by the official documentation as “boxes”.
- [Find more](https://medium.com/swlh/using-props-children-with-react-function-components-728fd48ed42f)
  ```jsx
   import "./Card.css";
   function Card(props) {
   const classes = "card " + props.className;
      return <div className={classes}>{props.children}</div>;
   }
   export default Card;
  ```
