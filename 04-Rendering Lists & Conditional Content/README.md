# Day 7: 25/11/2022
## React Lists 
- Lists are used to display data in an ordered format and mainly used to display menus on websites. 
- In React, Lists can be created in a similar way as we create lists in JavaScript.
- In React, you will render lists with some type of loop.
- The JavaScript map() array method is generally the preferred method.
### App Component (Parent Component)
  ```jsx
    import React from 'react';   
    import ReactDOM from 'react-dom';   
    import NameList from './NameList'

    const App = () => {
    const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];   
    return (
        <div>
          <NameList items={myLists} />
        </div>
      );
    };
    export default App;
  ```
### NameList Component (Child Component)
  ```jsx
    import React from 'react';   
    function NameList(props) {  
      const myLists = props.myLists;  
      const listItems = myLists.map((myList) =>  
        <li>{myList}</li>  
      );  
      return (  
        <div>  
            <h2>Rendering Lists inside component</h2>  
                  <ul>{listItems}</ul>  
        </div>  
      );  
    }  
    export default NameList;  
  ```
## Keys
- When you run this code in your create-react-app, it will work but you will receive a warning that there is no "key" provided for the list items.
- Keys allow React to keep track of elements. 
- This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
- Keys need to be unique to each sibling.
- You can use index of an array as a key or add a key item in array.
## React Conditional Rendering
- We can use && and ternary operator for conditional rendering in react
- We can also use if statement but cannot combine it with else in return statement. 
- Therfore we have to use either && or ternary operator for conditional rendering
### conditional rendering using && operator 
- Here if the length of data in filterExpenses is equal to 0 then this `<p>No Content Found</p>` will be rendered otherwise the ExpenseItems component will be rendered.
  ```jsx
   {filteredExpenses.length === 0 && <p>No Content Found</p>}
   {filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
         <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
         ))}
 ```
### conditional rendering using ternary operator 
  ```jsx
   {filteredExpenses.length === 0 ? ( <p>No Expenses Found</p>) : (
      filteredExpenses.map((expense) => (
        <ExpenseItems
           key={expense.id}
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
          ))
      )}
  ```    
