import { Link } from "react-router-dom";
import Grade from "../components/Grade";
import PastTime from "../components/PastTime";
import { useState, useEffect } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://diziscoreback.herokuapp.com/posts")
      .then((response) => response.json())
      .then((result) =>
        setPosts(() =>
          result.map((post) => (
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              className="post-main-item"
            >
              <div className="post-main-item-title">{post.title}</div>
              <div className="post-main-item-others">
                <Grade grade={post.grade} />
                <div>{post.author}</div>
                <PastTime createdAt={post.createdAt} />
              </div>
            </Link>
          ))
        )
      );
  }, [posts]);
  return (
    <div className="post">
      <nav className="post-nav">디지오스</nav>
      <main className="post-main">
        {posts ? posts : <div>loading</div>}
        <Link to={"create"}>
          <button className="post-main-btn">작성하기</button>
        </Link>
      </main>
    </div>
  );
}

export default Posts;
