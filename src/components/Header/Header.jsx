import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrap">
      <nav>
        <div className="logo">
          <h1>
            <Link to="" className="link">
              NAYAN
            </Link>
          </h1>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <Link to="" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="link">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/team" className="link">
                Team Members
              </Link>
            </li>
            <li>
              <Link to="/error" className="link">
                Error
              </Link>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <Link to="/login" className="link">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
