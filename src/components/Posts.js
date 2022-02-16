import { postsData } from "../dummy/db";
import Grade from "./Grade";
import PastTime from "./PastTime";

function Posts() {
  const posts = postsData.map((post) => (
    // css생성 후 style속성 삭제 필요
    <div key={post.id} style={{ display: "flex" }}>
      <div>{post.title}</div>
      <Grade grade={post.grade} />
      <div>{post.author}</div>
      <PastTime createdAt={post.createdAt} />
    </div>
  ));

  return <div>{posts}</div>;
}

export default Posts;
