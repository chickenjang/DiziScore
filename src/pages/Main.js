import { Link } from "react-router-dom";
import "./Main.css";
import postImg from "../static/images/post.png";
import gameImg from "../static/images/game.png";

function Main() {
  return (
    <div className="main">
      <h2 className="main-title">어떤 걸 하시겠어요?</h2>
      <div className="main-body">
        <Link to="/DiziScore/posts" className="main-body-item">
          <p>게시판</p>
          <img src={postImg} alt="게시판이미지" />
        </Link>
        <Link to="/DiziScore/game" className="main-body-item">
          <p>게임하기</p>
          <img src={gameImg} alt="게임이미지" />
        </Link>
      </div>
    </div>
  );
}

export default Main;
