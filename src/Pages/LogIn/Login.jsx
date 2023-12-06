import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-wrap">
      <form action="">
        <input type="email" placeholder="Enter your email address..." />
        <input type="password" placeholder="Enter your password..." />
        <button>LOGIN</button>
        <a href="#">Forgot Password?</a>
        <p>
          Don't have an account? <Link to="signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
