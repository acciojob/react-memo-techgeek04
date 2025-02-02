import React, { useState } from "react";
import UseMemo from "./components/UseMemo";
import ReactMemo from "./components/ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>

      <UseMemo count={count} />
      <ReactMemo todos={todos} />
    </div>
  );
};

export default App;
