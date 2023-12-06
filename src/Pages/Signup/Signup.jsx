import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-wrap">
      <form action="">
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>
          <Link to="/complete">SIGNUP</Link>
        </button>
      </form>
      <p>
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  );
}
