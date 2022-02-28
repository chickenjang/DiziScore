import { useParams, useNavigate } from "react-router-dom";
import Grade from "../components/Grade";
import { useState, useEffect } from "react";
import PastTime from "../components/PastTime";
import UpdatePost from "./UpdatePost";
import "./ReadPost.css";

function ReadPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [mode, setMode] = useState("read");
  useEffect(() => {
    fetch(`https://diziscoreback.herokuapp.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(() => result));
  }, []);

  function handelDeleteClick() {
    fetch(`https://diziscoreback.herokuapp.com/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/posts");
  }

  return (
    <div className="posts-main">
      {post ? (
        mode === "read" ? (
          <div className="post">
            <div className="post-title">제목 : {post.title}</div>
            <div className="post-author">작성자 : {post.author}</div>
            <div className="post-created-at">
              작성시간: <PastTime createdAt={post.createdAt} />
            </div>
            <div className="post-body">내용 : {post.body}</div>
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

export default ReadPost;
