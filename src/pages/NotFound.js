import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div>
        <div className="cloud x1"></div>
        <div className="cloud x1_5"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
      <div className="c">
        <div className="_404">404</div>
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <Link to="/DiziScore" className="btn">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
