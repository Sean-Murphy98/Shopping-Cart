import { useState } from "react";
import "./Homepage.css";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.jsx";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1>Shop the latest trends</h1>
      <ImageCarousel />
      <div className="card">
        <div className="social-icons">
          <a
            class="social-icon"
            href="https://github.com/Sean-Murphy98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
          </a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/sean-murphy-077a12215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
          </a>
        </div>
      </div>
      <p className="read-the-docs">
        All clothing is designed, printed & embroidered in our workshop in Naas,
        Co. Kildare.
      </p>
    </div>
  );
}

export default Homepage;
