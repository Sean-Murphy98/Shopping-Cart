import { useState } from "react";
import "../../App.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.jsx";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1>Vite + React</h1>
      <ImageCarousel />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR but home
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Homepage;
