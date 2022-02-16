import Grade from "./Grade";
import { useState } from "react";

function CreatePost() {
  const [grade, setGrade] = useState(-1);
  const [textarea, setTextarea] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: API통신하여 DB에 추가
    // console.log(event.target);
    // console.log(grade);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">제목</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="body">내용</label>
      <textarea
        name="body"
        id="body"
        value={textarea}
        onChange={(event) => setTextarea(event.target.value)}
      ></textarea>
      <Grade grade={-1} gradeChange={(gradeValue) => setGrade(gradeValue)} />
      <input type="button" value="취소" />
      <input type="submit" value="등록" />
    </form>
  );
}

export default CreatePost;
