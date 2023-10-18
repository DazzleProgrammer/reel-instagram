import React from 'react';
import './VideoHeader.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


function VideoHeader() {
  return (
    <div className='videoHeader'>
      <ArrowBackIosNewIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  )
}

export default VideoHeader;
