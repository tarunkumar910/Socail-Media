import React from "react";
import { assets, dummyUserData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import Menu_items from "./Menu_items";
import { CirclePlus, LogOut } from "lucide-react";
import "./css/Sidebar.css";
import { UserButton, useClerk } from "@clerk/clerk-react";
import logo from "../assets/lofo.png"

const Sidebar = ({ Open, setOpen }) => {
  const navigate = useNavigate();

  const user=dummyUserData;

const { signOut } = useClerk();




  return (
    <div
      className={`sidebar-container ${
        Open ? "sidebar-open" : "sidebar-closed"
      }`}
    >
      <button className="sidebar-close-btn" onClick={() => setOpen(false)}>
        &times;
      </button>
      <div className="sidebar-content">
        <img
          src={logo}
          alt="LinkUp logo"
          onClick={() => navigate("/")} className="logo"
        />

        

        <Menu_items setOpen={setOpen} />

        <Link to="/create-post" className="create-post-button">
          <CirclePlus />
          Create Post
        </Link>
      </div>

      <div className="user_button">
        <UserButton />
        <div className="user_deatils">
            <h1>{user.full_name}</h1>
            <p>@{user.username}</p>
        </div>
      </div>

      <LogOut onClick={ signOut }  className="log-out-icon" />
    </div>
  );
};

export default Sidebar;
