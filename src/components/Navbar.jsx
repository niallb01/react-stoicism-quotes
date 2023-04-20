import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        <>
          <li className="nav-links">
            <Link to="/quotes">Quotes</Link>
          </li>
          <li className="nav-links">
            <Link to="/about">About</Link>
          </li>
        </>
      </ul>
    </div>
  );
};

export default Navbar;
