import { useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleClick(e) {
    if (e.target.className === "prev") {
      setCurrentIndex((currentIndex - 1 + 3) % 3);
    } else if (e.target.className === "next") {
      setCurrentIndex((currentIndex + 1) % 3);
    }
  }

  return (
    <div className="carousel">
      <div className="carousel-images">
        {currentIndex == 0 && (
          <div className="imgContainer">
            <img src="/pexels-idsreza-12513230.jpg" className="visible fade" />
            <img
              src="/pexels-cottonbro-9154696.jpg"
              className="visible fade center"
            />
            <img
              src="/pexels-th-c-le-h-u-605106-1390602.jpg"
              className="visible fade"
            />
          </div>
        )}
        {currentIndex == 1 && (
          <div className="imgContainer">
            <img src="/pexels-cottonbro-9154696.jpg" className="visible fade" />
            <img
              src="/pexels-th-c-le-h-u-605106-1390602.jpg"
              className="visible fade center"
            />
            <img src="/pexels-idsreza-12513230.jpg" className="visible fade" />
          </div>
        )}
        {currentIndex == 2 && (
          <div className="imgContainer">
            <img
              src="/pexels-th-c-le-h-u-605106-1390602.jpg"
              className="visible fade"
            />
            <img
              src="/pexels-idsreza-12513230.jpg"
              className="visible fade center"
            />
            <img src="/pexels-cottonbro-9154696.jpg" className="visible fade" />
          </div>
        )}
      </div>
      <button className="prev" onClick={handleClick}>
        &#10094;
      </button>
      <button className="next" onClick={handleClick}>
        &#10095;
      </button>
      <div style={{ textAlign: "center" }}>
        <span className={"dot " + (currentIndex === 0 ? "active" : "")}></span>
        <span className={"dot " + (currentIndex === 1 ? "active" : "")}></span>
        <span className={"dot " + (currentIndex === 2 ? "active" : "")}></span>
      </div>
    </div>
  );
}

export default ImageCarousel;
