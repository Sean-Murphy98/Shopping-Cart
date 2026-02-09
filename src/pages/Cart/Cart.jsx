import { useState } from "react";
import { useOutletContext } from "react-router";
import CartItem from "../../components/CartItem/CartItem.jsx";
import "./Cart.css";

function Cart() {
  const [count, setCount] = useState(0);
  const [cartItems] = useOutletContext();

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cartItems">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
