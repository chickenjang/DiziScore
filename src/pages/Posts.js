import ReadPosts from "../components/ReadPosts";
import CreatePost from "../components/CreatePost";
import { useState } from "react";

function Posts() {
  const [mode, setMode] = useState("read");

  return (
    <div>
      {mode === "read" && (
        <div>
          <ReadPosts />
          <button onClick={() => setMode("create")}>작성하기</button>
        </div>
      )}

      {mode === "create" && <CreatePost />}
    </div>
  );
}

export default Posts;
