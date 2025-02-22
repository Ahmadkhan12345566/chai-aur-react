import { useState } from "react";

import UserContextProvider from "./context/UserContextProvider";
import Login from "./commponents/Login";
import Profile from "./commponents/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
