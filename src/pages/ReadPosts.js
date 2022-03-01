import { Link } from "react-router-dom";
import Grade from "../components/Grade";
import PastTime from "../components/PastTime";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import "./ReadPosts.css";

function ReadPosts() {
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
              className="posts-main-item"
            >
              <div className="posts-main-item-title">{post.title}</div>
              <div className="posts-main-item-others">
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
    <main className="posts-main">
      {posts ? (
        <div>
          {posts}
          <Link to={"create"}>
            <button className="posts-main-btn">작성하기</button>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default ReadPosts;
