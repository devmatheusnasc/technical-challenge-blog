import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommentList } from "./components/CommentList";
import Posts from "./components/posts";
import { UserDate } from "./components/UserDate";
import { Users } from "./components/users";

function App() {
  return (
    <div className="w-full max-w-[1344px] mx-auto h-screen flex justify-between">
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:postId" element={<CommentList />} />
          <Route path="/users"></Route>
          <Route path="/users/:userId" element={<UserDate />} />
        </Routes>
        <Users />
      </Router>
    </div>
  );
}

export default App;
