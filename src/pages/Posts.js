import { Outlet } from "react-router-dom";
import "./Posts.css";

function Posts() {
  return (
    <div className="posts">
      <nav className="posts-nav">디지오스</nav>
      <Outlet />
    </div>
  );
}

export default Posts;
