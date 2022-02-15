import Main from "./pages/Main";
import Board from "./pages/Board";
import Game from "./pages/Game";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<Board />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
