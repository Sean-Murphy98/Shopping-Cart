import { useState } from "react";
import "./ImageCarousel.css";

const images = [
  "/pexels-idsreza-12513230.jpg",
  "/pexels-cottonbro-9154696.jpg",
  "/pexels-th-c-le-h-u-605106-1390602.jpg",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  function getOffset(index) {
    let offset = index - currentIndex;

    // wrap offsets so we only ever get -1, 0, or 1
    if (offset > 1) offset -= total;
    if (offset < -1) offset += total;

    return offset;
  }

  return (
    <div className="carousel">
      <div className="viewport">
        <div className="track">
          {images.map((src, index) => {
            const offset = getOffset(index);

            return (
              <img
                key={src}
                src={src}
                className={`slide ${
                  offset === 0
                    ? "center"
                    : offset === -1
                      ? "left"
                      : offset === 1
                        ? "right"
                        : "hidden"
                }`}
              />
            );
          })}
        </div>
      </div>

      <button
        className="prev"
        onClick={() => setCurrentIndex((i) => (i - 1 + total) % total)}
      >
        &#10094;
      </button>

      <button
        className="next"
        onClick={() => setCurrentIndex((i) => (i + 1) % total)}
      >
        &#10095;
      </button>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${currentIndex === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
