import React from 'react';

function Video({ video }) {
    return (
      <div>
        < var video={video} />
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
        <var video={video} />
      </div>
    );
  }
  export default Video;