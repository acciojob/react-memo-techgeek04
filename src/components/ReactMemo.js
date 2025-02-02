import React, { useState } from "react";

const ReactMemo = React.memo(() => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.length > 5) {
      setSkills([...skills, newSkill]);
      setNewSkill("");  
    }
  };

  return (
    <div>
      <h2>React.memo</h2>
      <input
        id="skill-input" 
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button id="add-skill" onClick={addSkill}>Add Skill</button>  {/* Ensuring button exists */}
      <ul id="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
