import React from "react";
import { dummyUserData } from "../assets/assets";
import './css/User_card.css'
import { MapPin, MessageCircle, Plus, UserPlus } from "lucide-react";



const User_cards = ({ user }) =>{

    const currentUser = dummyUserData; 

    const handleFoll0w = async () => {};


  const handleConnnectionRequest = async () => {};


    return (
  <div className="user-card">
    <div className="profile_picture">
      <img
        src={user.profile_picture}
        alt={user.full_name}
        className="profile_image"
      />
    </div>
    <div className="user_info">
      <p className="user_name">{user.full_name}</p>
      {user.username && <p className="username">@{user.username}</p>}
      {user.bio && <p className="user_bio">{user.bio}</p>}
    </div>



    <div className="follower_loaction">
        <div className="location">
            <MapPin className="location_icon" />{user.location ? user.location : "Location not specified"}
        </div>

        <div className="followers">
            <span className="length">
               {user.followers.length} 
            </span>Follwers
        </div>
    </div>

    <div className="follow" onClick={handleFoll0w} disable={currentUser?.following.includes(user._id)} >
        <button className="follow_button">
            <UserPlus className="follow_icon" />
            {
                currentUser?.following.includes(user._id)?'Following':'Follow'
            }
        </button>


        {/* connection request button / message button */}

        <button className="message" onClick={handleConnnectionRequest}>

            {
                currentUser?.connections.includes(user._id)?
                <MessageCircle className="message_icon" />
                :
                <Plus Circle className="message_icon" />
            }
        </button>
    </div>
  </div>
)
};
export default User_cards;

