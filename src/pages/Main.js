import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h2>어떤 걸 하시겠어요?</h2>
      <Link to="/posts">게시판</Link>
      <Link to="/game">게임</Link>
    </div>
  );
}

export default Main;
