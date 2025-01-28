import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 p-4">React router</h1>
      <Header></Header>
    </>
  );
}

export default App;
