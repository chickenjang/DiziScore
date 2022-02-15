import Play from "../components/Play";
import { useState } from "react";

function Game() {
  const [stage, setStage] = useState(0);

  function handleNumSubmit(event) {
    event.preventDefault();
    window.sessionStorage.setItem(
      "numOfPlayers",
      JSON.stringify(event.target.numOfPlayers.value)
    );
    setStage(1);
  }

  function handleNameSubmit(event) {
    event.preventDefault();
    const players = [...event.target.player].map((item) => item.value);
    sessionStorage.setItem("players", JSON.stringify(players));
    setStage(2);
  }

  const numOfPlayers = JSON.parse(sessionStorage.getItem("numOfPlayers"));
  const inputNames = [];
  let i = 1;
  while (i <= numOfPlayers) {
    inputNames.push(<input type="text" key={i} name="player" />);
    i++;
  }

  return (
    <div>
      <h2>플레이 할 인원 수를 입력하세요</h2>
      {stage === 0 && (
        <form onSubmit={handleNumSubmit}>
          <input type="number" min={2} max={4} name="numOfPlayers" />
          <input type="submit" value="다음" />
        </form>
      )}
      {stage === 1 && (
        <form onSubmit={handleNameSubmit}>
          {inputNames}
          <input type="submit" value="다음" />
        </form>
      )}
      {stage === 2 && (
        <div>
          <p>게임을 시작할까요?</p>
          <button onClick={() => setStage(3)}>시작하기</button>
        </div>
      )}
      {stage === 3 && <Play />}
    </div>
  );
}

export default Game;
