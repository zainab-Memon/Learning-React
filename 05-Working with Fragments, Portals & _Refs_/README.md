# Day 6: 26/11/22
- Done with basics of React Js
# Day 7: 27/11/22
## Fragments
- In React, when a component returns multiple JSX elements, we must wrap them in a container element like div for the code to work, otherwise it will show syntax error like this: 
- **_SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag_**
- There is no problem with div containers if they serve a purpose like adding styles to the JSX. 
- However, they are not always needed to wrap our JSX. 
- In this case, when we do, they become extra nodes that clutter the DOM tree.
- React fragments serve as a cleaner alternative to using unnecessary divs in our code. 
- These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will render without any wrapping DOM node.
- React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.
### Creating and rendering fragments in React
