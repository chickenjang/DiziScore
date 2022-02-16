import { postsData } from "../dummy/db";
import Grade from "./Grade";

function Posts() {
  const posts = postsData.map((post) => (
    <div>
      <div>{post.title}</div>
      <div>{post.grade}</div>
      <div>{post.author}</div>
      <div>{post.createdAt}</div>
      <Grade grade={post.grade} />
    </div>
  ));
  return <div>{posts}</div>;
}

export default Posts;
