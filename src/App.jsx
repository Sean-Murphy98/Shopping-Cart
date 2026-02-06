import { useState, useEffect, use } from "react";
import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleCountChange = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  useEffect(() => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    setCount(totalItems);
  }, [cartItems]);

  return (
    <div className="main">
      <NavBar count={count} />
      <Outlet context={[cartItems, setCartItems]} />
    </div>
  );
}

export default App;
