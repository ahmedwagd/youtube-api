import React from 'react';
import './VideoItem.css';

const rand = () => {
  return Math.ceil(Math.random() * 1379);
}

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => { onVideoSelect(video) }} className='video-item item' key={`${rand()}`} >
      <img className='ui image' src={video.snippet.thumbnails.medium.url} title={video.snippet.description} alt={video.snippet.description} />
      <div className='content'>
        <p className='header'>{video.snippet.title}</p>
      </div>
      {/* <div>{video.etag + `${rand()}`}</div> */}
    </div>
  )
}

export default VideoItem;
