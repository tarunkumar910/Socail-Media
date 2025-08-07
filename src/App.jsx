import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Feed from "./Pages/Feed";
import Message from "./Pages/Messages";
import ChatBox from "./Pages/ChatBox";
import Connections from "./Pages/Connections";
import Discover from "./Pages/Discorver";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";
import { useUser } from "@clerk/clerk-react";
import Layou_linkup from "./Pages/Layou_linkup";

import { Toaster } from "react-hot-toast";

const App = () => {
  const { user } = useUser();

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={!user ? <Signup /> : <Layou_linkup />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
          <Route path="messages" element={<Message />} />
          <Route path="message/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
