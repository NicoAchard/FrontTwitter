import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Error from "./pages/404";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faUser, far } from "@fortawesome/free-regular-svg-icons";
import { faHouse, faFeather, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTwitter, faFontAwesome, faHouse, faUser, faFeather, far, faTrash);

import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
      </Route>
    </Routes>
  );
}

export default App;
