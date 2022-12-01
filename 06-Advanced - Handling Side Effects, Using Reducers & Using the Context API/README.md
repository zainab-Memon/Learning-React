# Day 8: 28/11/2022
## Component Lifecycle
- This lifecycle consists of three main parts: 
### Mounting
- Mounting means putting elements into the DOM.
### Updating
- The next phase in the lifecycle is when a component is updated.
- A component is updated whenever there is a change in the component's state or props.
### unmounting
- The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
### Explanation
To understand better a component's lifecycle, we can look at the lifecycle of a flower. When the flower's seed is planted, it is mounted. Then, as it grows, it is updating and, unfortunately, it will die (or unmount) someday. The component's lifecycle is exactly the same: when the user lands on the page, the component is mounted, then as the states update, the component is also updated, and, finally, the component is unmounted when the user leaves the page.
## Side Effects
- Side effects are basically anything that affects something outside of the scope of the current function that’s being executed.
- If a user changes the content of a field, this change could potentially influence other fields on the UI. This system behavior is called a side effect.
- Example: <br>
  - Store data in browser syorage 
  - Send Http requests to backend servers
  - Set and manage timers
# Day 9: 29/11/2022
## useEffect
- The useEffect Hook allows you to perform side effects in your components.
- If we perform a side effect directly in our component body, it gets in the way of our React component's rendering.
- Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.
- This is what useEffect gives us.
- useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.
- useEffect() hook accepts 2 arguments: `useEffect(callback[, dependencies]);`
  - callback is the function containing the side-effect logic.This will be called after the component renders. In this function, we can perform our side effects or multiple side effects if we want.
  - dependencies is an optional array of dependencies. This array should include all of the values that our side effect relies upon. useEffect() executes callback only if the dependencies have changed between renderings.
- Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect()
### Way to Perform side effect
- The correct way to perform the side effect in our User component is as follows:
  - We import useEffect from "react"
     ```jsx
      import React, { useState, useEffect } from "react";
     ```
  - We call it above the returned JSX in our component
     ```jsx
       useEffect(() =>{}, []);
     ```
### Dependencies
- If you do not provide the dependencies array at all and only provide a function to useEffect, it will run after every render, and we will have an infinite loop.
- If you are updating state within your useEffect, make sure to provide an empty dependencies array. If you do provide an empty array,this will cause the effect function to only run once after the component has rendered the first time.
- However, if you want the useEffect to run everytime a certain dependency change than you should add props or state in the dependencies array.
- Example: 
  ```jsx
    useEffect(() => {
      setFormIsValid(
       enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, [enteredEmail, enteredPassword]);
  ```
### Effect Cleanup
- Some effects require cleanup to reduce memory leaks.
- Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
- We do this by including a return function at the end of the useEffect Hook.
  ```jsx
    useEffect(() => {
      // Side-effect...
      return function cleanup() {
      // Side-effect cleanup...
      };
    }, dependencies);
  ```
- Cleanup works the following way:
  1. After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.
  2. On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.
  3. Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.
# Day 10: 30/11/2022
## useReducer
- useReducer is one of the additional Hooks.
- An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications.
- It helps in more powerful state management.
- The useReducer hook accept 2 arguments: the reducer function and the initial state and returns an array of 2 items: the current state and the dispatch function.
  ```jsx  
   const [state, dispatch] = useReducer(reducer, initialValue);
  ```
### Understanding useReducer()
![image](https://user-images.githubusercontent.com/88162824/204764945-ebbf8919-e769-457f-9763-92ca2a35fcfa.png)
### Adding a useReducer() to a component
- Import useReducer from react
  ```jsx
    import React, { useState, useEffect, useReducer } from "react";
  ```
- Call useReducer at the top level of your component to manage state with a reducer.
  ```jsx
    import { useReducer } from 'react';

    function MyComponent() {
      const [state, dispatch] = useReducer(reducer, initialState);
      // ...
  ```
- Write a reducer function before the component function that accepts state and some action and returns a new state that is the result of performing that action on previous state.
  ```jsx
    import { useReducer } from 'react';
    const  reducer = (state, action) => {
     // ...
    }
    const MyComponent = () => {
      const [state, dispatch] = useReducer(reducer, initialState);
       // ...
  ```     
- Now you can call dispatch with action type and data/payload to set state within the app.
  ```jsx
    function handleClick() {
    dispatch({ type: 'action_name' });
   }
  ```
- Now React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI.  
#### Example
  ```jsx
    // Importing useReducer
    import { useReducer } from "react";
    
    //reducer function before the component function
    const myReducer = (state, action) => {
      if (action.type === "incremented_age") {
        return {
          age: state.age + 1,
        };
      }
      throw Error("Unknown action.");
    };

    const Counter = () => {
      //calling useReducer at top
      const [state, dispatch] = useReducer(myReducer, { age: 42 });

      return (
        <>
          <button
            onClick={() => {
              //calling dispatch with action type
              dispatch({ type: "incremented_age" });
            }}
          >
            Increment age
          </button>
          <p>Hello! You are {state.age}.</p>
        </>
      );
    };
    export default Counter;
  ```
- An action object is an object that describes how to update the state.
- Typically, the action object would have a property type — a string describing what kind of state update the reducer must do.  
### useState vs useReducer 
![image](https://user-images.githubusercontent.com/88162824/204901199-14d6ae49-4712-4c1f-98f6-d2c0d5fc10cf.png)
  ```jsx
    const [state, setState] = useState(initialValue);
    const [state, dispatch] = useReducer(reducer, initialValue);
  ```
- As you can see, in both cases the hook returns an array with two elements. 
- The first is the state, and the second is a function that lets you modify the state: setState for useState, and dispatch for useReducer.
# Day 11: 1/12/2022
## React Context API
- One of the main concept of React is breaking complex components into small reusable components . If these small components need data to work with, you will have to pass data through props from the parent component to the child component. 
- Passing data through props over and over can cause problems for your application. Sometimes you might pass more props than you need or even forget to pass props that you do need, rename props through the components without noticing, etc. 
- If you’re passing data through props from the parent component to a fourth- or fifth-level component, you’re not reusing and writing maintainable code, and this might prejudice your application in the future.
- This is what we call **“prop-drilling.”** This can frustrate and slow down your development in the mid- to long-term—passing props over and over again to your components will cause future problems in your application.
- The **Context API** can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc
