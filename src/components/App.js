import React from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  return (
    <div>
      <h1>React Performance Optimization</h1>
      <UseMemo />
      <ReactMemo />
    </div>
  );
};

export default App;
