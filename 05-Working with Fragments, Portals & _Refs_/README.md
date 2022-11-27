# Day 6: 26/11/22
- Done with basics of React Js
# Day 7: 27/11/22
## JSX Limitations and Workarounds
- In React, when a component returns multiple JSX elements, we must wrap them in a container element like div for the code to work, otherwise it will show syntax error like this: 
- **_SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag_**
- There is no problem with div containers if they serve a purpose like adding styles to the JSX. 
- However, they are not always needed to wrap our JSX. 
- In this case, when we do, they become extra nodes that clutter the DOM tree.
- We can overcome this limitation by either returning our JSX elements as items of an array but they would again require a key which is very cumbersome. 
- Another alternative to this approach is to use custom wrapper components that just return `props.children` and we wrap our JSX elements with those components. 
- It's an empty wrapper compoonent: It doesn't render any real HTML element to the DOM. But fulfills React's/JSX' requirement.
- Another solution is to use fragments.
## React Fragments
- React fragments serve as a cleaner alternative to using unnecessary divs in our code. 
- These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node.
- React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.
### Creating and rendering fragments in React
#### Syntax 1: Without importing fragments
  ```jsx
    import "./App.css";
    import React from "react";
   
    function App() {
      
      return (
        <React.Fragment>
          <h1>Learning React Fragments</h2>
          <p>Did you get it?</p>
        </React.Fragment>
      );
    }

    export default App;
  ```
#### Syntax 2: With a named import
  ```jsx
    import "./App.css";
    import React, {Fragment} from "react";
   
    function App() {
      
      return (
        <Fragment>
          <h1>Learning React Fragments</h2>
          <p>Did you get it?</p>
        </Fragment>
      );
    }

    export default App;
  ```
#### Syntax 3: Shorthand
  ```jsx
    import "./App.css";
    import React, {Fragment} from "react";
   
    function App() {
      
      return (
        <>
          <h1>Learning React Fragments</h2>
          <p>Did you get it?</p>
        </>
      );
    }

    export default App;
  ```  
