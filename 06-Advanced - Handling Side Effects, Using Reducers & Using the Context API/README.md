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
  - callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
  - dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
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
  - We pass it two arguments: a function and an array of dependencies

