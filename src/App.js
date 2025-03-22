import React from "react";
import Hello from "./components/Hello";
import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Hello name="Madhu" />
      <Box />
    </div>
  );
}

export default App;
