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
