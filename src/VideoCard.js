import React, { useRef } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import { useState } from 'react';

function VideoCard({url, likes, shares, channel, avatarSrc, song }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    // useState -> how we add variables 

    const videoRef = useRef(null);
    // useRef -> 

    const onVideoPress = () => {
        if (isVideoPlaying) {
            // stop
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else {
            // play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    };

  return (
    <div className='videoCard'>
        <VideoHeader />

      <video 
      ref={videoRef}
      onClick={onVideoPress}
      className='videoCard__player' 
      src={url} 
      alt="IG reel video"
      // loop
      />


      <VideoFooter 
      channel={channel}
      likes={likes}
      shares={shares}
      song={song}
      avatarSrc={avatarSrc}
      />
    </div>
  )
}

export default VideoCard;
