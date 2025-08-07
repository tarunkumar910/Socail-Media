import React, { useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Search } from "lucide-react";
import User_cards from "../Components/User_cards";
import "../Css-Property/Discover.css";

const Discover = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(dummyConnectionsData);
  const [loading, setLoading] = useState(false);

  // This would filter users by name or username on Enter
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      const filtered = dummyConnectionsData.filter(
        user =>
          user.full_name.toLowerCase().includes(input.toLowerCase()) ||
          (user.username && user.username.toLowerCase().includes(input.toLowerCase()))
      );
      setTimeout(() => {
        setUsers(filtered);
        setLoading(false);
      }, 700); // small timeout for UX feedback
    }
  };

  return (
    <div className="discover">
      <div className="discover_content">
        <div className="title">
          <h2>Discover People</h2>
          <p className="message">
            Connect with amazing people and expand your network
          </p>
        </div>
        {/* search bar */}
        <div className="search-bar">
          <div className="search_content">
            <div className="search_icon_input">
              <Search className="lucide-search-icon" />
              <input
                type="text"
                className="peoplesearch"
                placeholder="Search people by name, username"
                onChange={e => setInput(e.target.value)}
                value={input}
                onKeyUp={handleSearch}
              />
            </div>
          </div>
        </div>
        {/* user cards */}
        <div className="user_card_component">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : users.length ? (
            users.map(user => <User_cards key={user._id} user={user} />)
          ) : (
            <div className="no-users">No users found.</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Discover;
