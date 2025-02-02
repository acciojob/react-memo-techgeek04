import React from "react";

const TodoList = React.memo(({ skills }) => {
  console.log("Rendering TodoList...");
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
});

export default TodoList;
