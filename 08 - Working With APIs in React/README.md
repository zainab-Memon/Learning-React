# What is an API?
- An API (Application Programming Interface) allows your application to interact with an external service using a simple set of commands. 
- To break down the name, the “Interface” is where different software components can interact. 
- Using an API allows developers to add specific functionalities to their applications and can speed up the development process.
- There are APIs for nearly every category imaginable from data to travel and even sports. 
- For example, rather than investing time and resources to create their own payment processing system, many applications use a payment processing API instead.
- **Example:** <br>
![image](https://user-images.githubusercontent.com/88162824/216931681-d8792dde-36df-4216-993f-dbe806404b23.png)
# Types of APIs
- There are several types of APIs, including:
## Open APIs: 
- Also known as external or public APIs, these are available to developers and other users with minimal restrictions. They may require registration, app approval, or an API key.
## Internal APIs: 
- These are hidden from external users and are meant to be used inside an organization. They allow for communication between different internal systems and services.
## Partner APIs: 
- These are similar to internal APIs, but are shared between organizations in a business partnership.
## Composite APIs: 
- These allow for multiple endpoints to be accessed with a single API call.
## REST (Representational State Transfer) APIs: 
- REST (Representational State Transfer) APIs are a type of web API that use HTTP requests to interact with data. 
- They are based on the architectural style of the same name and are designed to be lightweight, fast, and scalable. 
- REST APIs use standard HTTP methods, such as GET, POST, PUT, and DELETE, to perform operations on resources, represented by URIs (Uniform Resource Identifiers).
- REST APIs are flexible and can be used with a wide range of programming languages and platforms, making them a popular choice for building modern web applications and APIs. 
- In RESTful API design, a client sends a request to a server, which returns a response. 
- The response can be a representation of a resource, such as a JSON or XML document, that the client can use to manipulate or display the data. 
- The REST API defines a set of rules for creating, reading, updating, and deleting resources.
## SOAP (Simple Object Access Protocol) APIs: 
- These use XML as a format to transmit data, and are well-suited for large complex systems.
## RPC (Remote Procedure Call) APIs: 
- These allow for communication between a client and a server, and are typically used for small, simple systems.
#  Web API 
- A Web API is a type of API that can be accessed over the internet using standard web protocols, such as HTTP or HTTPS. 
- It allows for communication between two separate systems, typically a client (such as a web browser or mobile application) and a server, enabling the client to retrieve data or trigger a function in the server.
- Web APIs are used to provide access to the functionality of an application or service to developers and other users. 
- **For example**, a social media platform might offer a Web API that allows developers to access data about users, posts, and other entities, or to trigger actions such as posting a new message.
- Web APIs are typically designed using the REST (Representational State Transfer) or SOAP (Simple Object Access Protocol) architectural style, and can return data in various formats, including JSON and XML. 
- The use of APIs allows for greater integration and automation of different systems, and is a key part of modern web development.
# How to Fetch/Call an API with React
- There are different of fetching data:
## By using Fetch API
- All modern browsers come with an inbuilt fetch Web API, which can be used to fetch data from APIs.
- The Fetch API through the fetch() method allows us to make an HTTP request to the backend. 
- With this method, we can perform different types of operations using HTTP methods like the GET method to request data from an endpoint, POST to send data to an endpoint, and more.
- Since we are fetching data, our focus is the GET method.
- fetch() requires the URL of the resource we want to fetch and an optional parameter.
```jsx
    import React, { useEffect, useState } from "react";

    function App() {
      const [user, setUser] = useState([]);

      const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
      };

      useEffect(() => {
        fetchData();
      }, []);

      return (
        <main>
          <h1>User List</h1>
          <ul>
            {user &&
              user.length > 0 &&
              user.map((userObj, index) => (
                <li key={userObj.id}>{userObj.name}</li>
              ))}
          </ul>
        </main>
      );
    }

    export default App;
```
**Output:** <br>
![image](https://user-images.githubusercontent.com/88162824/216964465-eff42b31-8cfa-4dde-aa4e-e52b9687e43b.png)
- In the above code:
  - We have are using a useEffect hook, which will be executed once the component is mounted. Inside the useEffect hook, we are calling fetchData function.
  - In the fetchData function, we are making the API call to fetch users and set the users to a local state.
  - If users exist, then we are looping through them and displaying their names as a list.
  - Since the API calls are asynchronous, fetch API returns a Promise. Hence, we chain the then method with a callback, which will be called when we receive the
 response from the server/backend.
  - Since we need the response to be resolved to a JSON, we call .json() method with the returned response. 
  - Again .json() return a promise, therefore we need to chain another then method to resolve the second promise.
### Fetching Data in React when a button is clicked (onClick)
If you want to fetch data conditionally, say when a button is clicked, you can do that as shown below:
```jsx
    import React, { useEffect, useState } from "react";

    function App() {
      const [user, setUser] = useState([]);

      const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
      };
      
      return (
        <main>
          <h1>User List</h1>
          <button onClick={fetchData}>Click Me</button>
          <ul>
            {user &&
              user.length > 0 &&
              user.map((userObj, index) => (
                <li key={userObj.id}>{userObj.name}</li>
              ))}
          </ul>
        </main>
      );
    }

    export default App;
```
**Output:** <br>
![image](https://user-images.githubusercontent.com/88162824/216964557-64049d1d-1957-4d06-8721-a9e3a5e14cdc.png)
### Fetching data in React based on user input (onChange)
```jsx
    import React, { useState, useEffect } from "react";

    function App() {
      const [input, setInput] = useState("");
      const [data, setData] = useState([]);

      useEffect(() => {
        if (input.length > 4) {
          fetch(`https://jsonplaceholder.typicode.com/users?name=${input}`)
            .then((response) => response.json())
            .then((data) => setData(data));
          console.log(data);
        }
      }, [input]);

      const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
      };
      return (
        <div>
          <input type="text" value={input} onChange={handleOnChange} />
          {data && data.length > 0 && (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <span>Email: {item.email}</span> &nbsp;Website:{item.website}
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default App;
```
**Output:** <br>
![image](https://user-images.githubusercontent.com/88162824/216970841-0be3100f-6036-4839-b27e-267c52e0dc51.png)
- In this example, we use a state variable input to store the user's input, which is updated using the onChange event of the input field. 
- The useEffect hook is used to fetch the data based on the input state, and update the data state when the data is received. 
- The fetch() method is used to retrieve the data from the API, and the response is converted to JSON using response.json(). 
- The resulting data is then stored in the data state using setData(data). 
- The input value is passed as a query parameter to the API endpoint. 
- The [input] dependency in the useEffect hook ensures that the effect only runs when the input value changes.
## By using async-await syntax
```jsx
    import React, { useState, useEffect } from "react";

    function App() {
      const [input, setInput] = useState("");
      const [data, setData] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users?name=${input}`
          );
          const data = await response.json();
          setData(data);
        };

        fetchData();
      }, [input]);
      const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
      };
      return (
        <div>
          <input type="text" value={input} onChange={handleOnChange} />
          {data.length > 0 && (
            <ul>
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    export default App;

```
- In this example, we have a React component that fetches data from an API when the component is mounted. 
- The fetchData function is declared with the async keyword, and it uses the fetch API to retrieve data from the API. 
- The await keyword is used to wait for the result of the fetch method, and the response is stored in the response variable. 
- The response.json() method is also awaited, and the resulting data is stored in the data variable.
- The useEffect hook is used to call the fetchData function when the component is mounted.
## By using Axios library
### Axios Library 
- Axios is a popular, promise-based HTTP client library for making HTTP requests from JavaScript code, including in a React application. 
- It provides a simple and consistent interface for making HTTP requests and processing the response data, and can be used with both the client-side (e.g., in a browser) and the server-side (e.g., in a Node.js environment).
- With Axios, you can make HTTP requests using methods like get, post, put, delete, etc., and easily access the response data using the .data property of the response object. 
- There is a difference between these two as in fetch() we have to convert the result to a JSON object but in Axios it already returns the result as a JSON object, so we don’t need to convert it.
**Example:**
- First, we have to install the Axios library then we have to import Axios from Axios.
```jsx
    npm install axios
```
- **Code**:
```jsx
    import axios from "axios";
    import React, { useEffect, useState } from "react";

    const App = () => {
      const [users, setUsers] = useState([]);

      const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
          setUsers(response.data);
        });
      };

      useEffect(() => {
        fetchData();
      }, []);

      return (
        <div>
          {users.length > 0 && (
            <ul>
              {users.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    export default App;
```
**Output**: <br>
![image](https://user-images.githubusercontent.com/88162824/216989607-f6269190-44c0-4293-b89e-bcf66804fea6.png)

## By using custom hooks
## By using React Query
