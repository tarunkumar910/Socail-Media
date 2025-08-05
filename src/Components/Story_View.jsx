import React, { useState, useEffect } from "react";
import { BadgeCheck, X } from "lucide-react";
import "./css/Story_view.css";

const Story_View = ({ stories, currentIndex, setCurrentIndex }) => {
  const viewStory = stories[currentIndex];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!viewStory) return;

    let timer;
    let progressInterval;

    // For non-video stories, auto advance after duration
    if (viewStory.media_type !== "video") {
      setProgress(0);

      const duration = 5000; // 5 seconds
      const increment = 100; // ms per progress update
      let elapsedTime = 0;

      progressInterval = setInterval(() => {
        elapsedTime += increment;
        setProgress((elapsedTime / duration) * 100);
      }, increment);

      timer = setTimeout(() => {
        goToNext();
      }, duration);
    } else {
      // For video, reset progress bar to 100% (or implement progress from video)
      setProgress(100);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewStory]);

  if (!viewStory) return null;

  const goToNext = () => {
    if (currentIndex + 1 < stories.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(null); // Close viewer at end
    }
  };

  const renderContent = () => {
    switch (viewStory.media_type) {
      case "text":
        return (
          <div className="story_text" style={{ color: viewStory.text_color }}>
            {viewStory.content}
          </div>
        );
      case "image":
        return (
          <img src={viewStory.media_url} alt="Story" className="story_media" />
        );
      case "video":
        return (
          <video
            src={viewStory.media_url}
            className="story_media"
            controls
            autoPlay
            muted
            onEnded={goToNext}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="story_view_container"
      style={{
        backgroundColor:
          viewStory.media_type === "text" ? viewStory.background : "#000000",
      }}
    >
      {/* Progress bar */}
      <div className="progress_bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {/* User info */}
      <div className="userinfo">
        <img
          src={viewStory.user?.profile_picture}
          alt=""
          className="profile_picture"
        />
        <div className="fullname_user">
          <span className="fullname">{viewStory.user?.full_name}</span>
          <BadgeCheck size={20} className="verified_icon" />
        </div>
      </div>

      {/* Close button */}
      <button className="close_button" onClick={() => setCurrentIndex(null)}>
        <X size={24} className="close_button_x" />
      </button>

      {/* Story content */}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Story_View;
