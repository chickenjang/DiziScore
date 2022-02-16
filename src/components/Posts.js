import { postsData } from "../dummy/db";
import Grade from "./Grade";
import PastTime from "./PastTime";

function Posts() {
  const posts = postsData.map((post) => (
    <div key={post.id}>
      <div>{post.title}</div>
      <Grade grade={post.grade} />
      <div>{post.author}</div>
      <PastTime createdAt={post.createdAt} />
    </div>
  ));

  return <div>{posts}</div>;
}

export default Posts;
