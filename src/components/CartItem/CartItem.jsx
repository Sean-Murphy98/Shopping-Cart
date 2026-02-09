import { useState } from "react";
import { useOutletContext } from "react-router";
import QuantityControl from "../QuantityControl/QuantityControl.jsx";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const [cartItems, setCartItems] = useOutletContext();

  const alterQuantity = (newValue) => {
    if (newValue > 0) {
      const itemToAdd = { ...item, quantity: newValue };
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (cartItem) => cartItem.id === item.id,
        );
        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity = newValue;
          return updatedItems;
        } else {
          console.log(`Error: Item ${item.id} not found in cart.`);
          return prevItems;
        }
      });
      console.log(`Changed quantity to ${newValue} for item ${item.id}.`);
    } else {
      console.log(`Error: Invalid quantity ${newValue} for item ${item.id}.`);
    }
  };

  return (
    <div key={item.id} className={styles.cartItem}>
      <div className={styles.imgWrapper}>
        <img
          src={item.image}
          alt={item.title}
          className={styles["shop-item-image"]}
        />
      </div>
      <div className={styles.texts}>
        <h2 className={styles["shop-item-title"]}>{item.title}</h2>
        <div className={styles.textInformation}>
          <p className={styles["shop-item-price"]}>${item.price}</p>
        </div>
      </div>
      <div className={styles.quantityContainer}>
        <QuantityControl quantity={item.quantity} onChange={alterQuantity} />
      </div>
    </div>
  );
}
export default CartItem;
