import { useState } from "react";

import "./App.css";
// import Page from "./app/dashboard/page";
import Page from "./app/login/page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Page></Page>
      </div>
    </>
  );
}

export default App;
