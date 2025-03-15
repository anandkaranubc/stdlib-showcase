import React from "react";
import Title from "./components/Title";
import CodeSnippet from "./components/CodeSnippet";
import FunctionPlotter from "./components/FunctionPlotter";

function App() {
  return (
    <>
      <Title />
      <FunctionPlotter />
      <CodeSnippet />
    </>
  );
}

export default App;
