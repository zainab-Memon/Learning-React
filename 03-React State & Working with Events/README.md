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