import Grade from "./Grade";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [grade, setGrade] = useState(-1);
  const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const body = event.target.body.value;

    fetch("http://localhost:3001/posts", {
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

  // TODO: 취소버튼, 등록버튼 리다이렉션 구현
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">제목</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="author">작성자</label>
      <input type="text" name="author" id="author" />
      <label htmlFor="body">내용</label>
      <textarea
        name="body"
        id="body"
        value={textarea}
        onChange={(event) => setTextarea(event.target.value)}
      ></textarea>
      <Grade grade={-1} gradeChange={(gradeValue) => setGrade(gradeValue)} />
      <input type="button" value="취소" onClick={() => navigate(-1)} />
      <input type="submit" value="등록" />
    </form>
  );
}

export default CreatePost;
