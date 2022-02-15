import img1 from "../static/images/man1.png";
import img2 from "../static/images/woman1.png";
import img3 from "../static/images/man2.png";
import img4 from "../static/images/woman2.png";

const playerImages = [img1, img2, img3, img4];

function Avatar({ order }) {
  return (
    <div>
      <img src={playerImages[order]} alt="playerImage" width={50} height={50} />
    </div>
  );
}

export default Avatar;
