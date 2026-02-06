import { useEffect, useState } from "react";
import "./Shop.css";
import { fetchData } from "../../utils/shopQuery.js";
import ShopItem from "../../components/ShopItem/ShopItem.jsx";

function Shop() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const tempData = [];
    fetchData()
      .then((data) => {
        console.log("Fetched shop data:", data);
        data.forEach((item) => {
          tempData.push({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            description: item.description,
          });
        });
        setData(tempData);
        console.log("Processed shop data:", tempData);
      })
      .catch((error) => console.error("Error fetching shop data:", error));
  }, []);

  return (
    <div className="shop">
      <h1>Vite + React</h1>
      {data ? (
        <div className="shop-items">
          {data.map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>Loading shop items...</p>
      )}
    </div>
  );
}

export default Shop;
