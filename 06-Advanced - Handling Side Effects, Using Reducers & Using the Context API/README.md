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
# Day 9: 29/11/u2022
## useReducer
- useReducer is one of the additional Hooks.
- An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications.
- It helps in more powerful state management.
### Comparision of useState and useReducer 
    ```jsx
    const [state, setState] = useState(initialValue);

    const [state, dispatch] = useReducer(reducer, initialValue);
    ```
