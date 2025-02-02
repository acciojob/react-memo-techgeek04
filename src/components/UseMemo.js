import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(100000000), []);

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <ul id="todo-list">  
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button id="add-todo" onClick={addTodo}>Add Todo</button> 
      <br />
      <p>Count: {count}</p>
      <button id="increment-count" onClick={() => setCount(count + 1)}>+</button>
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
};

export default UseMemo;
