# Day 13: 3/12/22 To Day 15: 5/12/22
- Worked on a Project **(FOOD ORDER APP)**
# Day 16: 6/12/22
## React Router 
- A URL is the path to access a functionality. 
- Routing is like the mechanism to decide which functionality to call based on the provided URL and params. 
- So basically routing is a mapping between an URL and the functionality of a web server.
- Create React App doesn't include page routing.
- Therefore, **React Router** is the most popular solution.
- React Router is a standard library for routing in React. 
- It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
## Add React Router
- To add React Router in your application, run this in the terminal from the root directory of the application:
- `npm install react-router dom`
## Folder Structure
- To create an application with multiple page routes, let's first start with the file structure.
- Within the src folder, we'll create a folder named pages with several files:
  - src\pages\:
    - Nav.js
    - Shop.js
    - About.js
- Each file will contain a very basic React  component.
- Now if we render all of these components in App js: 
  ```jsx
    import Nav from "./Nav";
    import About from "./About";
    import Shop from "./Shop";
    import "./App.css";
    function App() {
      return (
          <div>
            <Nav />
            <About />
            <Shop />
          </div>
      );
    }

    export default App;
  ```
 - We will get output something like this: <br>
 ![image](https://user-images.githubusercontent.com/88162824/205910723-772cda68-76a3-4703-8461-e7a5772c8952.png)
- Therefore to render our components as individual pages we need to use React Routing. 
## Using React Routing
- **Import React Router:**
  ```jsx 
    import Nav from "./Nav";
    import About from "./About";
    import Shop from "./Shop";
    import "./App.css";
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    function App() {
      return (
          <div>
            <Nav />
            <About />
            <Shop />
          </div>
      );
    }

    export default App;
  ```
  - BrowserRouter is used to add the ability to handle routing in React. 
  - We have to wrap all the components that we want the routing functionality to be available in with the browserrouter that I have named as <Router> in this case. 
- **Wrap Components:**
- Now we have to wrap those components in <Router> that want to have the ability to use routing.
- But no visbile change will reflect after it. 
  ```jsx
    import Nav from "./Nav";
    import About from "./About";
    import Shop from "./Shop";
    import "./App.css";
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    function App() {
      return (
        <Router>
          <div>
            <Nav />
            <About />
            <Shop />
          </div>
        </Router>
      );
    }

    export default App;

  ```
- **Define Routes:**
- <Route> renders out the components based on the URL.

