import React, { useEffect } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import './css/Stories.css'



const Stories = () => {
  const [stories, setStories] = React.useState([]);

  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="stories">
      <div className="storie_card">
        <div className="create_story_wrapper">
          <div className="create_story_inner">
            <div className="plus_wrapper">
              <Plus className="plus" />
            </div>
            <p className="create_story">Create Story</p>
          </div>
        </div>
      </div>

      <div className="story_cards">
       {stories.map((story, index) => (
  (story.media_type !== "text") ? (
    <div key={index} className="key_index">
      {story.media_type === "image" ? (
        <img src={story.media_url} alt="" className="story_media_bg" />
      ) : (
        <video src={story.media_url} alt="" className="story_media_bg" autoPlay muted loop />
      )}
      <img
        src={story.user.profile_picture}
        alt=""
        className="profile_picture story_avatar"
      />
      <p className="story_created_at">{moment(story.createdAt).fromNow()}</p>
    </div>
  ) : (
    <div key={index} className="key_index text_story_card">
      <img
        src={story.user.profile_picture}
        alt=""
        className="profile_picture story_avatar"
      />
      <p className="story_content">{story.content}</p>
      <p className="story_created_at">{moment(story.createdAt).fromNow()}</p>
    </div>
  )
))}

      </div>
    </div>
  );
};

export default Stories;
