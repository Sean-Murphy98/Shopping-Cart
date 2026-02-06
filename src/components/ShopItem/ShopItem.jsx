import { useState } from "react";
import "./ShopItem.css";

function ShopItem({ item }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div key={item.id} className="shop-item">
      <div className="imgWrapper">
        <img src={item.image} alt={item.title} className="shop-item-image" />
      </div>
      <h2 className="shop-item-title">{item.title}</h2>
      <p className="shop-item-price">${item.price}</p>
      <p className="shop-item-description">{item.description}</p>
    </div>
  );
}
export default ShopItem;
