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
            <div>
              제목<span className="post-input">{post.title}</span>
            </div>
            <div>
              작성자<span className="post-input">{post.author}</span>
            </div>
            <div>
              작성시간
              <span className="post-input">
                <PastTime createdAt={post.createdAt} />
              </span>
            </div>
            <div>
              내용<span className="post-input">{post.body}</span>
            </div>
            <div className="post-grade">
              <Grade grade={post.grade} />
            </div>
            <div className="post-btns">
              <button onClick={handelDeleteClick} className="post-btns-delete">
                delete
              </button>
              <button
                onClick={() => setMode("update")}
                className="post-btns-update"
              >
                update
              </button>
            </div>
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
