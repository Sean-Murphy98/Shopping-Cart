import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <NavBar count={count} />
      <Outlet />
    </div>
  );
}

export default App;
