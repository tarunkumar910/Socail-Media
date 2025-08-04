import React from 'react';
import './css/loading.css'


const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
