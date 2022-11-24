# Day 5: 23/11/2022
## Events
- React events are written in camelCase syntax: `onClick` instead of `onclick`.
- React event handlers are written inside curly braces: `onClick={shoot}`  instead of `onClick="shoot()"`.
- A function is passed as the event handler instead of a string. 
  ```jsx
   const clickHandler = () => {
      console.log("Hi");
   <button onClick={clickHandler}>Change Title</button>
  ```
## State
- The state is a built-in React object that is used to contain data or information about the component. 
- A component’s state can change over time; whenever it changes, the component re-renders. 
- The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.  
- However, the function components didn't have state before React 16.8, state could only be used in class components.
-  Bu now with new version of react.JS, using hooks, you can apply state to functional components too.
## Hooks 
- Hooks allow function components to have access to state and other React features. 
- Because of this, class components are generally no longer needed.
- You must import Hooks from react.
### Hook Rules
- There are 3 rules for hooks:
  1. Hooks can only be called inside React function components.
  2. Hooks can only be called at the top level of a component.
  3. Hooks cannot be conditional
#### 1. useState 
- The React useState Hook allows us to track state in a function component.
- State generally refers to data or properties that need to be tracking in an application.
##### Import useState:
- To use the useState Hook, we first need to import it into our component.  
    ```jsx
     import React, { useState } from "react";
    ```
##### Initialize useState
- We initialize our state by calling useState at the top of function component.
- useState accepts an initial state and returns two values:
  1. The current state.
  2. A function that updates the state.
  ```jsx
     import React, { useState } from "react";
     const ExpenseItems = (props) => {
       const [title, setTitle] = useState(props.title);
       console.log("ExpenseItem evaluated by React");
      }; 
  ```
- The first value, title, is our current state.
- The second value, setTitle, is the function that is used to update our state.
##### Read State
- We can now include our state anywhere in our component.
  ```jsx
   import React, { useState } from "react";
   const ExpenseItems = (props) => {
     const [title, setTitle] = useState(props.title);
     return (
          <div>
            <h2>{title}</h2>
          </div>
        );
     };
   export default ExpenseItems;
  ```
#####  Update State
- To update our state, we use our state updater function.
- We should never directly update state. Ex: title = "new" is not allowed.
   ```jsx
    import React, { useState } from "react";
    const ExpenseItems = (props) => {
      const [title, setTitle] = useState(props.title);
      const clickHandler = () => {
          setTitle("Updated!"); //Assigning a new value/title as an arg
        };
        return (
           <div>
              <h2>{title}</h2>
           </div>
           <button onClick={clickHandler}>Change Title</button>
        );
      };
    export default ExpenseItems;
   ```
# Day 6: 24/11/2022
## Form in React 
- Just like in HTML, React uses forms to allow users to interact with the web page.
### Create a form, the way we use to create it in HTML.
   ```jsx
    const ExpenseForm = () => {
       return (
        <form>
          <div>
            <div>
              <label>Title</label>
              <input type="text"/>
            </div>
            <div>
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" />
            </div>
            <div>
              <label>Date</label>
              <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
          </div>
          <div>
            <button type="submit"> Add Expense</button>
          </div>
        </form>
      );
    };
  ```    
### Handling Forms
- Handling forms is about how you handle the data when it changes value or gets submitted.
- In React, form data is usually handled by the components.
- When the data is handled by the components, all the data is stored in the component state.
- You can control changes by adding event handlers in the onChange attribute.
- We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
   ```jsx
    import React, { useState } from "react";
    const ExpenseForm = () => {
      const [enteredTitle, setEnteredTitle] = useState(""); //destructuring
      const [enteredAmount, setEnteredAmount] = useState("");
      const [enteredDate, setEnteredDate] = useState("");
      // For Title
      const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //storing the user input value in state
      };
      // For Amount
      const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
      };
      // For Date
      const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
      };
      return (
        <form>
          <div>
            <div>
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler} />
            </div>
            <div>
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div>
            <button type="submit"> Add Expense</button>
          </div>
        </form>
      );
    };
    export default ExpenseForm;
  ```  
