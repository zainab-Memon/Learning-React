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
## React Portals
- React Portals are an advanced concept that allows developers to render their elements outside the React hierarchy tree without comprising the parent-child relationship between components.
- Usually, typical React components are located within the DOM. 
- This means that it might be tricky for you to render modals or pop-up window.
- This concept allows developers to render an element outside its parent’s DOM node. 
- Despite this, React still preserves the component’s position in the component hierarchy.
- In other words, the component can still maintain the properties and behaviors it inherits in the React tree.
- Syntax: `ReactDom.createPortal(child,container)`
- Here the first arguement child is a component that we want to render or an HTML element and the second arguement is a DOM element to which child will be rendered.
- Example:
  ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import Card from "./Card";
    import Button from "./Button";
    import classes from "./ErrorModal.module.css";

    const Backdrop = (props) => {
      return <div className={classes.backdrop} onClick={props.onConfirm} />;
    };
    const ModalOverlay = (props) => {
      return (
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions} onClick={props.onConfirm}>
            <Button>Ok!</Button>
          </footer>
        </Card>
      );
    };
    const ErrorModal = (props) => {
      return (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById("backdrop-root") // I have created a div with this id in index.html before the root div
          )}
          {ReactDOM.createPortal(
            <ModalOverlay
              title={props.title}
              message={props.message}
              onConfirm={props.onConfirm}
            />,
            document.getElementById("overlay-root")
          )}
        </React.Fragment>
      );
    };
    export default ErrorModal;
  ```
### Uses
- The common use-cases of React portal include:
  - Modals
  - Tooltips
  - Floating menus
  - Widgets
# Day 8: 28/11/22
## Refs (References)
- Refs allow us to get access to other DOM elements and work with them. 
- You can use refs instead of state in form, but that's upto you. 
- However if you only want to read some values and never plan changing anything, then you should never use states but refs.
### Adding Ref to your component
- **import useRef hook from React:** 
```jsx 
  import React, {useRef } from "react";
```  
- **Inside the component, call the useRef Hook:**
```jsx
  const nameInputRef = useRef();
```
  - useRef takes a default value and returns a value which allows us to work with that ref later.
- **Connect the ref with an element with ref prop**
  - You can connect ref with any element.
```jsx
  <input
       id="username"
       type="text"
       ref={nameInputRef}
   />
```
  - The connection will be established now. 
  - useRef returns an object like this one and that object has a current property that holds the actual value of that ref it is connected with.
  - A real DOM node is being stored in the current property, which you could now manipulate or read. 
```
{ 
  current: 0 // The value you passed to useRef
}
```
- **Reading The Data**
```jsx
  const enteredName = nameInputRef.current.value;
```
  - Now you can use this value in your code for various purpose. 
- **Example:**
```jsx
  import React, {useRef } from "react";
  import Card from "../UI/Card";
  import Button from "../UI/Button";
  import classes from "./AddUser.module.css";
  import ErrorModal from "../UI/ErrorModal";
  const AddUser = (props) => {
    // using refs to handle the form values
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    
    const [error, setError] = useState(""); // managing error state

    const addUserHandler = (event) => {
      event.preventDefault();
      // getting the user inputted values of form in refs instead of states
      const enteredName = nameInputRef.current.value;
      const enteredAge = ageInputRef.current.value;
      if (
        enteredName.trim().length === 0 ||
        enteredAge.trim().length === 0
      ) {
        setError({
          title: "Invalid Input",
          message: "Please enter a valid name and age(non-empty values)",
        });
        return;
      }
      if (+enteredAge < 1) {
        setError({
          title: "Invalid Age",
          message: "Please enter a valid age(>0)",
        });
        return;
      }

      props.onAddUser(enteredName, enteredAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    };
   
    const errorHandler = () => {
      setError(null);
    };

    return (
      <React.Fragment>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          />
        )}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              ref={nameInputRef}
            />
            <label htmlFor="userage">Age (Years)</label>
            <input
              id="userage"
              type="number"
              ref={ageInputRef}
            />
            <Button type="submit">Add User</Button>
          </form>
        </Card>
      </React.Fragment>
    );
  };
  export default AddUser;
```
## Controlled vs Uncontrolled Component
- In a controlled component, form data is handled by a React component such as useState. 
- The alternative is uncontrolled components, where form data is handled by the DOM itself. 
- To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
