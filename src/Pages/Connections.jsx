import React from "react";
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

  const dateArray = [
    { label: "Followers", data: followers, icon: Users, action: "followers" },
    {
      label: "Following",
      data: following,
      icon: UserCheck,
      action: "following",
    },
    {
      label: "Pending ",
      data: pendingConnections,
      icon: UserPlus,
      action: "pending",
    },
    {
      label: "Connections",
      data: connections,
      icon: UserRoundPen,
      action: "connections",
    },
  ];

  return (
    <div className="connectio_data">
      <div className="connections-header">
        {/* title */}

        <div className="title">
          <h2>Connections</h2>
          <p className="message">
            Mange your network and discover new connections
          </p>
        </div>


        {/* count */}


        <div className="count">
          {
            dateArray.map(({ label, data, icon, action }) => (
              <div
                key={label}
                className="count-item"
                onClick={() => navigate(`/connections/${action}`)}
              >
                <span className="icon">
                  <icon />
                </span>
                <span className="label">{label}</span>
                <span className="number">{data.length}</span>
              </div>
            ))
          }
        </div>




        {/* tabs */}


        <div className="tabs">
          {
            dateArray.map((tab) => (
              <button key={tab.level}>


                
              </button>
              
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Connections;
