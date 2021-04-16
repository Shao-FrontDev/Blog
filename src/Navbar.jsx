import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Shaodeyu BLog</h1>
      <div className="links">
        <NavLink to="/home" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/create" activeClassName="selected">
          New Blog
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
