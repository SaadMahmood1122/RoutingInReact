// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"; // alternative to link having power of showing active link
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}

            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
