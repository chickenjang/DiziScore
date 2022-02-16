import { useParams } from "react-router-dom";
import Grade from "../components/Grade";

function Post() {
  const { id } = useParams();
  // TODO: id에 따라 글 불러오기
  return (
    <div>
      <div>
        <div>제목</div>
        <div>작성자</div>
        <div>작성시간</div>
        <div>내용</div>
        <Grade grade={2} />
      </div>
    </div>
  );
}

export default Post;
