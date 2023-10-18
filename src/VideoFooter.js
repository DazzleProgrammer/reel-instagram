import React from 'react';
import './VideoFooter.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
// import Ticker from 'react-ticker';



function VideoFooter({channel,avatarSrc, shares, likes, song}) {
  return (
    <>
      <div className='videoFooter'>

      <div className="videoFooter__text">
      <Avatar src={avatarSrc} />
      <h3> {channel} · <Button>Follow</Button>  </h3>
      </div>

      <div className="videoFooter__ticker">
       {/* <MusicNoteIcon className='videoFooter__icon'/> */}
         {/* <Ticker mode="smooth">
          {({ index }) => (
               
               <h1>{song}</h1>
               
          )}
        </Ticker> */}
      </div>

      <div className="videoFooter__actions">

       <div className="videoFooter__stat">
       <FavoriteBorderOutlinedIcon fontSize='medium' />
       <p>{likes}</p>
       </div> 

       <div className="videoFooter__stat">
       <ModeCommentOutlinedIcon fontSize='medium' />
       <p>{shares}</p>
       </div>

       <div className="videoFooter__stat">
       <SendIcon fontSize='medium' />
       </div> 

        <div className="videoFooter__stat">
        <MoreVertOutlinedIcon fontSize='medium'/>
        </div> 

      </div>

      </div>
      </>
  )
}

export default VideoFooter;
