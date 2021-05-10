import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  const renderedList = props.videos.map((video, etag) => {
    return <VideoListItem key={etag} video={video} />;
  });

  return <ul className="col-md-4 list-group">{renderedList}</ul>;
};

export default VideoList;
