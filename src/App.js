import Main from "./pages/Main";
import Posts from "./pages/Posts";
import ReadPosts from "./pages/ReadPosts";
import ReadPost from "./pages/ReadPost";
import CreatePost from "./pages/CreatePost";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/DiziScore" element={<Main />} />
      {/* Route */}
      <Route path="/posts" element={<Posts />}>
        <Route index element={<ReadPosts />} />
        <Route path="/posts/:id" element={<ReadPost />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Route>
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
