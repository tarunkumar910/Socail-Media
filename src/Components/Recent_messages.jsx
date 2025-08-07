import React, { useEffect } from "react";
import { dummyRecentMessagesData } from "../assets/assets";
import { Link } from "react-router-dom";
import moment from "moment";
import "./css/Recent_message.css"


const Recent_messages = () => {
  const [messages, setMessages] = React.useState([]);

  const fetchMessages = () => {
    setMessages(dummyRecentMessagesData);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="recent-messages">
      <h3 className="recent_messages_text">Recent Messages</h3>
      <div className="message_array">
        {messages.map((message, index) => (
          <Link key={index} to={`/messages/${message.from_user_id._id}`} className="message_link">
            <img
              src={message.from_user_id.profile_picture}
              alt={`${message.from_user_id.full_name}'s profile`}
              className="profile_picture"
            />
            <div className="messages">
              <div className="messages_user_name">
                <p className="messages_text_name">{message.from_user_id.full_name}</p>
                <p className="messagetime">{moment(message.createdAt).fromNow()}</p>
              </div>
              <div className="message_content">
                <p>{message.text || "Media"}</p>
                {!message.seen && <p className="message_not_seen">1</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recent_messages;
