import "./Error.css";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div className="error-wrap">
      <div className="error">
        <div className="right">
          <img src="/img/error.png" alt="" />
        </div>
        <div className="left">
          <h1>Something's wrong here</h1>
          <p>
            We can't find the page you're looking for. Check out our Help <br />
            Center or head back to home
          </p>
          <div className="buttons">
            <button className="helpbtn">Help</button>
            <Link to="/" className="link">
              {" "}
              <button className="homebtn">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
