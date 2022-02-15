import playerImage1 from "../static/images/man1.png";
import playerImage2 from "../static/images/woman1.png";
import playerImage3 from "../static/images/man2.png";
import playerImage4 from "../static/images/woman2.png";

function Avatar() {
  return (
    <div>
      <img src={playerImage1} alt="playerImage" width={50} height={50} />
    </div>
  );
}

export default Avatar;
