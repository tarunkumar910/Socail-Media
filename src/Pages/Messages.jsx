import React from "react";
import { dummyConnectionsData } from "../assets/assets";

import "../Css-Property/Messages.css";
import { Eye, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {

const navigate = useNavigate();


  return (
    <div className="message_content">
      <div>
        <div>
          <h1 className="messages">Messages</h1>
          <p className="suggestion">Talk to your friends and family</p>
        </div>

        {/* Connected Users wrapped in a card container */}
        <div className="messages-card">
          <div className="connected_users">
            {dummyConnectionsData.map((user) => (
              <div key={user._id || user.id} className="connected_user">
                <img
                  src={user.profile_picture}
                  alt={`${user.full_name}'s profile`}
                  className="profile_picture"
                />

                <div className="name">
                  <p className="full_name">{user.full_name}</p>
                  <p className="username">@{user.username}</p>
                  <p className="bio">{user.bio}</p>
                </div>

                <div className="buttons">
                  <button className="message_button"  onClick={() => navigate(`/messages/${user._id}`)}>
                    <MessageSquare className="message_icon" />
                  </button>

                  <button className="eye_button"  onClick={() => navigate(`/profile/${user._id}`)} >
                    <Eye className="eye_icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
