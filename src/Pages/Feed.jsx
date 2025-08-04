import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../Components/Loading";
import Stories from "../Components/Stories";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="feed">
      {/* storie and post section */}
      <div className="stories_post">
        <Stories />

        <div className="list_of_post">List of post</div>
      </div>

      {/* right side section */}
      <div className="right_side">
        <div className="sponserd">
          <h1 className="sponsered_message">sponsered</h1>
        </div>

        <div className="recent">
          <h1>recent</h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
