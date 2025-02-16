import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';


 function Card({post}){
  return (
<div className="card">
    <div className="info">
    <img src={post.postImg} alt="image" className="postImg"></img>
        <span>{post.fullname}</span>
        <span></span>
    </div>
    <div className="interaction">
        <FavoriteIcon></FavoriteIcon>
        <CommentIcon></CommentIcon>
        <ShareIcon></ShareIcon>
        <InfoIcon></InfoIcon>

    </div>
</div>  )
}

export default Card