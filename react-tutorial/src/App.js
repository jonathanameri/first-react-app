import './App.css';
import { useState, useEffect } from "react";

const Person = ({name, age}) => {
  return (
      <>
        <h1>name: {name}</h1>
        <h2>age: {age}</h2>
      </>
  )
}

const App = () => {
  // You can have any JavaScript code here
  const name = 'Jonathan Ameri';
  const [counter, setCounter] = useState(0);

  // Called when the component is mounted
  // The second parameter is an array of variables that will trigger the useEffect function
  useEffect(() => {
    console.log('Component mounted')
  }, [counter])

  return (
    <div className="App">
      <h1>Hello, My name is {name ? name : 'NULL'}</h1>
      {name ? (
          <>
            <h1>name exists</h1>
          </>
      ) : (
          <>
            <h1>name does not exist</h1>
          </>
      )}
      <Person name={'Jonathan Ameri'}/>
      <Person name={'Jonathan Ameri 2'}/>

      <button onClick={() => {setCounter((prevState) => prevState - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount + 1)}}>+</button>

    </div>
  );
}

export default App;
