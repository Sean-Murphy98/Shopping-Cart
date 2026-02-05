import "./NavBar.css";
import { ShoppingCart, Shirt } from "lucide-react";
import { NavLink } from "react-router";

function NavBar({ count }) {
  return (
    <div className="navContainer">
      <div className="navBrand">
        <Shirt />
        <span>Shopster</span>
      </div>
      <nav className="navBar">
        <ul>
          <li className="active">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ShoppingCart />
              {count}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
