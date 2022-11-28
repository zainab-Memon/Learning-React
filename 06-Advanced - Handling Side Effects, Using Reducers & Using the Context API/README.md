# Day 8: 28/11/2022
## Side Effects
- Side effects are basically anything that affects something outside of the scope of the current function that’s being executed.
- If a user changes the content of a field, this change could potentially influence other fields on the UI. This system behavior is called a side effect.
- Example: <br>
  - Store data in browser syorage 
  - Send Http requests to backend servers
  - Set and manage timers
  ## useEffect
  - The useEffect Hook allows you to perform side effects in your components
  - 
  useEffect() hook accepts 2 arguments:

useEffect(callback[, dependencies]);
callback is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.

Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That's the sole purpose of useEffect()


  The correct way to perform the side effect in our User component is as follows:

We import useEffect from "react"
We call it above the returned JSX in our component
We pass it two arguments: a function and an array
