import { useParams, useNavigate } from "react-router-dom";
import Grade from "../components/Grade";
import { useState, useEffect } from "react";
import PastTime from "../components/PastTime";
import UpdatePost from "./UpdatePost";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [mode, setMode] = useState("read");
  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(() => result));
  }, []);

  function handelDeleteClick() {
    fetch(`http://localhost:3001/posts/${id}`, { method: "DELETE" });
    navigate("/posts");
  }

  return (
    <div>
      {post ? (
        mode === "read" ? (
          <div>
            <div>제목 : {post.title}</div>
            <div>작성자 : {post.author}</div>
            <div>
              작성시간: <PastTime createdAt={post.createdAt} />
            </div>
            <div>내용 : {post.body}</div>
            <Grade grade={post.grade} />
            <button onClick={handelDeleteClick}>delete</button>
            <button onClick={() => setMode("update")}>update</button>
          </div>
        ) : (
          <UpdatePost id={id} />
        )
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Post;
