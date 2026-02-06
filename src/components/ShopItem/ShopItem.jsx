import { useState } from "react";
import { useOutletContext } from "react-router";
import QuantityControl from "../QuantityControl/QuantityControl.jsx";
import styles from "./ShopItem.module.css";

function ShopItem({ item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [quantity, setQuantity] = useState(null);

  const handleChange = (newQuantity) => {
    console.log(`Quantity for item ${item.id} changed to:`, newQuantity);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const itemToAdd = { ...item, quantity };
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (cartItem) => cartItem.id === item.id,
        );
        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += quantity;
          return updatedItems;
        } else {
          return [...prevItems, itemToAdd];
        }
      });
      setQuantity(0);
      console.log(`Adding ${quantity} of item ${item.id} to cart.`);
    } else {
      console.log(`No quantity selected for item ${item.id}.`);
    }
  };

  return (
    <div key={item.id} className={styles["shop-item"]}>
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
      <QuantityControl quantity={quantity} onChange={handleChange} />
      <button onClick={handleAddToCart} className={styles["add-to-cart-btn"]}>
        Add to Cart
      </button>
    </div>
  );
}
export default ShopItem;
