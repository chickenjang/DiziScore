import Main from "./pages/Main";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Game from "./pages/Game";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
