import React from "react";
import styles from "./QuantityControl.module.css";

function QuantityControl({ quantity, onChange }) {
  const handleIncrease = () => {
    if (quantity < 99) {
      onChange(quantity + 1);
    }
  };
  const handleDecrease = () => {
    if (quantity > 0) {
      onChange(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = Math.max(0, Math.min(99, Number(e.target.value)));
    onChange(value);
  };

  return (
    <div className={styles.quantityControl}>
      <button className={styles.btn} onClick={handleDecrease}>
        -
      </button>
      <input
        className={styles.quantityInput}
        type="number"
        value={quantity}
        onChange={handleInputChange}
        placeholder="Number.."
        min="0"
        max="99"
      />
      <button className={styles.btn} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityControl;
