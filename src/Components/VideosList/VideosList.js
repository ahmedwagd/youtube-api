import React from 'react';
import VideoItem from '../VideoItem/VideoItem';



const VideosList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video, i) => (
    <VideoItem key={i} onVideoSelect={onVideoSelect} video={video} />
  ));
  return (
    <div className="ui relaxed divided list">
      {renderList}
    </div>
  )
}

export default VideosList;
