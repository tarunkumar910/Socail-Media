import React from "react";
import "../Css-Property/Connection.css";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPen,
  MessageSquare,
} from "lucide-react";

import {
  dummyConnectionsData as connections,
  dummyFollowingData as following,
  dummyFollowersData as followers,
  dummyPendingConnectionsData as pendingConnections,
} from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = React.useState("Followers");

  const dateArray = [
    { label: "Followers", data: followers, icon: Users, action: "followers" },
    { label: "Following", data: following, icon: UserCheck, action: "following" },
    { label: "Pending", data: pendingConnections, icon: UserPlus, action: "pending" },
    { label: "Connections", data: connections, icon: UserRoundPen, action: "connections" },
  ];

  return (
    <div className="connection_data">
      <div className="connections-header">
        <div className="title">
          <h2>Connections</h2>
          <p className="message">
            Manage your network and discover new connections
          </p>
        </div>

        {/* Counts */}
        <div className="count">
          {dateArray.map(({ label, data, icon: Icon, action }) => (
            <div
              key={label}
              className="count-item"
              onClick={() => navigate(`/connections/${action}`)}
            >
              <span className="icon">
                <Icon />
              </span>
              <span className="label">{label}</span>
              <span className="number">{data.length}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="tabs">
          {dateArray.map((tab) => (
            <button key={tab.label} onClick={() => setCurrentTab(tab.label)}>
              <tab.icon className="tab-icon" />
              <span className="tab-label">{tab.label}</span>
              <span>{tab.data.length}</span>
            </button>
          ))}
        </div>

        {/* Connections List */}
        <div className="connnextin">
          {dateArray
            .find((tab) => tab.label === currentTab)
            .data.map((user) => (
              <div className="connection-item" key={user._id || user.id}>
                <img src={user.profile_picture} alt="" />
                <div className="name">
                  <p className="full-name">{user.full_name}</p>
                  <p className="username">@{user.username}</p>
                  <p>{user.bio.slice(0, 30)}....</p>
                  <div>
                    <button
                      onClick={() => navigate(`/profile/${user._id || user.id}`)}
                      className="view-profile"
                    >
                      View Profile
                    </button>

                    {currentTab.trim() === "Connections" && (
                      <button
                        className="message"
                        onClick={() => navigate(`/chat/${user._id || user.id}`)}
                      >
                        <MessageSquare />
                        Message
                      </button>
                    )}
                    {currentTab.trim() === "Pending" && (
                      <button className="pending">Accept</button>
                    )}
                    {currentTab.trim() === "Following" && (
                      <button className="unfollow">Unfollow</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;
