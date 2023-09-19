# What are Memory Leaks?
- Memory leaks are a common source of performance issues and instability in JavaScript applications.
- A memory leak occurs when a Node.js program fails to release memory that it no longer needs, causing the program to consume more and more memory over time.
- This can lead to poor performance, slow response times, and ultimately, cause the application and other applications to crash.
- When an application does not need a memory block anymore, it should release it back to the OS. In the case of a memory leak, the garbage collector never collects the block and stays on the heap.
- There are several common causes of memory leaks in Node.js, such as global variables, multiple references, and incorrect use of closures and timers.
## Memory Leaks in API Calls
- Memory leaks in API calls happen when a computer program doesn't clean up properly after it talks to other computer programs over the internet (like websites or databases). When this happens, it can waste the computer's memory and make it slower over time.
- Imagine you're using a bucket to scoop water from a pool. If you forget to pour the water back into the pool after you're done, you'll end up with many buckets lying around, taking up space. Memory leaks in API calls are like those forgotten buckets – they're pieces of data or connections that the program forgets to put back where they belong, and this can cause problems. The program needs to clean up after itself to avoid these memory leaks.
- To avoid memory leaks in React, you need to make sure your components clean up after themselves. When a component is no longer needed, React should remove it and all the things it used (like event listeners or data) from memory.
- If you forget to do this, it can lead to memory leaks and a slower, less efficient app. So, always tidy up after your React components to keep your app running smoothly!
## Memory Leak Error:
![image](https://github.com/zainab-Memon/Learning-React/assets/88162824/e4ef42e4-5436-4458-a509-72e808faf01f)
#### Example: [dev to](https://medium.com/geekculture/avoid-memory-leaks-in-your-react-app-by-canceling-api-calls-9cf692c06573#:~:text=Memory%20leaks%20are%20not%20a,unmounted%20before%20the%20request%20finishes.)
## Solution:
- A way to fix this issue is to cancel the API request when the useEffect cleanup function is called.
- The preferred way of cancelling a request would be to use the <b>AbortController</b> as described in the Web API documentation.
- The AbortController will allow us to abort the web request by passing the AbortSignal to the fetch method and then calling abort before the component is unmounted.
#### Example
``` html
    import React, { useEffect } from 'react';
    
    function ShameelComponent() {
      useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        const fetchData = async () => {
          try {
            const response = await fetch("your-api-url", { signal });
            const data = await response.json();
            // Process your data here
          } catch (error) {
            if (error.name === 'AbortError') {
              console.log('Request aborted'); // Handle aborted request
            } else {
              console.error('Error:', error);
            }
          }
        };
    
        fetchData();
    
        return () => {
          controller.abort(); // Abort the request when the component unmounts
        };
      }, []);
    
      return (
        // Your component's content
      );
    }

export default ShameelComponent;
```
