import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div>
      <h1>React Memo Assignment</h1>

      <button onClick={addTodo}>Add Todo</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <UseMemo count={count} />

      <ReactMemo todos={todos} />
    </div>
  );
};

export default App;
