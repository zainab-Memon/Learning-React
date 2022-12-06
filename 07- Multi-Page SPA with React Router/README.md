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
- We have to nest all our <Route> component in <Routes>, it is used in the replacement of <switch>
- **path:** Path specifies a pathname we assign to our component.
- **element:** It refers to the component which will render on matching the path. 
  ```jsx
    import Nav from "./Nav";
    import About from "./About";
    import Shop from "./Shop";
    import "./App.css";
    import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
     function App() {
      return (
        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} /> // specifies the home page 
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
        </Router>
      );
    }

    const Home = () => {
      return <h1>home</h1>;
    };
    export default App;

  ```
- **Using \<Link>:**
- \<Link> is used to set the URL and keep track of browsing history.
- Here we have Nav.js component that contains the  nav bar, we can set links to different routes here. 
  ```jsx 
    import { Link } from "react-router-dom";
    const Nav = () => {
      return (
        <div>
          <nav>
            <h3>logo</h3>

            <ul className="navLinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* we can use both ways, either link tag inside li tag or li tag inside link */}
              <Link to="/about">
                <li>About</li>
              </Link>

              <Link to="/shop">
                <li>shop</li>
              </Link>
            </ul>
          </nav>
        </div>
      );
    };

    export default Nav;

  ```
- **Output:** <br>
  ![image](https://user-images.githubusercontent.com/88162824/205932397-8e05662e-1aac-433f-8702-b028194db6ba.png)
- If I click on about link from navbar, we get this: <br>
  ![image](https://user-images.githubusercontent.com/88162824/205932712-718a05d6-e0e3-41e4-9493-d989916e5afd.png)
## Creating Dynamic Routes
- This is how you can create dynamic routes:
  ```jsx 
    import { Link } from "react-router-dom";

    const Shop = () => {
      const dummyData = [
        { id: "m1", item: "item1" },
        { id: "m2", item: "item2" },
        { id: "m3", item: "item3" },
      ];
      return (
        <div>
          <h1>Shop Page</h1>
          {/* creating dynamic links */}
          {dummyData.map((data) => (
            <h2 key={data.id}>
              <Link to={`/shop/${data.id}`}>{data.item}</Link>
            </h2>
          ))}
        </div>
      );
    };

    export default Shop;

  ```
