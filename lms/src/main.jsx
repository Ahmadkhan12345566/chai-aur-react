import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router";
import { RouterProvider } from "react-router";
import Login from "./app/login/page";
import Dashboard from "./app/dashboard/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}></Route>
      {/*  <Route path="service" element={<About />}></Route>
      </Route>
      <Route path="contact" element={<Contact />}></Route> 
  </Route>
  */}
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
