import Play from "../components/Play";
import { useState } from "react";
import "./Game.css";

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
  const players = JSON.parse(sessionStorage.getItem("players"));
  const inputNames = [];
  let i = 1;
  while (i <= numOfPlayers) {
    inputNames.push(
      <input
        type="text"
        key={i}
        className="game-form-input"
        name="player"
        required
      />
    );
    i++;
  }

  return (
    <div>
      {stage === 0 && (
        <div className="game">
          <h2 className="game-title">플레이 할 인원 수를 입력하세요</h2>
          <form onSubmit={handleNumSubmit} className="game-form">
            <input
              className="game-form-input"
              type="number"
              min={2}
              max={4}
              name="numOfPlayers"
              placeholder="2~4까지 숫자를 입력하세요"
              required
            />
            <input className="game-form-button" type="submit" value="다 음" />
          </form>
        </div>
      )}
      {stage === 1 && (
        <div className="game">
          <h2 className="game-title">플레이들의 이름을 입력하세요</h2>
          <form onSubmit={handleNameSubmit} className="game-form">
            {inputNames}
            <div className="game-form-btns">
              <button
                className="game-form-button"
                onClick={() => setStage(stage - 1)}
              >
                이전
              </button>
              <input type="submit" value="다음" className="game-form-button" />
            </div>
          </form>
        </div>
      )}
      {stage === 2 && (
        <div className="game">
          <h2 className="game-title">게임을 시작해볼까요?</h2>
          <div className="game-btns">
            <button
              className="game-form-button"
              onClick={() => setStage(stage - 1)}
            >
              이전
            </button>
            <button className="game-form-button" onClick={() => setStage(3)}>
              시작하기
            </button>
          </div>
        </div>
      )}
      {stage === 3 && <Play numOfPlayers={numOfPlayers} players={players} />}
    </div>
  );
}

export default Game;
