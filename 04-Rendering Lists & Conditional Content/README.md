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
