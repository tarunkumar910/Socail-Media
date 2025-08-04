import React from "react";
import logo from "../assets/log.png";
import user_group from "../assets/user_group.png"
import star from "../assets/rating.png"
import { SignIn} from '@clerk/clerk-react';

import '../Css-Property/Signup.css'


const Signup = () => {
  return (
   <div className="login_page">
      {/* Left side */}
      <div className="left_side">
        <img src={logo} alt="Logo" className="logo" />

        <div className="user_and_rating">
          <img src={user_group} alt="users" className="user_group" />
          <div className="star_section">
            <img src={star} alt="rating stars" className="rating" />
            <p className="used_by">Used by 12k+ developers</p>
          </div>
        </div>

        <h1 className="left_side_title">More than just friends truly connect</h1>
        <p className="left_side_subtitle">
          connect with global community on LinkUp
        </p>
      </div>

      {/* Right side login form */}
      <div className="right_side">
       <SignIn />
      </div>
    </div>
  );
};

export default Signup;
