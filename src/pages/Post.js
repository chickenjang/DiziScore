import { useParams } from "react-router-dom";
import Grade from "../components/Grade";

function Post() {
  const { id } = useParams();
  // TODO: id에 따라 글 불러오기
  return (
    <div>
      <div>
        <div>제목</div>
        {id}
        <div>내용</div>
        {id}
        <Grade grade={2} />
      </div>
    </div>
  );
}

export default Post;
