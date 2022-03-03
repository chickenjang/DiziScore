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
      <Route path="/DiziScore/posts" element={<Posts />}>
        <Route index element={<ReadPosts />} />
        <Route path="/DiziScore/posts/:id" element={<ReadPost />} />
        <Route path="/DiziScore/posts/create" element={<CreatePost />} />
      </Route>
      <Route path="/DiziScore/game" element={<Game />} />
      <Route path="/DiziScore/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
