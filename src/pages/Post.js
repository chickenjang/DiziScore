import { useParams } from "react-router-dom";
import Grade from "../components/Grade";
import { useState, useEffect } from "react";
import PastTime from "../components/PastTime";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((result) => setPost(() => result));
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <div>제목 : {post.title}</div>
          <div>작성자 : {post.author}</div>
          <div>
            작성시간: <PastTime createdAt={post.createdAt} />
          </div>
          <div>내용 : {post.author}</div>
          <Grade grade={post.grade} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Post;
