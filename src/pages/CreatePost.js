import Grade from "../components/Grade";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";

function CreatePost() {
  const [grade, setGrade] = useState(-1);
  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const body = event.target.body.value;

    fetch("https://diziscoreback.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        body: body,
        createdAt: Date.now(),
        grade: grade,
      }),
    });
  }

  return (
    <div className="posts-main">
      <form onSubmit={handleSubmit} className="post">
        <div>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            name="title"
            id="title"
            className="post-input write"
            required
          />
        </div>
        <div>
          <label htmlFor="author">작성자</label>
          <input
            type="text"
            name="author"
            id="author"
            className="post-input write"
            required
          />
        </div>
        <div className="post-textarea">
          <label htmlFor="body">내용</label>
          <textarea
            rows={11}
            name="body"
            id="body"
            value={textarea}
            onChange={(event) => setTextarea(event.target.value)}
            className="post-input write"
            required
          ></textarea>
        </div>
        <div className="post-grade">
          <Grade
            grade={-1}
            gradeChange={(gradeValue) => setGrade(gradeValue)}
            required
          />
        </div>
        <div className="post-btns">
          <input
            type="button"
            value="취소"
            onClick={() => navigate(-1)}
            className="post-btns-cancel"
          />
          <input
            type="submit"
            value="등록"
            onClick={() => navigate(-1)}
            className="post-btns-register"
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
