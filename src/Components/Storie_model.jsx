import { ArrowLeft, Sparkle, Text, Upload } from "lucide-react";
import React, { useState } from "react";
import "./css/Storie_model.css";

import toast from "react-hot-toast";


export const Storie_model = ({ setShowModel, fetchStories }) => {
  // Creating colors for the background of the story
  const bgcolors = [
    "#10f0ddff",
    "#db1c1cff",
    "#391cdbff",
    "#d1e70aff",
    "#f005f8ff",
  ];

  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgcolors[1]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handles file uploads and previews
  const handleModeChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
      setMode("media");
    }
  };

  const handleCreateStory = async () => {
    // Your story creation logic here
    // For example, form data submission and fetchStories()
  };

  return (
    <div className="storie-modal-overlay">
      <div className="storie-modal-box">
        <div className="storie-modal-header">
          <button
            onClick={() => setShowModel(false)}
            className="storie-modal-close"
          >
            <ArrowLeft />
          </button>
          <h2>Create Story</h2>
        </div>

        <div className="storie-section" style={{ backgroundColor: background }}>
          {mode === "text" && (
            <textarea
              placeholder="Write your story here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="storie-textarea"
            />
          )}

          {mode === "media" && previewUrl && media && (
            media.type.startsWith("image") ? (
              <img
                src={previewUrl}
                className="storie-media-preview-image"
                alt="story preview"
              />
            ) : (
              <video
                src={previewUrl}
                className="storie-media-preview-video"
                controls
              />
            )
          )}
        </div>

        <div className="storie-modal-actions">
          {bgcolors.map((color) => (
            <button
              key={color}
              className="storie-bg-color"
              style={{ backgroundColor: color }}
              onClick={() => setBackground(color)}
            />
          ))}
        </div>

        <div>
          {/* Text mode button */}
          <button
            onClick={() => {
              setMode("text");
              setMedia(null);
              setPreviewUrl(null);
            }}
            className={`storie-mode-text${mode === "text" ? " active" : ""}`}
          >
            <Text className="storie-text-icon" /> Text
          </button>

          {/* Media (photo/video) mode button */}
          <label
            className={`storie-mode-media${mode === "media" ? " active" : ""}`}
            style={{ marginLeft: 8 }}
          >
            <input
              className="storie-media-input hidden"
              type="file"
              accept="image/*,video/*"
              onChange={handleModeChange}
            />
            <Upload size={20} className="storie-media-icon" /> Photo/Video
          </label>
        </div>

        <button
          onClick={() =>
            toast.promise(handleCreateStory(), {
              loading: "Creating story...",
              success: <p> Story created successfully!</p>,
              error: (e) => <p>{e.message}</p>,
            })
          }
        >
          <Sparkle className="storie-create-icon" />
          Create Story
        </button>
      </div>
    </div>
  );
};

export default Storie_model;
