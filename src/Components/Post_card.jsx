import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import moment from "moment";
import React from "react";


import "./css/Post_card.css";
import { dummyUserData } from "../assets/assets";







const Post_card = ({ post }) => {



    const [likes, setLikes] = React.useState(post.likes_count);
  const postWithHashtags = post.content.replace(
    /#(\w+)/g,
    '<span class="hashtag">#$1</span>'
  );

const currentUser= dummyUserData;

    const handleLike = async() => { 


    }


  return (
    <div className="Post_card">
      {/* user details */}
      <div className="post_user">
        <img src={post.user.profile_picture} alt={`${post.user.full_name} profile`} />
        <div className="post_user_details">
          <p className="post_user_name">{post.user.full_name}</p>
          <BadgeCheck size={20} className="verified_icon" />
        </div>
        <div className="username">
          @{post.user.username} · {moment(post.created_at).fromNow()}
        </div>
      </div>

      {/* content */}
      {post.content && (
        <div
          className="post_content"
          dangerouslySetInnerHTML={{ __html: postWithHashtags }}
        />
      )}

      {/* media */}
      <div className="post_media">
        {post.image_urls.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Post media ${index + 1}`}
            className="post_media_image"
          />
        ))}
      </div>

      {/* interaction buttons */}
      <div className="post_actions">
        <button className="post_action_btn" aria-label="Like" onClick={() => {handleLike}}>
          <Heart size={20} />
          <span>{likes.length || 0}</span>
        </button>
        <button className="post_action_btn" aria-label="Comment">
          <MessageCircle size={20} />
          <span>10</span>
        </button>
        <button className="post_action_btn" aria-label="Share">
          <Share2 size={20} />
            <span>5</span>
        </button>
      </div>
    </div>
  );
};


export default Post_card;
