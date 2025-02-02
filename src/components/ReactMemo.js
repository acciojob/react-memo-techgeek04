import React, { useState } from "react";
import TodoList from "./TodoList";

const ReactMemo = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.length > 5) {
      setSkills([...skills, input]);
      setInput("");
    } else {
      alert("Skill name must be longer than 5 characters.");
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>
      <TodoList skills={skills} />
    </div>
  );
};

export default ReactMemo;
