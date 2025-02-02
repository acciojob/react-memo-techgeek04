import React from "react";

const ReactMemo = React.memo(({ todos }) => {
  console.log("Rendering Todo List...");
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
