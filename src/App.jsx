import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Error from "./pages/404";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/followers" element={<Followers />} />
      <Route path="/following" element={<Following />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
