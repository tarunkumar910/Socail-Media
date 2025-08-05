import React, { useState, useEffect } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import "./css/Stories.css";
import Storie_model from "./Storie_model";
import Story_View from "./Story_View";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);

  const fetchStories = async () => {
    setStories(dummyStoriesData);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div className="stories">
      {/* Scrollable stories container */}
      <div className="story_cards_scroll">
        {/* Create Story Card */}
        <div className="storie_card" onClick={() => setShowModel(true)}>
          <div className="create_story_wrapper">
            <div className="create_story_inner">
              <div className="plus_wrapper">
                <Plus className="plus" />
              </div>
              <p className="create_story">Create Story</p>
            </div>
          </div>
        </div>

        {/* User Stories */}
        {stories.map((story, index) =>
          story.media_type !== "text" ? (
            <div
              key={index}
              className="key_index"
              onClick={() => setCurrentStoryIndex(index)}
            >
              {story.media_type === "image" ? (
                <img
                  src={story.media_url}
                  alt={`Story ${index + 1}`}
                  className="story_media_bg"
                />
              ) : (
                <video
                  src={story.media_url}
                  alt={`Story video ${index + 1}`}
                  className="story_media_bg"
                  autoPlay
                  muted
                  loop
                />
              )}
              <img
                src={story.user.profile_picture}
                alt={`${story.user.full_name} profile`}
                className="profile_picture story_avatar"
              />
              <p className="story_created_at">
                {moment(story.createdAt).fromNow()}
              </p>
            </div>
          ) : (
            <div
              key={index}
              className="key_index text_story_card"
              onClick={() => setCurrentStoryIndex(index)}
              style={{ backgroundColor: story.background_color }}
            >
              <img
                src={story.user.profile_picture}
                alt={`${story.user.full_name} profile`}
                className="profile_picture story_avatar"
              />
              <p className="story_content">{story.content}</p>
              <p className="story_created_at">
                {moment(story.createdAt).fromNow()}
              </p>
            </div>
          )
        )}
      </div>

      {/* Create Story Modal */}
      {showModel && (
        <Storie_model setShowModel={setShowModel} fetchStories={fetchStories} />
      )}

      {/* Story Viewer modal */}
      {currentStoryIndex !== null && (
        <Story_View
          stories={stories}
          currentIndex={currentStoryIndex}
          setCurrentIndex={setCurrentStoryIndex}
        />
      )}
    </div>
  );
};

export default Stories;
