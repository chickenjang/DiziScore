import { Link } from "react-router-dom";
import Grade from "../components/Grade";
import PastTime from "../components/PastTime";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((result) =>
        setPosts(() =>
          result.map((post) => (
            // css생성 후 style속성 삭제 필요
            <Link
              to={`/posts/${post._id}`}
              key={post._id}
              style={{ display: "flex" }}
            >
              <div>{post.title}</div>
              <Grade grade={post.grade} />
              <div>{post.author}</div>
              <PastTime createdAt={post.createdAt} />
            </Link>
          ))
        )
      );
  }, []);
  return (
    <div>
      {posts ? posts : <div>loading</div>}
      <Link to={"create"}>
        <button>작성하기</button>
      </Link>
    </div>
  );
}

export default Posts;
