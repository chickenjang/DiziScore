import Grade from "../components/Grade";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpdatePost.css";

function UpdatePost({ id }) {
  const [grade, setGrade] = useState(-1);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://diziscoreback.herokuapp.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(() => result));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const body = event.target.body.value;

    fetch(`https://diziscoreback.herokuapp.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        author: author,
        body: body,
        grade: grade,
      }),
    }).then(() => navigate("/posts"));
  }

  return (
    <div className="post">
      {post && (
        <form onSubmit={handleSubmit} className="post">
          <div>
            <label htmlFor="title">제목</label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title}
              onChange={(event) =>
                setPost((current) => {
                  const newPost = { ...current, title: event.target.value };
                  return newPost;
                })
              }
              className="post-input write"
            />
          </div>
          <div>
            <label htmlFor="author">작성자</label>
            <input
              type="text"
              name="author"
              id="author"
              value={post.author}
              onChange={(event) =>
                setPost((current) => {
                  const newPost = { ...current, author: event.target.value };
                  return newPost;
                })
              }
              className="post-input write"
            />
          </div>
          <div className="post-textarea">
            <label htmlFor="body">내용</label>
            <textarea
              name="body"
              id="body"
              value={post.body}
              onChange={(event) =>
                setPost((current) => {
                  const newPost = { ...current, body: event.target.value };
                  return newPost;
                })
              }
              className="post-input write"
            ></textarea>
          </div>
          <div className="post-grade">
            <Grade
              grade={-1}
              originGrade={post.grade}
              gradeChange={(gradeValue) => setGrade(gradeValue)}
            />
          </div>
          <div className="post-btns">
            <input
              type="button"
              value="취소"
              onClick={() => navigate(-1)}
              className="post-btns-cancel"
            />
            <input type="submit" value="수정" className="post-btns-update" />
          </div>
        </form>
      )}
    </div>
  );
}

export default UpdatePost;
