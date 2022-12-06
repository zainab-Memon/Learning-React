import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>logo</h3>

        <ul className="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* we can use both ways, either link tag inside li tag or li tag inside link */}
          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/shop">
            <li>shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
