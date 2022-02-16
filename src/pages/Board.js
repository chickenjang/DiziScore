import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import { useState } from "react";

function Board() {
  const [mode, setMode] = useState("read");

  return (
    <div>
      {mode === "read" && (
        <div>
          <Posts />
          <button onClick={() => setMode("create")}>작성하기</button>
        </div>
      )}

      {mode === "create" && <CreatePost />}
    </div>
  );
}

export default Board;
