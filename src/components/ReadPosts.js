import { postsData } from "../dummy/db";
import Grade from "./Grade";
import PastTime from "./PastTime";
import { Link } from "react-router-dom";

function ReadPosts() {
  const posts = postsData.map((post) => (
    // css생성 후 style속성 삭제 필요
    <Link to={`/posts/${post.id}`} key={post.id} style={{ display: "flex" }}>
      <div>{post.title}</div>
      <Grade grade={post.grade} />
      <div>{post.author}</div>
      <PastTime createdAt={post.createdAt} />
    </Link>
  ));

  return <div>{posts}</div>;
}

export default ReadPosts;
